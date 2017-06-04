const API_URL = '/api/albums';

export default {
  getAll() {
    return fetch(API_URL)
      .then(res => res.json());
  },

  getAlbum(id) {
    return fetch(`${API_URL}/${id}`)
      .then(res => res.json());
  },

  add(album) {
    return fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify(album),
      headers: new Headers({ 'Content Type': 'application/json' })
    })
      .then(res => Promise.all([res.ok, res.json()]))
      .then(([ok, json]) => {
        if (!ok) throw json;
        return json;
      })
  },

  addPom(image) {
    return fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify(image),
      headers: new Headers({ 'Content Type': 'application/json' })
    })
      .then(res => Promise.all([res.ok, res.json()]))
      .then(([ok, json]) => {
        if (!ok) throw json;
        return json;
      })
  },

  deletePom(image) {
    return fetch(API_URL);
  }
}