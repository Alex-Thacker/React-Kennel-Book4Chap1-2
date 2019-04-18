const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/animals/${id}`).then(e => e.json())
  },
  getAll(resource) {
    return fetch(`${remoteURL}/${resource}`).then(e => e.json())
  },
  deleteItem(resource, id) {
    return fetch(`http://localhost:5002/${resource}/${id}`, {
        method: "DELETE"
    })
    .then(e => e.json())
  },
  postItem(resource, object) {
    return fetch(`${remoteURL}/${resource}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(object)
    }).then(data => data.json())
  }
}