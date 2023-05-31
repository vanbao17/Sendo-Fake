
import classNames from "classnames/bind";
import styles from "../DefaultLayout/DefaultLayout.module.scss"
import { home } from "../../../../Assets/images/image/image";
import Catetorys from "../../../Catetorys/Catetorys";
import Banner from "../Banner/Banner";
const cx = classNames.bind(styles)
function HomePage() {
    return <div className={cx('wrapper')}>
        <Catetorys data={home.catetorys} />
        <Banner/>
    </div>;
}

export default HomePage;