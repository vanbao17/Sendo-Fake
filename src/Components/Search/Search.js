import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { ListCate } from '../IconSvg/IconSvg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import ListCates from '../ListCates/ListCates';
import { useContext } from 'react';
import { Context } from '../store/Context';
const cx = classNames.bind(styles);
function Search() {
    const { showGototop } = useContext(Context);
    return (
        <div className={cx('wrapper')}>
            <Tippy interactive offset={[50, 15]} delay={[100, 0]} placement="bottom" render={() => <ListCates />}>
                <div className={cx('listcate')}>
                    <ListCate width="24px" height="24px "></ListCate>
                </div>
            </Tippy>
            <input type="text" placeholder="Tìm trên Sendo ..."></input>
            <button className={cx('search-icon')}>
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{ width: '24px', height: '24px' }} />
            </button>
        </div>
    );
}

export default Search;
