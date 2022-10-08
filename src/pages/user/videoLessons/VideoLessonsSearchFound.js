import {useEffect} from 'react'
import LessonsBar from '../../../components/user/videoLessons/LessonBar';
import LessonBox from '../../../components/user/videoLessons/LessonBox';
import '../../../assest/css/user/videoLessons/lessonsSearchFound.css'
import img1 from '../../../images/group1.webp'
import {BsFillHeartFill} from 'react-icons/bs'
import {motion} from 'framer-motion'


export default function VideoLessonsSearchFound() {

    const data=[
        {
            id:"1",
            img:img1,
            title:"درس العلوم الاحصاء الحيوي التطبيقي ",
            isTrain:true,
            teacher:"أنور نور",
            time:"30"
        },,
        {
            id:"1",
            img:img1,
            title:"درس العلوم الاحصاء الحيوي التطبيقي ",
            isTrain:false,
            teacher:"أنور نور",
            time:"30"
        },
        {
            id:"1",
            img:img1,
            title:"درس العلوم الاحصاء الحيوي التطبيقي ",
            isTrain:false,
            teacher:"أنور نور",
            time:"30"
        },
        {
            id:"1",
            img:img1,
            title:"درس العلوم الاحصاء الحيوي التطبيقي ",
            isTrain:true,
            teacher:"أنور نور",
            time:"30"
        },
    ]

    useEffect(()=>{
        window.scrollTo({
            behavior:"smooth",
            top:0
        })
    },[]);


  return (
<div className="lessons-search-found container">
    <div className="video-lessons-wrapper">
        <div className="lessons-wrap">
            <LessonsBar/>
        </div>
        <div className="video-lessons-content">
            <h3 className="title">الدروس المرئيية</h3>
            <h4 className='search-title'>نتائج البحث</h4>
            <div className="boxes-wrapper">
                {
                    data.map((lesson,index)=>
                    {
                        return (
                            <div className="the-course-card">
                                <LessonBox lesson={lesson}  key={index+'z1'}/>
                                <motion.div className='icons' initial={{opacity:0, y:"-10px"}} animate={{opacity:1, y:"0px",transition:{duration:0.4}}}>
                                    <label>
                                        <input type='checkbox' name='favorite' style={{display: 'none'}}/>
                                        <BsFillHeartFill className='heart'/>
                                    </label>
                                </motion.div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    </div>
</div>
)
}
