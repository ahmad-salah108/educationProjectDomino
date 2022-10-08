import {useState, useEffect} from 'react'
import { useParams , Link} from 'react-router-dom'
import EmptyGroup from '../../../components/user/util/EmptyCategory';
import videoLessonsData from '../../../data/videoLessonsData';
import LessonsBar from '../../../components/user/videoLessons/LessonBar';
import LessonBox from '../../../components/user/videoLessons/LessonBox';
import '../../../assest/css/user/videoLessons/videoLessonsCategoryPage.css'
import {BsFillHeartFill} from 'react-icons/bs'
import {motion} from 'framer-motion'

export default function VideoLessonsCategory() {
    // get gategory from url params
    const{lessonsType}=useParams();
    const [data,setData] = useState([]);
    const[isNotFound,setIsNotFound]=useState(false);

    useEffect(()=>{
        window.scrollTo({
            behavior:"smooth",
            top:0
        })
        setData([]);
        setTimeout(()=>{
            setData(videoLessonsData.filter(g=>g.type.toLowerCase()===lessonsType));
            if(videoLessonsData.filter(g=>g.type.toLowerCase()===lessonsType).length===0){
                setIsNotFound(true);
            }
            else{
                setIsNotFound(false);
            }
        },100)
    },[lessonsType]);


  return (
    <div className="video-lessons-category container">
    <div className="video-lessons-wrapper">
        <div className="">
            <LessonsBar/>
        </div>
        <div className="video-lessons-content">
            <h3 className="title">الدروس المرئيية</h3>
            <div>
                {
                    data.length>0?data.map((box,index)=>
                    {
                        return<div key={index+'m1'} className="box">
                            <h3 className="box-title">{box.title}</h3>
                            <div className="boxes-wrapper">
                                {
                                    box.groups.map((group,index)=>
                                    {
                                        return (
                                            <div className="the-course-card">
                                                <Link to={`/videoLessons/${box.type}/${group.id}`} key={index+'z1'} > 
                                                    <LessonBox lesson={group} type={box.type}/>
                                                </Link>
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
                    }):isNotFound&&<EmptyGroup type={'/videoLessons'} title={' الدروس المرئية'}/>
                }
            </div>
        </div>
    </div>
</div>
  )
}
