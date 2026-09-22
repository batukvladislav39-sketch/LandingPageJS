const API_URL = import.meta.env.VITE_API_URL;

async function getJSON(path) {
    const res = await fetch(`${API_URL}${path}`);

    if (!res.ok) {
        throw new Error (`HTTP ${res.status}`);
    }

    return res.json();
}

export function getSettnigs() {
    return getJSON('/api/settings');
}

export function getPages(path) {
    return getJSON(`/api/pages?path=${encodeURIComponent(path)}`);
}