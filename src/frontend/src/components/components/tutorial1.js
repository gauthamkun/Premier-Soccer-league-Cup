import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/stats");
  }

  get(id) {
    return http.get(`/stats/${id}`);
  }

  create(data) {
    return http.post("/stats", data);
  }

  update(id, data) {
    return http.put(`/stats/${id}`, data);
  }

  delete(id) {
    return http.delete(`/stats/${id}`);
  }

  deleteAll() {
    return http.delete(`/stats`);
  }

  findByTitle(title) {
    return http.get(`/stats?title=${title}`);
  }
}

export default new TutorialDataService();