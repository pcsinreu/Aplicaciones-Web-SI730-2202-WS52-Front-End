import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3000/660/",
  headers: {
    "Authorization": "Bearer " + sessionStorage.getItem("jwt")
  }
});

export class CommentsServices {

  getCommentById = (id) => {
    return http.get(`comments/${id}`);
  };

  getComments = () => {
    return http.get("comments");
  };

  postComment = (body, postId) => {
    return http.post("comments",
      {
        body,
        postId
      });
  };

  deleteComment(id) {
    return http.delete("comments/" + id);
  }

  putComment(id, body, postId) {
    return http.put("comments/" + id, {
      body,
      postId
    });
  }
}