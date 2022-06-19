import React from "react";
import PanToolIcon from '@mui/icons-material/PanTool';
import MenuIcon from '@mui/icons-material/Menu'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Container from "@mui/material/Container"
import {useNavigate} from "react-router-dom";
import {StyledAppBar} from "./Navigation.styled";

export default function Navigation() {
  const navigate = useNavigate()
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const pages = ['Home', 'Configurator']
  const links: Record<string, string> = {Home: '/', Configurator: '/config'}

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  }

  const handleCloseNavMenu = (page: string | null) => {
    setAnchorElNav(null);
    if (page !== null) {
      navigate(links[page])
    }
  }

  return (
    <StyledAppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {renderMobileComponents(handleOpenNavMenu, anchorElNav, handleCloseNavMenu, pages)}
          {renderDesktopComponents(pages, handleCloseNavMenu)}
        </Toolbar>
      </Container>
    </StyledAppBar>
  )
}

function renderMobileComponents(handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void, anchorElNav: HTMLElement | null, handleCloseNavMenu: (page: string | null) => void, pages: string[]) {
  return <>
    <PanToolIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>
    <Typography
      variant="h6"
      noWrap
      component="a"
      href="/"
      sx={{
        mr: 2,
        display: {xs: 'none', md: 'flex'},
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
      }}
    >
      GLOVE UI
    </Typography>


    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
      <IconButton
        size="large"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon/>
      </IconButton>

      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={() => handleCloseNavMenu(null)}
        sx={{
          display: {xs: 'block', md: 'none'},
        }}
      >
        {pages.map((page) => (
          <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
            <Typography textAlign="center">{page}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  </>;
}

function renderDesktopComponents(pages: string[], handleCloseNavMenu: (page: string | null) => void) {
  return <>
    <PanToolIcon sx={{display: {xs: 'flex', md: 'none'}, mr: 1}}/>
    <Typography
      variant="h5"
      noWrap
      component="a"
      href=""
      sx={{
        mr: 2,
        display: {xs: 'flex', md: 'none'},
        flexGrow: 1,
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
      }}
    >
      GLOVE UI
    </Typography>
    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
      {pages.map((page) => (
        <Button
          key={page}
          onClick={() => handleCloseNavMenu(page)}
          sx={{my: 2, color: 'white', display: 'block'}}
        >
          {page}
        </Button>
      ))}
    </Box>
  </>;
}