import { config } from '@fortawesome/fontawesome-svg-core'
import routes from '../Config/Config'
import ViewProducts from '../Pages/ViewProducts/ViewProducts'

const publicRoutes = [
  {
    path: routes.home,
    component: ViewProducts,
  },
  {
    path: routes.dodung,
    component: ViewProducts,
  },
  {
    path: routes.chamsoc,
    component: ViewProducts,
  },
  {
    path: routes.maymoc,
    component: ViewProducts,
  },
  {
    path: routes.phukien,
    component: ViewProducts,
  },
  {
    path: routes.tuixach,
    component: ViewProducts,
  },
]
export default publicRoutes
