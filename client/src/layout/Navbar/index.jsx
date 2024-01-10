import React from 'react'
import './index.scss'
import { SlBasket } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
    return (
        <div>
            <div className='container'>
                <div className='navbarbox'>
                    <div className='navbarleft'>
                        <img className='img' src="https://preview.colorlib.com/theme/aroma/img/logo.png.webp" alt="" />
                    </div>
                    <ul className='ulhome'>
                        <li className='homestyle'>Home</li>
                        <li>Shop</li>
                        <li>Blog</li>
                        <li>Pages</li>
                        <li>Contact</li>
                    </ul>
                    <div className='navbarright'>
                        <span><CiSearch /></span>
                        <span><SlBasket /></span>
                        <button className='buy'>Buy Now</button>

                    </div>
                </div>





            </div>





        </div>
    )
}

export default Navbar