import classNames from 'classnames/bind';
import styles from './ProgressItem.module.scss';
const cx = classNames.bind(styles);

function ProgressItem({ sum, data, className }) {
    const classes = cx('star', {
        [className]: className,
    });
    return (
        <div className={cx('item')}>
            <div className={classes}></div>
            <span className={cx('progress')} style={{ width: '100%', height: '10px', backgroundColor: 'red' }}></span>
            <span className={cx('count')}>{data}</span>
        </div>
    );
}

export default ProgressItem;
