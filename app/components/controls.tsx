import styles from "@/styles/controls.module.scss";
export function Controls({
  start,
  reset,
  pause,
  status,
}: {
  start: Function;
  reset: Function;
  pause: Function;
  status: string | undefined;
}) {
  const statusName = ["Running", "Paused", "Resume", "Finished"];
  return (
    <div className={styles.container}>
      {!status && (
        <button type="button" onClick={() => start()} className={styles.start}>
          Start 
        </button>
      )}
      {status === statusName[3] && (
        <button onClick={() => start()} className={styles.restart}>
          Restart 
        </button>
      )}
      {(status === statusName[1] || status === statusName[0]) && (
        <div>
          <button onClick={() => reset()} className={styles.reset}>
            Reset
          </button>
          <button
            onClick={() => pause()}
            className={status === statusName[1] ? styles.resume : styles.pause}
          >
            {status === statusName[1] ? statusName[2] : "Pause"}
          </button>
        </div>
      )}
    </div>
  );
}
