import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';
const cx = classNames.bind(styles);
function Navigates() {
    return (
        <menu>
            <NavLink to="/" className={(nav) => cx('menu-item', { active: nav.isActive })}>
                Cho bạn
            </NavLink>
            <NavLink to="/lamdep" className={(nav) => cx('menu-item', { active: nav.isActive })}>
                Chăm sóc và bảo dưỡng oto
            </NavLink>
            <NavLink to="/maymoc" className={(nav) => cx('menu-item', { active: nav.isActive })}>
                Máy cơ khí chế tạo
            </NavLink>
            <NavLink to="/tuixach" className={(nav) => cx('menu-item', { active: nav.isActive })}>
                Túi xách nam
            </NavLink>
            <NavLink to="/phukien" className={(nav) => cx('menu-item', { active: nav.isActive })}>
                Phụ kiện bên trong oto
            </NavLink>
            <NavLink to="/dodung" className={(nav) => cx('menu-item', { active: nav.isActive })}>
                Đồ dùng phòng ăn uống
            </NavLink>
        </menu>
    );
}

export default Navigates;
