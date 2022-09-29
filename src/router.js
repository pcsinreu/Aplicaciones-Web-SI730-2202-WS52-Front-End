import { createRouter,createWebHistory  } from "vue-router"; //Vue vite

import Home from './components/Home.vue';
import About from './components/About.vue'
import Product from './components/Product.vue';
import Comment from './components/Comment.list.vue';
import Post from './components/Post.vue';
import NewComment from './components/comment.new.vue';
import Login from "@/components/Login.vue";


const routes = [ //definimos rutas
  { path: '/', component: Home },
  { path: '/product', component: Product },
  { path: '/comment', component: Comment },
  { path: '/newcomment', component: NewComment },
  { path: '/editcomment/:id', component: NewComment, name:'editcomment', props: true},
  { path: '/post', component: Post },
  { path: '/login', component: Login },
]

const history = createWebHistory();

const router = createRouter({ //configurar liberia vue-router
    history,
    routes
  }
)

export default router