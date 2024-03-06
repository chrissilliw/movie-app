"use client";

import {
  AppBar,
  IconButton,
  Link,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { PersonOutline, Search } from "@mui/icons-material";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const navItems = [
    { name: "Filmer", link: "movies" },
    { name: "Serier", link: "shows" },
    { name: "Om Appen", link: "about" },
  ];

  const pathname = usePathname();

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  return (
    <>
      <AppBar position="static" className="z-30" sx={{ zIndex: 1500 }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" component="div">
            <Link href={"/"} underline="none">
              Movie App
            </Link>
          </Typography>
          <Stack direction="row" spacing={2}>
            {navItems.map((item) => {
              const isActive = pathname.endsWith(item.link);
              return (
                <Link
                  href={"/" + item.link}
                  key={item.link}
                  sx={{ color: "#fff", pt: 1 }}
                  underline="none"
                  variant={isActive ? "button" : "body1"}
                  color="white"
                >
                  {item.name}
                </Link>
              );
            })}
          </Stack>
          <Stack direction="row" spacing={2}>
            {/* <IconButton color="inherit">
              <SearchRoundedIcon />
            </IconButton> */}
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <IconButton color="inherit">
              <PersonOutline />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
