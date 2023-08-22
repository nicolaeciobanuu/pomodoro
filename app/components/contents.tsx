"use client";
import * as React from "react";
import { Content } from "./primitives";
import { Timer } from "./timer";
import { Settings } from "./settings";
import { useSettings } from "@/providers";
import styles from "@/styles/contents.module.scss";
export function Contents() {
  const { pomodoroDuration, shortBreakDuration, longBreakDuration } =
    useSettings();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; //TODO: add loading spinner
  }
  return (
    <div className={styles.container}>
      <Content value="pomodoro" className={styles.content}>
        <Timer type="Pomodoro" duration={pomodoroDuration} />
      </Content>
      <Content value="short-break" className={styles.content}>
        <Timer type="Short Break" duration={shortBreakDuration} />
      </Content>
      <Content value="long-break" className={styles.content}>
        <Timer type="Long Break" duration={longBreakDuration} />
      </Content>
      <Content value="settings" className={styles.content}>
        <Settings />
      </Content>
    </div>
  );
}
