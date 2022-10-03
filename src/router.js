import { createRouter,createWebHistory  } from "vue-router"; //Vue vite

import Home from './components/Home.vue';
import About from './components/About.vue'
import Product from './components/Product.vue';
import Comment from './components/Comments.vue';
import Post from './components/Post.vue';
import CommentForm from './components/CommentForm.vue';
import Login from "@/components/Login.vue";


const routes = [ //definimos rutas
  { path: '/', component: Home },
  { path: '/product', component: Product },
  { path: '/comments', component: Comment },
  { path: '/comment', component: CommentForm },
  { path: '/comment/:id', component: CommentForm},
  { path: '/post', component: Post },
  { path: '/login', component: Login },
]

const history = createWebHistory();

const router = createRouter({
    history,
    routes
  }
)

export default router