import classNames from 'classnames/bind';
import styles from './Rate.module.scss';
import ProductItem from '../ProductItem/ProductItem';
import ProgressItem from './ProgressItem/ProgressItem';
const cx = classNames.bind(styles);

function Rate({ data }) {
    const total = 15;
    const dt = [
        { rate: 5, count: 12 },
        { rate: 4, count: 3 },
        { rate: 3, count: 0 },
        { rate: 2, count: 0 },
        { rate: 1, count: 0 },
    ];
    return (
        <div className={cx('wrapper')}>
            <div className={cx('nonTempRate')}>
                <span className={cx('title')}>
                    Đánh giá nhận xét về sản phẩm <i>( 1 lượt đánh giá )</i>
                </span>
                <div className={cx('ovrRate')}>
                    <div className={cx('total')}>
                        <span>
                            <span className={cx('avg')}>5.0</span>/5
                        </span>
                        <div className={cx('stars')}></div>
                        <div className={cx('notification')}>
                            Đây là thông tin người mua đánh giá shop bán sản phẩm này có đúng mô tả không.
                        </div>
                    </div>
                    <div className={cx('dis-rate')}>
                        {dt.map((item, index) => {
                            return <ProgressItem sum={total} data={item.count} className={'star' + item.rate} />;
                        })}
                    </div>
                </div>
                <div className={cx('button-rate')}>
                    <button className={cx('btn')}>
                        <span>Tất cả</span>
                    </button>
                    <button className={cx('btn')}>
                        <span>5 Sao</span>
                    </button>
                    <button className={cx('btn')}>
                        <span>4 Sao</span>
                    </button>
                    <button className={cx('btn')}>
                        <span>3 Sao</span>
                    </button>
                    <button className={cx('btn')}>
                        <span>2 Sao</span>
                    </button>
                    <button className={cx('btn')}>
                        <span>1 Sao</span>
                    </button>
                    <button className={cx('btn')}>
                        <span>Đánh giá có hình</span>
                    </button>
                </div>
            </div>
            <div className={cx('tempRate')}>
                <img src="https://web-static.scdn.vn/sendo-communication-rating/863edd0-web/media/rating-empty.f56ae9e22805ed6a864d1a540bea0947.svg"></img>
                <strong>Sản phẩm chưa có đánh giá.</strong>
                <p>Chọn mua sản phẩm để là người đầu tiên đánh giá sản phẩm này.</p>
            </div>
        </div>
    );
}

export default Rate;
