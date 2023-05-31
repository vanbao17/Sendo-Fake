import classNames from 'classnames/bind'
import styles from "./Catetorys.module.scss"
const cx = classNames.bind(styles)
function Catetorys({data}) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                {
                    data.map((item,index) => {
                        return <div key={index} className={cx('item-cate')}>
                            <a>
                                <div className={cx('img-cate')}><img src={item.img} alt='Catetory'></img></div>
                                <span className={cx('title')}>{item.name}</span>
                            </a>
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default Catetorys;