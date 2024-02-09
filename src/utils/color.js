import { colorKit } from "reanimated-color-picker";

export function wavesToRGB(waves) {
  waves = waves.map((wave) => ({
    ...wave,
    color: colorKit.RGB(wave.color).object(),
  }));
  return waves;
}
