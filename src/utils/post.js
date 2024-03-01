import { toRGBobj, wavesToRGB } from "./color";

export async function postWaves(waves, ip) {
  const controller = new AbortController();
  setTimeout(() => controller.abort(), 5000);

  const response = await fetch(`http://${ip}/`, {
    method: "POST",
    signal: controller.signal,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(wavesToRGB(waves)),
  });
  return response.ok;
}

export async function testResponse(ip) {
  const controller = new AbortController();
  setTimeout(() => controller.abort(), 5000);

  const response = await fetch(`http://${ip}/`, {
    method: "GET",
    signal: controller.signal,
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch IP`);
  }

  const data = await response.text();
  return data;
}

export async function postColor(hexColor, ip) {
  const controller = new AbortController();
  setTimeout(() => controller.abort(), 5000);

  const response = await fetch(`http://${ip}/color`, {
    method: "POST",
    signal: controller.signal,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(toRGBobj(hexColor)),
  });

  return response.ok;
}
