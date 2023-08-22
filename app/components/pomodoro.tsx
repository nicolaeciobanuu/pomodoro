"use client";
import * as React from "react";
import { Root } from "./primitives";
import { Tabs } from "./tabs";
import { Contents } from "./contents";

export function Pomodoro() {
 
  return (
    <Root defaultValue="pomodoro">
      <Tabs />
      <Contents />
    </Root>
  );
}
