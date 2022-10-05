import { createRouter,createWebHistory  } from "vue-router"; //Vue vite

import Home from './components/home-content.component.vue';
import About from './components/About.vue'
import Product from './components/product-form.component.vue';
import Comment from './components/comments-list.component.vue';
import Post from './components/post-list.component.vue';
import CommentForm from './components/comment-form.component.vue';
import Login from "@/components/Login.component.vue";
import notFoundComponent from "@/components/not-found.component.vue";

const routes = [ //definimos rutas
  { path: '/', component: Home },
  { path: '/product', component: Product },
  { path: '/comments', component: Comment },
  { path: '/comment', component: CommentForm },
  { path: '/comment/:id', component: CommentForm},
  { path: '/post', component: Post },
  { path: '/login', component: Login },
  { path: '/:catchAll(.*)', component: notFoundComponent },
]

const history = createWebHistory();

const router = createRouter({
    history,
    routes
  }
)

export default router