"use client";
import styles from "@/styles/header.module.scss";
import { Toggle } from "@/components/toggle";
import { GitHubLogoIcon, PersonIcon } from "@radix-ui/react-icons";
export function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.right}>
        <a
          href="https://github.com/ciobanunicolae/pomodoro"
          title="View GitHub repository"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className={styles.link}
          aria-label="GitHub"
        >
          <GitHubLogoIcon />
        </a>
        <Toggle />
      </div>
    </div>
  );
}
