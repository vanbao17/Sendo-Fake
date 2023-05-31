import classNames from 'classnames/bind'
import styles from "./Slide.module.scss"
import ProductItem from '../../../ProductItem/ProductItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
const cx = classNames.bind(styles)

function Slide({data,ovr}) {
    const [lengths,setlenghts] = useState(0)
    const refSlide = useRef()
    function handleSlide() {
        refSlide.current.style.transform=`translateX(-${144*lengths+(lengths-1)*15}px)`
        if(lengths==0) {
            refSlide.current.style.transform=`translateX(0px)`
        }
    }
    useEffect(()=>{
        handleSlide()
    },[lengths])
    return ( 
    <div className={cx('wrapper')}>
        <div className={cx('overflowslide')}>
            <div className={cx('slides')} ref={refSlide}>
                {
                    data.map((item,index)=>{
                        return <ProductItem key={index} pdnormal={item}/>
                    })
                }
            </div>
            {lengths<=(data.length-ovr)&&<button className={cx('icon',"right")} onClick={()=>{
                if(lengths<(data.length-ovr)) {
                    setlenghts(lengths+ovr)
                    if(lengths==data.length) {
                        setlenghts(data.length)
                    }
                }
                handleSlide()
            }}><FontAwesomeIcon  icon={faChevronRight}/></button>}
            {lengths>=ovr&&<button className={cx('icon','left')} onClick={()=>{
                if((data.length-lengths)<data.length) {
                    setlenghts(lengths-ovr)   
                }
                handleSlide()
            }}><FontAwesomeIcon  icon={faChevronLeft}/></button>}
        </div>
    </div> 
    );
}

export default Slide;