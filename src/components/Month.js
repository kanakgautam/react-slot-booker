import { useState } from "react"
import React from 'react'
import './Month.css'
import img1 from '../images/ellipse.png'
import img2 from '../images/Polygon.png'
import img3 from '../images/Rectangle.png'
import './Calendar.css'

function Month(props) {
    return (
        <>
            <div className='side-image'>
                <div className='shape'><img src={img1} className='image' /></div>
                <div className='shape'><img src={img3} className='image' /></div>
            </div>
        </>
    )
}

export default Month