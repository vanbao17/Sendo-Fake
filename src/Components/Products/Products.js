import classNames from 'classnames/bind'
import styles from "./Products.module.scss"
import ProductItem from '../ProductItem/ProductItem';
import Buttons from '../Buttons/Buttons';
const cx = classNames.bind(styles)

function Products({data}) {
    return ( 
        <div className={cx('wrapper')}>
                {
                    data.map((item,index) => {
                        return <ProductItem className={cx("prmain")} key={index} pdmain data={item}/>
                    })
                }
                <div className={cx('seemore')}>
                    <div className={cx('container')}>
                        <Buttons className={cx('btn-seemore')}>Xem thêm</Buttons>
                    </div>
                </div>
        </div>
     );
}

export default Products;