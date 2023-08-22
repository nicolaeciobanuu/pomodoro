import { Pomodoro } from "@/components/pomodoro";
import styles from "@/styles/_page.module.scss";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Pomodoro />
      </div>
    </>
  );
}
