import classNames from 'classnames/bind';
import styles from './ProductItem.module.scss';
import { important } from '../../Assets/images/image/image';
import { ig } from '../../Assets/images';
import { useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);

function ProductItem({ pdnormal, pdmain, className, data, width, height }) {
    const classes = cx('wrapper', {
        [className]: className,
    });
    const navigate = useNavigate();
    function HandlePath() {
        navigate('/detail', { state: { dt: data } });
    }
    return (
        <div className={classes}>
            {pdnormal && (
                <div className={cx('item-slide')}>
                    <a className={cx('item')} href="">
                        <div className={cx('content')} style={{ width: width, height: height }}>
                            <div className={cx('image')}>
                                <img className={cx('img-main')} src={data.img}></img>
                                {data.name ? <></> : <img className={cx('img-sale')} src={important.sale}></img>}
                            </div>
                            {data.name && <div className={cx('name')}>{data.name}</div>}
                            <div className={cx('price')} style={{ paddingTop: data.name ? ' 0px' : '20px' }}>
                                {!data.name && <h3>{data.price}</h3>}
                                <span className={cx('linethrought')}>{data.oldPrice}</span>
                                <span className={cx('sale')}>{data.precent}</span>
                                {data.name && <h3>{data.price}</h3>}
                            </div>
                        </div>
                    </a>
                </div>
            )}
            {pdmain && (
                <div className={cx('item-pdmain')} onClick={HandlePath}>
                    <div className={cx('item')}>
                        <div className={cx('pdmain-content')}>
                            <div className={cx('image')}>
                                <img
                                    className={cx('img-main')}
                                    src="https://media3.scdn.vn/img4/2020/04_18/FY2uSlXBNHrCQoRmYbDc_simg_b5529c_250x250_maxb.jpg"
                                ></img>
                            </div>
                            <div className={cx('infor')}>
                                <div className={cx('name')}>
                                    <img className={cx('img-shop')} src={ig.shoptag}></img>
                                    <span>Đồng hồ </span>
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
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProductItem;
