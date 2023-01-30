import React,{useState,useEffect} from 'react'
import Slider from '../components/Slider'
import Cardscg from '../components/Cardscg'
import CgDiv from '../components/CgDiv'
import ProductsC from '../components/ProductsC'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'
import ShopNowBtn from '../components/ShopNowBtn'


const Home = () => {
 
    return (
        <>
        <Helmet>
            <title>EAST CLOTHING</title>
        </Helmet>
             <div>
                <Slider/>
                 <div className="cards">
                         <Cardscg title='Fiction'/>
                         <Cardscg title='Non-Fiction'/>
                         <Cardscg title='All'/>                
                 </div>
                <CgDiv/>
                {/* <div className='div_obj'> <Link to= '/Shop'> <ShopNowBtn /></Link>  </div> */}
                {/* <ProductsC/> */}
        </div>
        </>
    )
}

export default Home
