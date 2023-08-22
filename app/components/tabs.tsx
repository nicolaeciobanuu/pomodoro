import { List, Trigger } from "./primitives";
import { GearIcon } from "@radix-ui/react-icons";
import styles from "@/styles/tabs.module.scss";
import classNames from "classnames";
export function Tabs() {
  return (
    <>
      <List aria-label="Choose timer type" className={styles.list}>
        <Trigger value="pomodoro" className={styles.tab}>
          Pomodoro
        </Trigger>
        <Trigger value="short-break" className={styles.tab}>
          Short Break
        </Trigger>
        <Trigger value="long-break" className={styles.tab}>
          Long Break
        </Trigger>
        <Trigger
          value="settings"
          className={classNames(styles.tab, styles.icon_container)}
        >
          <GearIcon  className={styles.icon} />
        </Trigger>
      </List>
    </>
  );
}
