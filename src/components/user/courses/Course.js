import '../../../assest/css/user/courses/course.css'
import {BsCoin,BsShare, BsFillHeartFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import vector3 from '../../../images/icons/Vector (5).png'
import {motion} from 'framer-motion'
import { useRef } from 'react'
export default function Course({course})
{
    return(
        <motion.div className='course'
        initial={{opacity:0, y:"-10px"}} animate={{opacity:1, y:"0px",transition:{duration:0.4}}}>
            <img src={course.img} alt="load" className='image'/>
            <div className='course-content'>
                <div className='course-header'>
                    <h3 className='course-title'>{course.title}</h3>
                    <div className='course-price'>
                        <BsCoin className='courser-icon'/>
                        <span>{course.price} د.ج</span>
                    </div>
                </div>
                <h3 className='course-teacher'>الأستاذ/ {course.teacher}</h3>
                <div className='course-footer'>
                    <Link to={'#'} className='link'>اشترك</Link>
                </div>
            </div>
        </motion.div>
    )
}