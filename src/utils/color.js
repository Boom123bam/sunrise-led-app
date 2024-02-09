import { colorKit } from "reanimated-color-picker";

export function wavesToRGB(waves) {
  waves = waves.map((wave) => ({
    ...wave,
    color: toRGBobj(wave.color),
  }));
  return waves;
}

function toRGBobj(hex) {
  const rgba = colorKit.RGB(hex).object();
  delete rgba["a"];
  return rgba;
}
