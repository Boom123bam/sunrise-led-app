export async function postWaves(waves, ip) {
  console.log(JSON.stringify(waves));
  const response = await fetch(`http://${ip}/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(waves),
  });
  return response.ok;
}

export async function testResponse(ip) {
  const response = await fetch(`http://${ip}/`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch IP`);
  }

  const data = await response.text();
  return data;
}
