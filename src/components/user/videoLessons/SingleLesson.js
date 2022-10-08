import React from 'react'
import { motion } from 'framer-motion'
import {BsShare, BsFillHeartFill} from 'react-icons/bs'
import '../../../assest/css/user/videoLessons/singleLesson.css'

export default function VideoLessonSingleView({lesson}) {
  return (
    <div>
        <motion.div className="single-lesson" 
            initial={{opacity:0, y:"-10px"}} animate={{opacity:1, y:"0px",transition:{duration:0.4}}}>
            <img src={lesson.img} alt='load..' className="single-lesson-image"/>
            <div className="p-3">
                <div className="single-lesson-wrapper">
                    <div className="">
                        <h2 className="single-lesson-title">{lesson.title}</h2>
                        <span className="single-lesson-teacher">
                            الأستاذ <span>{lesson.teacher}</span>
                        </span>
                    </div>
                    <div className="">
                        <span className={`exersice ${lesson.isTrain?"train":"lesson"}`}>
                            {lesson.isTrain?"تمرين":"درس"}</span>
                    </div>
                </div>
                <div className='lesson-time text-[#000000] font-[500] text-[22px] md:text-[26px]' style={{display: 'flex', justifyContent: 'space-between'}}>
                    المدة: {lesson.time} د
                <label className='favorite-label' style={{marginLeft: '20px'}}>
                    <input type='checkbox' name='favorite' style={{display: 'none'}}/>
                    <BsFillHeartFill className='heart'/>
                </label>
                </div>
            </div>
        </motion.div>
    </div>
  )
}
