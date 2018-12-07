// Routed Views
import Home from '../../views/Home'
import About from '../../views/About'
import Projects from '../../views/Projects'
import NotFound from '../../views/NotFound'

export default [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/projects', component: Projects },
  { path: '/**', component: NotFound}
]