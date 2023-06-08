import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { ListCate } from '../IconSvg/IconSvg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import ListCates from '../ListCates/ListCates';
const cx = classNames.bind(styles);
function Search() {
    function renderListCate() {
        return <ListCates />;
    }
    return (
        <div className={cx('wrapper')}>
            <Tippy
                interactive
                appendTo={() => document.body}
                // visible
                offset={[50, 15]}
                delay={[100, 0]}
                placement="bottom"
                render={renderListCate}
            >
                <a className={cx('listcate')}>
                    <ListCate width="24px" height="24px "></ListCate>
                </a>
            </Tippy>
            <input type="text" placeholder="Tìm trên Sendo ..."></input>
            <button className={cx('search-icon')}>
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{ width: '24px', height: '24px' }} />
            </button>
        </div>
    );
}

export default Search;
