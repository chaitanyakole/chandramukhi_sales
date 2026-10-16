const WEBHOOK_ENDPOINT = process.env.REACT_APP_LEAD_WEBHOOK_URL;

export async function submitLead(payload) {
  if (!WEBHOOK_ENDPOINT) {
    return { ok: false, skipped: true };
  }

  try {
    const response = await fetch(WEBHOOK_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    return { ok: response.ok, skipped: false };
  } catch (err) {
    return { ok: false, skipped: false, error: err.message };
  }
}
