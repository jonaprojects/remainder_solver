"use client";

import { useState } from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import classes from "./Navbar.module.css";
import Link from "next/link";

import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubButton from "react-github-btn";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className={classes.container}>
      <div className={classes["nav-items"]}>
        <img src="logo.png" className={classes.logo} alt="logo" />
        <ul className={classes["nav-links"]}>
          <li className={classes["nav-link"]}>
            <Link href="/">Home</Link>
          </li>
          <li className={classes["nav-link"]}>
            <Link href="/">About</Link>
          </li>
          <li className={classes["nav-link"]}>
            <Link href="/background">Background</Link>
          </li>
        </ul>
        <div className={classes["github-buttons"]}>
          <GitHubButton
            href="https://github.com/buttons"
            data-color-scheme="no-preference: light; light: light; dark: dark;"
            data-size="large"
            aria-label="Follow @buttons on GitHub"
          >
            Follow @buttons
          </GitHubButton>
          <GitHubButton
            href="https://github.com/buttons/github-buttons"
            data-color-scheme="light"
            data-icon="octicon-star"
            data-size="large"
            aria-label="Star buttons/github-buttons on GitHub"
          >
            Star
          </GitHubButton>
        </div>

        {/* Hamburger Menu Button */}
        <div className={classes["menu-button"]}>
          <IconButton color="inherit" aria-label="menu" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem onClick={handleClose}>
              <a href="/" className={classes["menu-link"]}>
                Home
              </a>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <a href="/" className={classes["menu-link"]}>
                About
              </a>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link href="/background" className={classes["menu-link"]}>
                Background
              </Link>
            </MenuItem>
          </Menu>
        </div>
      </div>
    </nav>
  );
}
