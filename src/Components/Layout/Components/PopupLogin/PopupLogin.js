import classNames from 'classnames/bind'
import styles from './PopupLogin.module.scss'
import {  useContext, useEffect,useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faVrCardboard } from '@fortawesome/free-solid-svg-icons'
import { Context } from '../../../store/Context'
import { GoogleLogin, GoogleOAuthProvider} from '@react-oauth/google';
import { gapi } from 'gapi-script'
const cx = classNames.bind(styles)
const id="927153163763-liqf9jmc15drk1dfep7mrpn78mk9hg4e.apps.googleusercontent.com";
function PopupLogin({className,style }) {
  useEffect(()=>{
    function start() {
      gapi.client.init({clientId:id,scope:""})
    };
    gapi.load('client:auth2',start)
  })
  const classes = cx('wrapper', {[className]: className})
  const {dis,setdis} = useContext(Context)
  const buttonref = useRef()
  function changeInput(e) {
    if(e.length>=1) {
      buttonref.current.disabled =false
      buttonref.current.style.color = "#fff"
      buttonref.current.style.backgroundColor = "#ee2624"
      buttonref.current.style.cursor = "pointer"
      buttonref.current.style.opacity = 1
    }
    if(e.length==0) {
      buttonref.current.disabled = true
      buttonref.current.style.opacity = 0.2
      buttonref.current.style.color = "black"
      buttonref.current.style.backgroundColor = "#aaa"
      buttonref.current.style.cursor = "not-allowed"
    }
  }
  return (
    <div className={classes} style={style}>
      <div className={cx('shadow')} onClick={()=>{setdis(false)}}></div>
      <div className={cx('container')}>
        <div className={cx('form-login')}>
          <div className={cx('close')}>
            <span></span>
            <p onClick={()=>{setdis(false)}}>Thoát</p>
          </div>
          <div className={cx('contents')}>
            <div className={cx('content1')}>
              <h2>Xin Chào</h2>
              <p>Đăng nhập hay đăng kí tài khoản</p>
              <form action="get">
                <input  type="text" placeholder="Nhập số điện thoại" onChange={(e)=>{changeInput(e.target.value)}} ></input>
                <button ref={buttonref} disabled className={cx('btn-next')}>
                  Tiếp tục <FontAwesomeIcon icon={faAngleRight} />
                </button>
              </form>
            </div>
            <div className={cx('content2')}>
              <p>Hoặc thông qua : </p>
              <div className={cx("face-goo")}>
                <GoogleOAuthProvider clientId="927153163763-liqf9jmc15drk1dfep7mrpn78mk9hg4e.apps.googleusercontent.com">
                  <GoogleLogin
                      buttonTetx="Đăng nhập bằng Google"
                      onSuccess={()=>{alert("susscess")}}
                      onFailure={()=>{alert("error")}}
                      cookiePolicy={'single_host_origin'}
                      isSignedIn={true}
                    />
                </GoogleOAuthProvider>

                <FontAwesomeIcon className={cx("icon",'face')} icon={faVrCardboard} />
                <FontAwesomeIcon className={cx("icon",'goo')} icon={faVrCardboard} />
              </div>
              <p>Khi dùng tài khoản Sendo, bạn đã đồng ý về <span style={{color:"#0F62FE"}}>điều khoản dịch vụ.</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopupLogin
