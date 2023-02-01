import React,{useState} from 'react'
import {ReactComponent as EmptyS} from "./Empty.svg"
import { Link } from "react-router-dom";
import { RiArrowRightSLine  , TiArrowRight,BsArrowBarRight} from "react-icons/all";
import { Image } from 'react-bootstrap';


const Empty = () => {
    const [arrow, setarrow] = useState(false)
    return (
        <div className = 'Emptycart'>
            {/* <EmptyS className = 'illustration'/> */}
            <Image src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-2506.jpg?w=996&t=st=1675245519~exp=1675246119~hmac=23877a815aefdef208e694204eda77be33732a95dc720d8bfe1f67d60dae174b"/>
            <div className = 'textempty'>
            <h1>
                Your cart is empty
            </h1>
             
            <Link to = '/shop' className ='goshop' onMouseOver = {()=>{setarrow(true)}} onMouseLeave = {()=>{setarrow(false)}}>
            Go Shop
            {!arrow ? <RiArrowRightSLine className = 'arrow' /> : <BsArrowBarRight className = 'arrow'/> }
            </Link>
            </div>

            

        </div>
    )
}

export default Empty
