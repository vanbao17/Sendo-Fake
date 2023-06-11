import classNames from 'classnames/bind';
import styles from './TippyUpdate.module.scss';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
const cx = classNames.bind(styles);

function TippyUpdate({ size = 38, color = 'hehe', data }) {
    const dt = {
        size: [38, 39, 40, 41, 42, 43],
        img: [
            'https://media3.scdn.vn/img4/2021/10_02/hGEdcm2CoPwpLTbEkUXg_simg_02d57e_50x50_maxb.jpg',
            'https://media3.scdn.vn/img4/2021/10_02/hGEdcm2CoPwpLTbEkUXg_simg_02d57e_50x50_maxb.jpg',
            'https://media3.scdn.vn/img4/2021/10_02/hGEdcm2CoPwpLTbEkUXg_simg_02d57e_50x50_maxb.jpg',
            'https://media3.scdn.vn/img4/2021/10_02/hGEdcm2CoPwpLTbEkUXg_simg_02d57e_50x50_maxb.jpg',
        ],
    };
    const [dtupdate, setdtupdate] = useState({ size: size, color: color });
    return (
        <div className={cx('container-update')}>
            <div className={cx('size')}>
                <span className={cx('title')}>
                    Chọn kích thước:<strong>42</strong>
                </span>
                <div className={cx('list-sizes')}>
                    {dt.size.map((item, index) => {
                        return (
                            <NavLink
                                key={index}
                                className={(nav) => cx('item', { active: nav.isActive })}
                                onClick={() => {
                                    setdtupdate({ size: item, color: dtupdate.color });
                                }}
                            >
                                {item}
                            </NavLink>
                        );
                    })}
                </div>
            </div>
            <div className={cx('color')}>
                <span className={cx('title')}>
                    Chọn màu sắc:<strong>A01 Đen</strong>
                </span>
                <div className={cx('list-colors')}>
                    {dt.img.map((item, index) => {
                        return (
                            <NavLink
                                key={index}
                                className={(nav) => cx('item-img', { active: nav.isActive })}
                                onClick={() => {
                                    setdtupdate({ size: dtupdate.size, color: item });
                                }}
                            >
                                <img src={item} alt="img"></img>
                            </NavLink>
                        );
                    })}
                </div>
            </div>
            <span className={cx('price')}>
                Đơn giá :<strong>23.000đ</strong>
            </span>
            <button
                className={cx('btn-update')}
                onClick={() => {
                    console.log(dtupdate);
                }}
            >
                <span>Cập nhật</span>
            </button>
        </div>
    );
}

export default TippyUpdate;
