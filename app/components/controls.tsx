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
    <div>
      {!status && <button onClick={() => start()}>Start Timer</button>}
      {status === statusName[3] && (
        <button onClick={() => start()}>Restart Timer</button>
      )}
      {(status === statusName[1] || status === statusName[0]) && (
        <div>
          <button onClick={() => reset()} >
            Reset
          </button>
          <button onClick={() => pause()}>
            {status === statusName[1] ? statusName[2] : "Pause"}
          </button>
        </div>
      )}
    </div>
  );
}
