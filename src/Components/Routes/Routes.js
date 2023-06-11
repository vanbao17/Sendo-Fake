import { config } from '@fortawesome/fontawesome-svg-core';
import routes from '../Config/Config';
import ViewProducts from '../Pages/ViewProducts/ViewProducts';
import HomePage from '../Layout/Components/HomePage/HomePage';
import Cart from '../Pages/Cart/Cart';
import HeaderNoneCate from '../Pages/HeaderNoneCate/HeaderNoneCate';
const publicRoutes = [
    {
        path: routes.home,
        component: HomePage,
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
    {
        path: routes.cart,
        component: Cart,
        layout: HeaderNoneCate,
    },
];
export default publicRoutes;
