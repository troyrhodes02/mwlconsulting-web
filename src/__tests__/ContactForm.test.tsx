import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import emailjs from '@emailjs/browser';
import ContactForm from '../components/ContactForm';

// Mock emailjs
jest.mock('@emailjs/browser', () => ({
  send: jest.fn(),
}));

describe('ContactForm', () => {
  const mockEmailjs = emailjs as jest.Mocked<typeof emailjs>;

  beforeEach(() => {
    // Clear mock before each test
    jest.clearAllMocks();
  });

  it('renders all form fields', () => {
    render(<ContactForm />);

    expect(screen.getByPlaceholderText(/your full name/i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/your email address/i)
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/what is this regarding/i)
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/tell us more about your needs/i)
    ).toBeInTheDocument();
  });

  it('validates required fields', async () => {
    render(<ContactForm />);

    const submitButton = screen.getByRole('button', { name: /send message/i });
    expect(submitButton).toBeDisabled();

    // Fill out form
    await userEvent.type(
      screen.getByPlaceholderText(/your full name/i),
      'John Doe'
    );
    await userEvent.type(
      screen.getByPlaceholderText(/your email address/i),
      'john@example.com'
    );
    await userEvent.type(
      screen.getByPlaceholderText(/what is this regarding/i),
      'Test Subject'
    );
    await userEvent.type(
      screen.getByPlaceholderText(/tell us more about your needs/i),
      'Test Message'
    );

    expect(submitButton).toBeEnabled();
  });

  it('handles successful form submission', async () => {
    mockEmailjs.send.mockResolvedValueOnce({ status: 200, text: 'OK' });

    render(<ContactForm />);

    // Fill out form
    await userEvent.type(
      screen.getByPlaceholderText(/your full name/i),
      'John Doe'
    );
    await userEvent.type(
      screen.getByPlaceholderText(/your email address/i),
      'john@example.com'
    );
    await userEvent.type(
      screen.getByPlaceholderText(/what is this regarding/i),
      'Test Subject'
    );
    await userEvent.type(
      screen.getByPlaceholderText(/tell us more about your needs/i),
      'Test Message'
    );

    // Submit form
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    // Verify emailjs was called
    await waitFor(() => {
      expect(mockEmailjs.send).toHaveBeenCalledWith(
        expect.any(String),
        expect.any(String),
        expect.objectContaining({
          from_name: 'John Doe',
          from_email: 'john@example.com',
          subject: 'Test Subject',
          message: 'Test Message',
        }),
        expect.any(String)
      );
    });

    // Verify success message
    await waitFor(() => {
      expect(
        screen.getByText(/message sent successfully/i)
      ).toBeInTheDocument();
    });
  });

  it('handles failed form submission', async () => {
    mockEmailjs.send.mockRejectedValueOnce(new Error('Failed to send'));

    render(<ContactForm />);

    // Fill out form
    await userEvent.type(
      screen.getByPlaceholderText(/your full name/i),
      'John Doe'
    );
    await userEvent.type(
      screen.getByPlaceholderText(/your email address/i),
      'john@example.com'
    );
    await userEvent.type(
      screen.getByPlaceholderText(/what is this regarding/i),
      'Test Subject'
    );
    await userEvent.type(
      screen.getByPlaceholderText(/tell us more about your needs/i),
      'Test Message'
    );

    // Submit form
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    // Verify error message
    await waitFor(() => {
      expect(screen.getByText(/failed to send message/i)).toBeInTheDocument();
    });
  });
});
