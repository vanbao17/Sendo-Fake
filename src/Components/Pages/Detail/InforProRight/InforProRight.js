import DescriptionPr from '../../../DescriptionPr/DescriptionPr';
import Rate from '../../../Rate/Rate';
import classNames from 'classnames/bind';
import styles from './InforProRight.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function InforProRight() {
    return (
        <div className={cx('wrapper')}>
            <DescriptionPr />
            <Rate />
            <div className={cx('questionProduct')}>
                <p className={cx('title')}>Hỏi về sản phẩm</p>
                <p>Bạn có thắc mắc cần giải đáp?</p>
                <button>
                    <FontAwesomeIcon icon={faMessage} className={cx('icon')} />
                    <span>Hỏi shop ngay</span>
                </button>
            </div>
        </div>
    );
}

export default InforProRight;
