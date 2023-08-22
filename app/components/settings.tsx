import * as React from "react";
import { Label } from "./primitives";
import { useSettings } from "@/context";

export function Settings() {
  document.title = "Settings";
  const {
    pomodoroDuration,
    shortBreakDuration,
    longBreakDuration,
    setPomodoroDuration,
    setShortBreakDuration,
    setLongBreakDuration,
  } = useSettings();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    const value = parseInt(event.target.value);

    if (!isNaN(value)) {
      if (type === "pomodoro") {
        setPomodoroDuration(value);
        localStorage.setItem("pomodoroDuration", String(value));
      } else if (type === "shortBreak") {
        setShortBreakDuration(value);
        localStorage.setItem("shortBreakDuration", String(value));
      } else if (type === "longBreak") {
        setLongBreakDuration(value);
        localStorage.setItem("longBreakDuration", String(value));
      }
    }
  };

  return (
    <div>
      <div>
        <Label htmlFor="pomodoroDuration">Pomodoro Duration</Label>
        <input
          type="number"
          id="pomodoroDuration"
          value={pomodoroDuration}
          onChange={(event) => handleChange(event, "pomodoro")}
        />
      </div>
      <div>
        <Label htmlFor="shortBreakDuration">Short Break Duration</Label>
        <input
          type="number"
          id="shortBreakDuration"
          value={shortBreakDuration}
          onChange={(event) => handleChange(event, "shortBreak")}
        />
      </div>
      <div>
        <Label htmlFor="LongBreakDuration">Long Break Duration</Label>
        <input
          type="number"
          id="longBreakDuration"
          value={longBreakDuration}
          onChange={(event) => handleChange(event, "longBreak")}
        />
      </div>
    </div>
  );
}
