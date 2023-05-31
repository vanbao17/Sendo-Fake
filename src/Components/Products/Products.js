import classNames from 'classnames/bind'
import styles from "./Products.module.scss"
import ProductItem from '../ProductItem/ProductItem';
const cx = classNames.bind(styles)

function Products() {
    return ( 
        <div className={cx('wrapper')}>
            <ProductItem pdnormal/>
            <ProductItem pdnormal/>
            <ProductItem pdnormal/>
            <ProductItem pdnormal/>
        </div>
     );
}

export default Products;