import { createRouter, createWebHistory } from 'vue-router'
import type {RouterOptions, Router} from 'vue-router'
import routes from './routes'

const isPro = process.env.NODE_ENV === 'production';

const options: RouterOptions = {
  history: createWebHistory(isPro? '/dist/' : '/'),
  routes
}

const router: Router = createRouter(options)

export default router