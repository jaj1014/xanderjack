import Vue from 'vue'
import VueRouter from 'vue-router'

import appRoutes from './routes/app'

const routes = [
  ...appRoutes
]

Vue.use(VueRouter);

export default new VueRouter({ routes })