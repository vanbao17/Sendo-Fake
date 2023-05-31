import classNames from 'classnames/bind'
import styles from "./Catetorys.module.scss"
import CatetorysItem from '../CatetoryItem/CatetorysItem';
const cx = classNames.bind(styles)
function Catetorys({data}) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                {
                    data.map((item,index) => {
                        return <CatetorysItem mini key={index} item={item} />
                    })
                }
            </div>
        </div>
    );
}

export default Catetorys;