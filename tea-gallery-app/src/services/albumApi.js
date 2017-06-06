const API_URL = '/albums';

export default {
  getAll() {
    return fetch(API_URL)
      .then(res => res.json());
  },
  getAlbum(id) {
    return fetch(`${API_URL}/${id}`)
      .then(res => res.json());
  },
  addAlbum(album) {
    return fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify(album),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .then(res => Promise.all([res.ok, res.json()]))
      .then(([ok, json]) => {
        if (!ok) throw json;
        return json;
      });
  },
  deleteAlbum(albumId) {
    return fetch(`${API_URL}/${albumId}`, {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .then(res => Promise.all([res.ok, res.json()]))
      .then(([ok, json]) => {
        if (!ok) throw json;
        return json;
      });
  },
  addImage(image, albumId) {
    return fetch(`${API_URL}/${albumId}/images`, {
      method: 'POST',
      body: JSON.stringify(image),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .then(res => Promise.all([res.ok, res.json()]))
      .then(([ok, json]) => {
        if (!ok) throw json;
        return json;
      });
  },
  deleteImage(imageId, albumId) {
    return fetch(`${API_URL}/${albumId}/images/${imageId}`, {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .then(res => Promise.all([res.ok, res.json()]))
      .then(([ok, json]) => {
        if (!ok) throw json;
        return json;
      });
  }
};