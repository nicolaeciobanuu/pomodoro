"use client";
import { Root } from "./primitives";
import { Tabs } from "./tabs";
import { Contents } from "./contents";
import styles from "@/styles/pomodoro.module.scss";

export function Pomodoro() {
  return (
    <Root defaultValue="pomodoro" className={styles.container}>
      <Tabs />
      <Contents />
    </Root>
  );
}
