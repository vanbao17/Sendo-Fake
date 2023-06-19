import routes from '../Config/Config';
import ViewProducts from '../Pages/ViewProducts/ViewProducts';
import HomePage from '../Layout/Components/HomePage/HomePage';
import Cart from '../Pages/Cart/Cart';
import HeaderNoneCate from '../Pages/HeaderNoneCate/HeaderNoneCate';
import Detail from '../Pages/Detail/Detail';
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
    {
        path: routes.detail,
        component: Detail,
        layout: HeaderNoneCate,
    },
];
export default publicRoutes;
