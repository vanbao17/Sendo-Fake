import classNames from 'classnames/bind';
import styles from './ListCates.module.scss';
const cx = classNames.bind(styles);

function CateItem({ ic, text, index }) {
    return <div className={cx('wrapper-item')}></div>;
}

export default CateItem;
