"use client";

import { useState } from "react";
import Link from "next/link";
import { AppBar, Toolbar, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubButton from "react-github-btn";
import classes from "./Navbar.module.css";

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
      {/* Logo as a link to home */}
      <Link href="/" className={classes.logoLink}>
        <img src="logo.png" className={classes.logo} alt="logo" />
      </Link>

      {/* Navigation Links - absolutely centered */}
      <ul className={classes["nav-links"]}>
        <li className={classes["nav-link"]}>
          <Link href="/">Home</Link>
        </li>
        <li className={classes["nav-link"]}>
          <Link href="/background">Background</Link>
        </li>
        <li className={classes["nav-link"]}>
          <Link href="/examples">Examples</Link>
        </li>
      </ul>

      {/* GitHub Buttons */}
      <div className={classes["github-buttons"]}>
        <GitHubButton
          href="https://github.com/jonaprojects"
          data-size="large"
          aria-label="Follow JonaProjects on GitHub"
        >
          Follow @jonaprojects
        </GitHubButton>
        <GitHubButton
          href="https://github.com/jonaprojects/remainder_solver"
          data-icon="octicon-star"
          data-size="large"
          aria-label="Star jonaprojects/remainder-solver on GitHub"
        >
          Star
        </GitHubButton>
      </div>

      {/* Mobile Menu Button */}
      <div className={classes["menu-button"]}>
        <IconButton color="inherit" aria-label="menu" onClick={handleClick}>
          <MenuIcon />
        </IconButton>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={handleClose}>
            <Link href="/" className={classes["menu-link"]}>
              Home
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link href="/background" className={classes["menu-link"]}>
              Background
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link href="/examples" className={classes["menu-link"]}>
              Examples
            </Link>
          </MenuItem>
        </Menu>
      </div>
    </nav>
  );
}
