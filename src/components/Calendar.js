import React, { useState } from 'react'
import './Calendar.css'
import './Month.css'
import img1 from '../images/ellipse.png'
import img2 from '../images/Polygon.png'
import img3 from '../images/Rectangle.png'
import Month from './Month'
function Calendar() {
    const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    const monthDays = [0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0,];
    const [active, setActive] = useState(-1);
    const handelclick = (item) => {
        console.log(item);
        setActive(item);
    }
    const sideButtons1=[9,10,11];
    const sideButtons2=[12,1,2,3,4,5];
    const[month, setMonth] = useState(2021 * 12);
    const montharray = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const increaseMonth = () => {
        setMonth(month + 1);
    }
    const decreaseMonth = () => {
        setMonth((month - 1));
    }
    const increaseActive = () =>{
        if(active===30)
        {
            setActive(1);
            setMonth(month+1);
        }
        else{
        setActive(active+1);
        }
    }
    return (
        <>
            <div className='calendar-container'>
                <div className="calendar-wrapper">
                    <div className='month-wrapper'>
                        <button className='month-btn' onClick={decreaseMonth}>&lt;</button>
                        <div className="month-container">
                            <div><h1 className="month-text">{montharray[(month % 12)]}</h1></div>
                            <div><h1 className="month-text">{(month - (month) % 12) / 12}</h1></div>
                        </div>
                        <button className='month-btn' onClick={increaseMonth}>&gt;</button>
                    </div>
                    <div>
                        {weekDays.map((item, index) => {
                            return (
                                <button className="week-btn">{item}</button>
                            )
                        })}
                    </div>
                    <div className="monthday">
                        {monthDays.map((item, index) => {
                            return (
                                <button className={(item === active && item !== 0) ? 'monthday-btn-clicked' : item ? 'monthday-btn' : 'monthday-btn-vanish'} onClick={() => {
                                    handelclick(item);
                                }}><div className='monthday-wrapper'>{item} { <div className='monthday-image'>
                                    <img src={img1}></img>
                                    <img src={img3}></img>
                                </div>}</div> </button>
                            )
                        })}
                    </div>
                </div>
                <div className='side-column'>
                    <div className='side-bar'>
                        <div className='side-heading'>
                          <div ><h1 className="side-text">{(monthDays[active+1] > 0) ? monthDays[active+1] : ''}</h1></div>  
                            <div ><h1 className="side-text">{montharray[(month)%12]}</h1></div>
                            <div ><h1 className="side-text">{(month - (month) % 12) / 12}</h1></div>
                        </div>
                        <div className='side-image'>
                            <div className='shape'><img src={img1} className='image'/><p>Morning</p> </div>
                            <div className='shape'><img src={img3} className='image'/><p>Afternoon</p> </div>
                            <div className='shape'><img src={img2} className='image'/> <p>Evening</p></div>
                        </div>
                    </div>
                    <div className='side-buttons'>
                        <div className='side-btn-container'>
                            {sideButtons1.map((item,index)=>{
                                return(
                                    <button className='side-btn'>{item}:00 AM</button>
                                )
                            })}
                        </div>
                        <div className='side-btn-container'>
                        {sideButtons2.map((item,index)=>{
                                return(
                                    <button className='side-btn'>{item}:00 PM</button>
                                )
                            })}
                        </div>
                    </div>
                    <div className='end-btn'>
                    <button className='btn-nxt' onClick={increaseActive}>Next</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calendar
