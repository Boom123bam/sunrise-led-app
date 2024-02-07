export async function postWaves(waves, ip) {
  console.log(JSON.stringify(waves));
  const response = await fetch(ip, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(waves),
  });
  return response.json();
}
