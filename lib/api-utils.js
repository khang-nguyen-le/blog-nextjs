export async function createMessage(messageDetails) {
  const res = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(messageDetails),
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) throw new Error("");

  const data = res.json();

  return data;
}
