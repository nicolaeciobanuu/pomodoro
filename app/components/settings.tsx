import * as React from "react";
import { Label } from "./primitives";
import { useSettings } from "@/providers";
import styles from "@/styles/settings.module.scss";

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
    <div className={styles.container}>
      <div className={styles.category}>
        <Label htmlFor="pomodoroDuration" className={styles.label}>
          Pomodoro Duration
        </Label>
        <input
          type="text"
          id="pomodoroDuration"
          inputMode="numeric"
          pattern="[0-9]*"
          value={pomodoroDuration}
          onChange={(event) => handleChange(event, "pomodoro")}
        />
      </div>
      <div className={styles.category}>
        <Label htmlFor="shortBreakDuration" className={styles.label}>
          Short Break Duration
        </Label>
        <input
          type="text"
          id="shortBreakDuration"
          inputMode="numeric"
          pattern="[0-9]*"
          value={shortBreakDuration}
          onChange={(event) => handleChange(event, "shortBreak")}
        />
      </div>
      <div className={styles.category}>
        <Label htmlFor="LongBreakDuration" className={styles.label}>
          Long Break Duration
        </Label>
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          id="longBreakDuration"
          value={longBreakDuration}
          onChange={(event) => handleChange(event, "longBreak")}
        />
      </div>
    </div>
  );
}
