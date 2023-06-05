import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { LogoSendo } from '../../../IconSvg/IconSvg';
import Search from '../../../Search/Search';
import Buttons from '../../../Buttons/Buttons';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useContext, useState } from 'react';
import PopupLogin from '../PopupLogin/PopupLogin';
import { Context } from '../../../store/Context';
import { important } from '../../../../Assets/images/image/image';
import Tippy from '@tippyjs/react/headless';
const cx = classNames.bind(styles);
function Header() {
    const { dis, setdis, user, menufix, usergg, setusergg, setuserfb, setuser } = useContext(Context);
    const OptionUser = [
        {
            label: 'Thông tin tài khoản',
        },
        {
            label: 'Ưu đãi của tôi',
        },
        {
            label: 'Sản phẩm yêu thích',
        },
        {
            label: 'Shop yêu thích',
        },
        {
            label: 'Theo dõi đơn hàng',
        },
        {
            label: 'Đơn hàng dịch vụ tiện ích',
        },
    ];
    function handleUser() {
        try {
            usergg ? setusergg(false) : setuserfb(false);
            setuser({});
        } catch (error) {
            alert('Không ổn rồi fen ơi :))');
        }
    }
    function renderOptionUser() {
        return (
            <div className={cx('options')}>
                {OptionUser.map((item, index) => {
                    return (
                        <a key={index} className={cx('item')} href="#">
                            {item.label}
                        </a>
                    );
                })}
                <span
                    className={cx('item', 'exit')}
                    onClick={() => {
                        handleUser();
                    }}
                >
                    Thoát
                </span>
            </div>
        );
    }
    return (
        <div className={cx('wrapper')}>
            <section>
                <div className={cx('slide-bar')}>
                    <Popup
                        trigger={
                            <div className={cx('item-sildebar')}>
                                <span>Tải ứng dụng</span>
                            </div>
                        }
                        position="bottom center"
                    >
                        <div className={cx('item-sidebar', 'img-scan')}>
                            <div>
                                <img src="https://media3.scdn.vn/img2/2018/5_23/R842FO.png" alt=""></img>
                            </div>
                            <p>Quét để tải ứng dụng</p>
                        </div>
                    </Popup>
                    <Popup
                        trigger={
                            <div className={cx('item-sildebar')}>
                                <span>Chăm sóc khách hàng</span>
                            </div>
                        }
                        position="bottom center"
                    >
                        <ul className={cx('suport')}>
                            <li>Trung tâm hỗ trợ</li>
                            <li>Trả hàng hoàn tiền</li>
                        </ul>
                    </Popup>
                    <Popup
                        className={cx('popup-check')}
                        style={{ width: '236px' }}
                        trigger={
                            <div className={cx('item-sildebar')}>
                                <span>Kiểm tra đơn hàng</span>
                            </div>
                        }
                        position="bottom center"
                    >
                        <form action="post" className={cx('check')}>
                            <input
                                type="text"
                                placeholder="Nhập mã đơn hàng"
                                name="madh"
                                className={cx('madh')}
                            ></input>
                            <input
                                type="text"
                                placeholder="Email / Số điện thoại"
                                name="infor"
                                className={cx('infor')}
                            ></input>
                            <button className={cx('btn-check')}>Kiểm tra</button>
                        </form>
                    </Popup>
                </div>
            </section>
            <nav className={cx('nav', menufix ? 'fixed' : '')}>
                <header>
                    <Link to="/" className={cx('logo')}>
                        <LogoSendo width="5.6rem" height="3rem"></LogoSendo>
                    </Link>
                    <Search></Search>
                    <div className={cx('action-user')}>
                        <div className={cx('cart-icon')}>
                            <FontAwesomeIcon
                                className={cx('cart')}
                                icon={faCartShopping}
                                style={{ width: '24px', height: '24px', color: '#fff' }}
                            ></FontAwesomeIcon>
                        </div>
                        {Object.keys(user).length == 0 ? (
                            <Buttons
                                normal
                                className={cx('btn-login')}
                                onClick={() => {
                                    setdis(!dis);
                                }}
                            >
                                Đăng nhập
                            </Buttons>
                        ) : (
                            <Tippy
                                interactive
                                offset={[-40, 3]}
                                delay={[100, 0]}
                                placement="bottom"
                                render={renderOptionUser}
                            >
                                <div className={cx('inf-user')}>
                                    <div className={cx('image-user')}>
                                        <img src={important.userfb} />
                                    </div>
                                    <span>{user.name}</span>
                                </div>
                            </Tippy>
                        )}
                    </div>
                </header>
                <menu>
                    <NavLink to="/" className={(nav) => cx('menu-item', { active: nav.isActive })}>
                        {' '}
                        Cho bạn{' '}
                    </NavLink>
                    <NavLink to="/lamdep" className={(nav) => cx('menu-item', { active: nav.isActive })}>
                        {' '}
                        Chăm sóc và bảo dưỡng oto{' '}
                    </NavLink>
                    <NavLink to="/maymoc" className={(nav) => cx('menu-item', { active: nav.isActive })}>
                        Máy cơ khí chế tạo
                    </NavLink>
                    <NavLink to="/tuixach" className={(nav) => cx('menu-item', { active: nav.isActive })}>
                        {' '}
                        Túi xách nam{' '}
                    </NavLink>
                    <NavLink to="/phukien" className={(nav) => cx('menu-item', { active: nav.isActive })}>
                        {' '}
                        Phụ kiện bên trong oto{' '}
                    </NavLink>
                    <NavLink to="/dodung" className={(nav) => cx('menu-item', { active: nav.isActive })}>
                        {' '}
                        Đồ dùng phòng ăn uống{' '}
                    </NavLink>
                </menu>
            </nav>
            {dis ? <PopupLogin style={{ position: 'fixed', top: '0' }} /> : <div></div>}
        </div>
    );
}
export default Header;
