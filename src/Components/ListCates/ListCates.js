import classNames from 'classnames/bind';
import styles from './ListCates.module.scss';
import { faPersonBooth, faPersonDress, faShirt, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import ContainerCateItems from './ContainerCateItems';
const cx = classNames.bind(styles);

function ListCates() {
    const list = [
        { icon: faPersonDress, title: 'Thời trang nữ', list: [1] },
        { icon: faShirt, title: 'Thời trang nữ', list: [2] },
        { icon: faPersonBooth, title: 'Thời trang nam', list: [3] },
        { icon: faPersonDress, title: 'Sức khỏe', list: [4] },
        { icon: faPersonDress, title: 'Làm đẹp', list: [5] },
        { icon: faPersonDress, title: 'Giày dép', list: [6] },
        { icon: faPersonDress, title: 'Túi xách', list: [7] },
        { icon: faPersonDress, title: 'Đồng hồ', list: [8] },
        { icon: faPersonDress, title: 'Trang sức', list: [9] },
        { icon: faPersonDress, title: 'Điện thoại', list: [10] },
        { icon: faPersonDress, title: 'Laptop', list: [11] },
        { icon: faPersonDress, title: 'Phụ kiện công nghệ', list: [12] },
        { icon: faPersonDress, title: 'Điện gia dụng', list: [13] },
        { icon: faPersonDress, title: 'Điện máy', list: [14] },
        { icon: faPersonDress, title: 'Nhà cửa', list: [15] },
        { icon: faPersonDress, title: 'Tân trang nhà', list: [16] },
        { icon: faPersonDress, title: 'Tivi', list: [17] },
        { icon: faPersonDress, title: 'Âm thanh', list: [18] },
    ];
    const [index, setindex] = useState();
    return (
        <div
            className={cx('wrapper')}
            onMouseLeave={() => {
                setindex(-1);
            }}
        >
            <div className={cx('list')}>
                {list.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={cx('item')}
                            onMouseOut={() => {
                                setindex(index);
                            }}
                        >
                            <div>
                                <FontAwesomeIcon className={cx('icon')} icon={item.icon} />
                                <span>{item.title}</span>
                            </div>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </div>
                    );
                })}
            </div>
            {index >= 0 && <ContainerCateItems index={index} />}
        </div>
    );
}

export default ListCates;
