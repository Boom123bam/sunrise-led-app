export function formatTime(h, m) {
  return `${("0" + h).slice(-2)}:${("0" + m).slice(-2)}`;
}
