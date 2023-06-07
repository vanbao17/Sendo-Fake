import classNames from 'classnames/bind';
import styles from './ListCates.module.scss';
const cx = classNames.bind(styles);

function ContainerCateItems({ index }) {
    return <div className={cx('container')}>{index}</div>;
}

export default ContainerCateItems;
