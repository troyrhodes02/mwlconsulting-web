import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  Container,
  useMediaQuery,
  InputBase,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const pathname = usePathname();

  const navigationLinks = [
    { text: 'Home', path: '/' },
    { text: 'Contact', path: '/contact' },
  ];

  const isActiveRoute = (path: string) => pathname === path;

  const handleSearchOpen = () => {
    setIsSearchOpen(true);
  };

  const handleSearchClose = () => {
    setIsSearchOpen(false);
  };

  const renderNavigationLinks = () => (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        justifyContent: 'center',
      }}
    >
      {navigationLinks.map((link) => (
        <Button
          key={link.text}
          component={Link}
          href={link.path}
          sx={{
            color: 'white',
            px: 3,
            py: 1,
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            },
            ...(isActiveRoute(link.path) && {
              backgroundColor: 'rgba(0, 0, 0, 0.25)',
              fontWeight: 600,
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
              },
            }),
          }}
        >
          {link.text}
        </Button>
      ))}
    </Box>
  );

  const mobileMenu = (
    <Drawer
      anchor="right"
      open={isMenuOpen}
      onClose={() => setIsMenuOpen(false)}
      PaperProps={{
        sx: {
          width: '100%',
          maxWidth: 300,
          backgroundColor: theme.palette.primary.main,
          color: 'white',
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        <IconButton
          color="inherit"
          onClick={() => setIsMenuOpen(false)}
          sx={{ mb: 2 }}
        >
          <CloseIcon />
        </IconButton>
        <List>
          {navigationLinks.map((link) => (
            <ListItem key={link.text} disablePadding>
              <ListItemButton
                component={Link}
                href={link.path}
                onClick={() => setIsMenuOpen(false)}
                sx={{
                  py: 2,
                  ...(isActiveRoute(link.path) && {
                    backgroundColor: 'rgba(0, 0, 0, 0.25)',
                    fontWeight: 600,
                  }),
                }}
              >
                <ListItemText primary={link.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );

  return (
    <AppBar
      position="sticky"
      sx={{
        background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between', position: 'relative' }}>
          <Typography
            variant="h6"
            component="h1"
            sx={{
              fontWeight: 'bold',
              flexShrink: 0,
            }}
          >
            MWL Consulting, LLC.
          </Typography>

          {!isMobile && (
            <Box
              sx={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 1,
              }}
            >
              {renderNavigationLinks()}
            </Box>
          )}

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {!isMobile && (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: isSearchOpen
                    ? 'rgba(255, 255, 255, 0.15)'
                    : 'transparent',
                  borderRadius: 1,
                  transition: 'width 0.3s',
                  width: isSearchOpen ? '240px' : '40px',
                  overflow: 'hidden',
                }}
              >
                {isSearchOpen ? (
                  <>
                    <InputBase
                      placeholder="Search..."
                      sx={{
                        color: 'white',
                        ml: 2,
                        flex: 1,
                        '& input': {
                          color: 'white',
                          '&::placeholder': {
                            color: 'rgba(255, 255, 255, 0.7)',
                            opacity: 1,
                          },
                        },
                      }}
                      autoFocus
                    />
                    <IconButton
                      color="inherit"
                      onClick={handleSearchClose}
                      size="small"
                      sx={{ p: 1 }}
                    >
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  </>
                ) : (
                  <IconButton
                    color="inherit"
                    onClick={handleSearchOpen}
                    sx={{ p: 1 }}
                  >
                    <SearchIcon />
                  </IconButton>
                )}
              </Box>
            )}

            {isMobile && (
              <IconButton
                color="inherit"
                onClick={() => setIsMenuOpen(true)}
                edge="end"
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </Container>
      {mobileMenu}
    </AppBar>
  );
};

export default Navbar;
