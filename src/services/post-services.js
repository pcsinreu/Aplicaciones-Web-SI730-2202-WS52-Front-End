import axios from 'axios'

export class PostsServices {

  getPots = () => {
    return axios.get("http://localhost:3000/posts")
  }
}