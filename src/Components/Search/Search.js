import classNames from 'classnames/bind'
import styles from './Search.module.scss'
import { ListCate } from '../IconSvg/IconSvg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
const cx = classNames.bind(styles)
function Search() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('listcate')}>
        <ListCate width="2.4rem" height="2.4rem"></ListCate>
      </div>
      <input type="text" placeholder="Tìm trên Sendo ..."></input>
      <button className={cx('search-icon')}>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{ width: '24px', height: '24px' }}
        />
      </button>
    </div>
  )
}

export default Search
