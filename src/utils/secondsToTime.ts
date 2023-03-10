export function secondsToTime(seconds: number): string {
  const min = zeroLeft(Math.floor(seconds / 60) % 60);
  const sec = zeroLeft(Math.floor(seconds % 60) % 60);
  return `${min}:${sec}`;
}

export function zeroLeft(number: number) {
  return Math.floor(number).toString().padStart(2, '0');
}
