import classNames from 'classnames/bind'
import styles from './DefaultLayout.module.scss'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import ProviderHeaderContext from '../../../store/ProviderHeader'
const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <ProviderHeaderContext>
        <Header></Header>
      </ProviderHeaderContext>
      <div className={cx('content')}>{children}</div>
      <Footer></Footer>
    </div>
  )
}

export default DefaultLayout
