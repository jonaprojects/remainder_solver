import React from "react";
import styles from "./H3.module.css";

export default function H3({ children, className = "", ...props }) {
  return (
    <h3 className={`${styles.h3} ${className}`} {...props}>
      {children}
    </h3>
  );
}
