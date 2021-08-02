import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './background.css'
import { pictures } from './data'


export default function Background() {
    const [index, setIndex] = useState(1)
    const [data, setdata] = useState(pictures);

    
      useEffect(() => {
        let slider = setInterval(() => {
          setIndex((oldIndex) => {
            let index = oldIndex + 1
            if (index > data.length - 1) {
              index = 0
            }
            return index
          })
        }, 5000)
        return () => {
          clearInterval(slider)
        }
      }, [index])
    return (
        <div className='bgContainer' style={{ backgroundImage:`url(${data[index].img})`}} >
            <div className='bgDot'>
          
                <div className='bgDotIcon active'></div>
                <div className='bgDotIcon'></div>
                <div className='bgDotIcon'></div>
            </div>
            <div className='box'>
                <div className='boxText'>
                    <h1>School name international</h1>
                </div>
            </div>
            <button className='bgBtn'>
                <Link to='/dashboard'>
                    Read More
                </Link> 
            </button>
        </div>
    )
}
