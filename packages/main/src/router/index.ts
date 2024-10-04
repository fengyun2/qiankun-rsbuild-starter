import { createRouter, createWebHistory } from 'vue-router'
import type {RouterOptions, Router} from 'vue-router'
import routes from './routes'
// import createRouteGuard from './guard';

const isPro = process.env.NODE_ENV === 'production';

const options: RouterOptions = {
  history: createWebHistory(isPro? '/' : '/'),
  routes
}

const router: Router = createRouter(options)

// createRouteGuard(router)

export default router