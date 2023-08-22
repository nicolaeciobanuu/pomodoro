import { List, Trigger } from "./primitives";
import { GearIcon } from "@radix-ui/react-icons";
export function Tabs() {
  return (
    <>
      <List aria-label="Choose timer type">
        <Trigger value="pomodoro">Pomodoro</Trigger>
        <Trigger value="short-break">Short Break</Trigger>
        <Trigger value="long-break">Long Break</Trigger>
        <Trigger value="settings">
          <GearIcon />
        </Trigger>
      </List>
    </>
  );
}
