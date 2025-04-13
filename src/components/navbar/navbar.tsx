import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import { Page } from "../../App";
import { NavLink } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

interface MobileMenuProps {
  pages: Page[];
  brandName?: string;
}

const Navbar: React.FC<MobileMenuProps> = ({
  pages,
  brandName = "DAWEX-POL",
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setIsDrawerOpen(open);
    };

  const drawerList = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {pages.map((item, i) => (
          <NavLink
            key={item.name}
            to={item.path}
            style={{ color: "inherit", textDecoration: "none" }}
            end
          >
            <ListItem
              style={{
                borderBottom: i === pages.length - 1 ? "" : "1px solid gray",
              }}
              disablePadding
            >
              <ListItemButton>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Box>
  );

  const navButtonsList = () => (
    <Stack
      direction="row"
      spacing={2}
      sx={{ display: { xs: "none", md: "flex" } }}
    >
      {pages.map((page) => (
        <Button
          key={page.name}
          component={NavLink}
          to={page.path}
          sx={{
            color: "#fff",
            fontWeight: 500,
            "&.active": {
              borderBottom: "2px solid white",
            },
            "&:hover": {
              color: "#fff", // removes default hover background
            },
          }}
          end
        >
          {page.name}
        </Button>
      ))}
    </Stack>
  );

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "#blue" }}>
        <Toolbar
          style={{
            width: "94%",
            maxWidth: 1100,
            marginLeft: "auto",
            marginRight: "auto",
            padding: 0,
          }}
        >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {brandName}
          </Typography>

          {/* Desktop navigation */}
          {navButtonsList()}

          {/* Hamburger for mobile */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        {drawerList()}
      </Drawer>
      <Toolbar />
    </>
  );
};

export default Navbar;
