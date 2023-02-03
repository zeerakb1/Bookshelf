import {React}  from 'react'
import { Link } from 'react-router-dom';
import ShopNowBtn from './ShopNowBtn'
const Slider = () => { 
    return (
        <div className = 'slider'>
          <div className= 'slide current'>
          <h1 className = 'titleslider'>Books For All</h1>
          <h3 className = 'subtitleslider'>To succeed you must read.</h3>
          <div className = 'content'> <Link to= '/Shop'> <ShopNowBtn /></Link>  </div>
          </div>
        </div>
    )
}
 
export default Slider