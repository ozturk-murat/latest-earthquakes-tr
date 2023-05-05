import { JetBrains_Mono } from "next/font/google";
import styles from "../../styles/header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.overlay}>
        <span>RECENT EARTHQUAKES</span>
      </div>
    </div>
  );
}