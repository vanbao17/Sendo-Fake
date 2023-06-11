import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronDown,
    faChevronRight,
    faChevronUp,
    faCircleInfo,
    faHeart,
    faMessage,
    faMinus,
    faPlus,
    faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import { useState, useRef } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import TippyHeadless from '@tippyjs/react/headless';
import TippyUpdate from './UpdateCart/TippyUpdate';
const cx = classNames.bind(styles);

function CartItem() {
    const [showTippy, setshowTippy] = useState(false);
    let [count, setcount] = useState(1);
    function renderSizeColor() {
        return <TippyUpdate />;
    }
    return (
        <div className={cx('item')}>
            <div className={cx('infor-shop')}>
                <div className={cx('image-shop')}>
                    <div className={cx('img')}>
                        <img src="https://media3.scdn.vn/images/ecom/shop_blank-logo-2.jpg" alt=""></img>
                    </div>
                    <span>Âu Cơ 369</span>
                </div>
                <div className={cx('chat-shop')}>
                    <FontAwesomeIcon icon={faMessage} />
                    <span> Chat với shop</span>
                </div>
            </div>
            <div className={cx('infor-product')}>
                <div className={cx('left')}>
                    <input type={'checkbox'} />
                    <div className={cx('img-name')}>
                        <img
                            src="https://media3.scdn.vn/img4/2023/04_04/u84a89WHW0iMtXgBWfMr_simg_de2fe0_500x500_maxb.png"
                            alt=""
                        ></img>

                        <div className={cx('name')}>
                            <span className={cx('tag')}>Mua trước trả sau</span>
                            <span>[Gia dụng] bộ vệ sinh máy tính</span>
                            <TippyHeadless
                                interactive
                                appendTo={() => document.body}
                                visible={showTippy}
                                offset={[0, 10]}
                                delay={[0, 200]}
                                placement="bottom-end"
                                render={renderSizeColor}
                            >
                                <div
                                    className={cx('update-product', showTippy && 'active')}
                                    onClick={() => {
                                        setshowTippy(!showTippy);
                                    }}
                                >
                                    <span className={cx('sizeColor')}>Đen | XL</span>
                                    <FontAwesomeIcon icon={showTippy ? faChevronDown : faChevronUp} />
                                </div>
                            </TippyHeadless>
                        </div>
                    </div>
                </div>
                <div className={cx('right')}>
                    <div className={cx('price')}>
                        <strong>30.000đ</strong>
                        <span>10.000đ</span>
                    </div>
                    <div className={cx('count')}>
                        <FontAwesomeIcon
                            icon={faMinus}
                            className={cx('icon')}
                            onClick={() => {
                                if (count > 1) {
                                    setcount(count - 1);
                                }
                            }}
                        />
                        <input
                            value={count}
                            onChange={(e) => {
                                setcount(e.target.value);
                            }}
                            type="text"
                            name="count-input"
                        />
                        <FontAwesomeIcon
                            icon={faPlus}
                            className={cx('icon')}
                            onClick={() => {
                                setcount(count + 1);
                            }}
                        />
                    </div>
                    <div className={cx('action-cart')}>
                        <Tippy content="Thích">
                            <FontAwesomeIcon icon={faHeart} className={cx('icon')} />
                        </Tippy>
                        <Tippy content="Xóa">
                            <FontAwesomeIcon icon={faTrashCan} className={cx('icon')} />
                        </Tippy>
                    </div>
                </div>
            </div>
            <div className={cx('vocherShop')}>
                <span>Mã giảm giá của Shop (4)</span>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
            <hr />
            <div className={cx('freeship')}>
                <span>Miễn phí giao hàng tới 5.000đ</span>
                <FontAwesomeIcon icon={faCircleInfo} className={cx('icon')} />
            </div>
        </div>
    );
}

export default CartItem;
