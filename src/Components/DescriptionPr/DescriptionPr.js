import classNames from 'classnames/bind';
import styles from './DescriptionPr.module.scss';
import { useState } from 'react';
const cx = classNames.bind(styles);
function DescriptionPr() {
    const [seemore, setseemore] = useState(false);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('dscrip')}>
                <p className={cx('title')}>Mô tả sản phẩm</p>
                <span>
                    Thời tiết bắt đầu lạnh cũng là thời điểm mà các nhãn hàng thời trang tất bật với công việc thiết kế
                    những dòng sản phẩm mới phù hợp với không khí lạnh năm nay. Còn bạn đã chuẩn bị những gì? Hãy cùng
                    chúng tôi ngắm nhìn những sản phẩm hot nhất mùa này...
                </span>
            </div>
            <div className={cx('basic-infor')}>
                <p className={cx('title')}>Thông tin cơ bản</p>
                <div className={cx('list-infor')}>
                    <div className={cx('item')}>
                        <span className={cx('title-attribute')}>Chất vải</span>
                        <span className={cx('attribute')}>Vải dù</span>
                    </div>
                </div>
            </div>
            <div className={cx('detail-product')}>
                <p className={cx('title')}>Chi tiết sản phẩm</p>
                <span>
                    kéo cắt thịt cán vàng siêu sắcKéo cắt thịt , thịt gà, thịt vịt siêu sắcKéo vàng rồng phụng siêu bền
                    siêu bén thiết kế nổi bật với phần tay cầm mạ đồng sang trọng, khắc hình rồng và phụng tinh xảo, độc
                    đáo.Được làm từ chất liệu thép không gỉ có độ bền...
                </span>
            </div>
            <button
                className={cx('see-more')}
                onClick={() => {
                    setseemore(!seemore);
                }}
            >
                {seemore ? <span>Xem thêm</span> : <span>Thu gọn</span>}
            </button>
        </div>
    );
}

export default DescriptionPr;
