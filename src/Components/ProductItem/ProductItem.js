import classNames from 'classnames/bind'
import styles from "./ProductItem.module.scss"
import { important } from '../../Assets/images/image/image'
import { ig } from '../../Assets/images'
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
                        <a className={cx('item')} href=''>
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
                    <a className={cx('item')} href=''>
                        <div className={cx('pdmain-content')}>
                            <div className={cx('image')}>
                                <img className={cx('img-main')} src="https://media3.scdn.vn/img4/2020/04_18/FY2uSlXBNHrCQoRmYbDc_simg_b5529c_250x250_maxb.jpg"></img>
                            </div>
                            <div className={cx('infor')}>
                                <div className={cx('name')}>
                                    <img className={cx('img-shop')} src={ig.shoptag}></img>
                                    <span >Đồng hồ </span>
                                </div>
                                <div className={cx('price')}>
                                    <span className={cx('linethrought')}>{data.oldPrice}</span>
                                    <span className={cx('sale')}>{data.precent}</span>
                                    <h3>{data.price}</h3>
                                </div>
                                <div className={cx('tag')}>
                                    <img className={cx('img-shop')} src={ig.tragoptag}></img>
                                    <span>Trả góp Kredivo</span> 
                                </div>
                                <div className={cx('buyopen')}>
                                    <span>Mở bán</span>
                                </div>
                                <div className={cx('infother')}>
                                    <p>Đã bán 523</p>
                                    <div className={cx('rate-address')}>
                                        <div className={cx('rate')}>
                                            <span>4.2/5</span>
                                            <span className={cx('star')}></span>
                                        </div>
                                        <span>Bình Thuận</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>      
            }
        </div>
     );
}

export default ProductItem;