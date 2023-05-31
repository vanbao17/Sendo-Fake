
import classNames from "classnames/bind";
import styles from "../DefaultLayout/DefaultLayout.module.scss"
import { home } from "../../../../Assets/images/image/image";
import Catetorys from "../../../Catetorys/Catetorys";
import Banner from "../Banner/Banner";
import ContainerIntro from "../../../ContainerIntro/ContainerIntro";
import Slide from "../Slides/Slide";
import { proSale } from "../../../../Assets/images/sale";
const cx = classNames.bind(styles)
function HomePage() {
    return <div className={cx('wrapper')}>
        <Catetorys data={home.catetorys} />
        <Banner/>
        <ContainerIntro>
            <Slide data={proSale} ovr={7}/>
        </ContainerIntro>
    </div>;
}

export default HomePage;