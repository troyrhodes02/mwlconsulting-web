### EmailJS One-Time Setup

1. Create an EmailJS Account
   - Go to https://www.emailjs.com/ and sign up for a free account
   - Verify your email address

2. Create an Email Service
   - In the EmailJS dashboard, go to "Email Services"
   - Click "Add New Service"
   - Choose "Gmail" or your preferred email service
   - Follow the authentication steps
   - Note down the Service ID

3. Create an Email Template
   - Go to "Email Templates"
   - Click "Create New Template"
   - Design your template using these variables:
     - {{from_name}} - Sender's name
     - {{from_email}} - Sender's email
     - {{subject}} - Email subject
     - {{message}} - Message content
   - Note down the Template ID

4. Get Your Public Key
   - Go to "Account Settings"
   - Copy your Public Key

5. Configure Environment Variables
   - Create a `.env` file in your project root
   - Add these variables:
     ```
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     ```

6. Lock Down Origins (Optional but Recommended)
   - In EmailJS dashboard, go to "Account Settings"
   - Under "Security", add your domain to "Restrict to Domain List"
   - This prevents unauthorized use of your EmailJS account 