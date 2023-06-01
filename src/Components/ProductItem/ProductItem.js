import classNames from 'classnames/bind'
import styles from "./ProductItem.module.scss"
import { important } from '../../Assets/images/image/image'
const cx = classNames.bind(styles)

function ProductItem({pdnormal,pdmain,className,data}) {
    const classes = cx("wrapper",{
        [className]:className
    })
    return ( 
        <div className={classes}>
            {
                pdnormal &&
                    <div className={cx('item-slide')}>
                        <a className={cx('item')}>
                            <div className={cx('content')}>
                                <div className={cx('image')}>
                                    <img className={cx('img-main')} src={data.img}></img>
                                    <img className={cx('img-sale')} src={important.sale}></img>
                                </div>
                                <div className={cx('price')}>
                                    <h3>{data.price}</h3>
                                    <span className={cx('linethrought')}>{data.oldPrice}</span>
                                    <span className={cx('sale')}>{data.precent}</span>
                                </div>
                            </div>
                        </a>
                    </div>   
            }
            {
                pdmain &&
                <div className={cx('item-pdmain')}>
                    pdmain
                </div>      
            }
        </div>
     );
}

export default ProductItem;