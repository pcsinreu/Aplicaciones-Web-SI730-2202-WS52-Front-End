import axios from 'axios'

export class CommentsServices {

    getComments = () => {
    return axios.get("http://localhost:3000/comments")
  }
}