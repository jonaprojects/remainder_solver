import React from "react";
import styles from "./P.module.css";

export default function P({ children, className = "", ...props }) {
  return (
    <p className={`${styles.par} ${className}`} {...props}>
      {children}
    </p>
  );
}
