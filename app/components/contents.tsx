"use client";
import * as React from "react";
import { Content } from "./primitives";
import { Timer } from "./timer";
import { Settings } from "./settings";
import { useSettings } from "@/context";

export function Contents() {
  const { pomodoroDuration, shortBreakDuration, longBreakDuration } =
    useSettings();

  return (
    <>
      <Content value="pomodoro">
        <Timer type="Pomodoro" duration={pomodoroDuration} />
      </Content>
      <Content value="short-break">
        <Timer type="Short Break" duration={shortBreakDuration} />
      </Content>
      <Content value="long-break">
        <Timer type="Long Break" duration={longBreakDuration} />
      </Content>
      <Content value="settings">
        <Settings />
      </Content>
    </>
  );
}
