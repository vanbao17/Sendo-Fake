import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import { important } from '../../../Assets/images/image/image';
import CartItem from './CartItem';

const cx = classNames.bind(styles);
function Cart() {
    const location = useLocation();
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                {/* {location.state?.data.name}
                <div>Hello</div> */}
                {/* <div className={cx('CartEmpty')}>
                    <img src={important.cartEmty} alt=""></img>
                    <h2>Giỏ hàng cảm thấy trống trải</h2>
                    <h3>Ai đó ơi, mua sắm để nhận khuyến mãi từ Sendo ngay!</h3>
                    <Link to="/" className={cx('btn-comehome')}>
                        Mua sắm ngay
                    </Link>
                </div> */}
                <div className={cx('your-cart')}>
                    <div className={cx('title')}>
                        <h3>Giỏ hàng của bạn ()</h3>
                        <span className={cx('update')}>Sửa</span>
                    </div>
                    <div className={cx('container-list')}>
                        <div className={cx('list-carts')}>
                            <CartItem />
                        </div>
                        <div className={cx('total')}>
                            <div className={cx('voucherSendo')}>
                                <span>Mã ưu đãi Sendo (15)</span>
                                <span className={cx('enterCode')}>Chọn/nhập mã</span>
                            </div>
                            <hr></hr>
                            <div className={cx('resultTotal')}>
                                <span>Tạm tính: </span>
                                <h3>0đ</h3>
                            </div>
                            <div className={cx('btn-buynow')}>
                                <button>
                                    <span>Mua Ngay</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
