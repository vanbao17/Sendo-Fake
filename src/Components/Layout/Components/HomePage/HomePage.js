import classNames from 'classnames/bind';
import styles from '../DefaultLayout/DefaultLayout.module.scss';
import { home, important } from '../../../../Assets/images/image/image';
import Catetorys from '../../../Catetorys/Catetorys';
import Banner from '../Banner/Banner';
import ContainerIntro from '../../../ContainerIntro/ContainerIntro';
import Slide from '../Slides/Slide';
import { proSale } from '../../../../Assets/images/sale';
import { cateExtention } from '../../../../Assets/images/extentions/extention';
import { genuine } from '../../../../Assets/images/Genuine/Genuine';
import Products from '../../../Products/Products';
const cx = classNames.bind(styles);
function HomePage() {
    return (
        <div className={cx('wrapper')}>
            <Catetorys data={home.catetorys} mini />
            <Banner img={home.banner} />
            <ContainerIntro>
                <Slide data={proSale} ovr={7} size={144} prod={true} />
            </ContainerIntro>
            <ContainerIntro title="Thương hiệu chính hãng" icon={important.tickxanh}>
                <Banner img={important.bannerGenuine} />
                <Slide data={genuine} ovr={6} size={198} prod={false} />
            </ContainerIntro>
            <ContainerIntro title="Tiện ích cho bạn" icon={important.extention}>
                <Catetorys children data={cateExtention} mini bg={true} />
            </ContainerIntro>
            <div className={cx('containerPro')} style={{ width: '85%', margin: '0px auto' }}>
                <Products data={proSale} />
            </div>
        </div>
    );
}

export default HomePage;
