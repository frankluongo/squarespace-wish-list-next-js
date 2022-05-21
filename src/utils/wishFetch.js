export default async function wishFetch(url, body) {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    });
    return await res.json();
  } catch (e) {
    throw new Error(e);
  }
}
