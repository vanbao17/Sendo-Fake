import classNames from 'classnames/bind'
import styles from './ViewProducts.module.scss'
const cx = classNames.bind(styles)

function ViewProducts({ data }) {
  return (
    <div className={cx('wrapper')}>
      <h2>{data}</h2>
    </div>
  )
}

export default ViewProducts
