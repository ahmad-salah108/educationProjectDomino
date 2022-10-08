import {useState, useEffect} from 'react'
import { useParams , Link} from 'react-router-dom'
import Course from '../../../components/user/courses/Course';
import coursesData from '../../../data/coursesData';
import '../../../assest/css/user/courses/coursesCategoryPage.css'
import EmptyCategory from '../../../components/user/util/EmptyCategory';
import CoursesCategoryBar from '../../../components/user/courses/CoursesCategoryBar';
import {BsCoin,BsShare, BsFillHeartFill} from 'react-icons/bs'
import {motion} from 'framer-motion'

export default function CoursesCategoryPage() {
    const {courseType} = useParams();
    const [data,setData] = useState([]);
    const [isNotFound,setIsNotFound]=useState(false);

    useEffect(()=>{
        window.scrollTo({
            behavior:"smooth",
            top:0
        })
        setData([]);
        setTimeout(()=>{
            setData(coursesData.filter(g=>g.type.toLowerCase()===courseType));
            if(coursesData.filter(g=>g.type.toLowerCase()===courseType).length===0){
                setIsNotFound(true);
            }
            else{
                setIsNotFound(false);
            }
        },100)
    },[courseType]);
    return (
    <div className="courses-category container">
    <div className="courses-wrapper">
        <div className="category-wrap">
            <CoursesCategoryBar/>
        </div>

        <div className="courses-content">
            <h3 className="title">الدورات </h3>
            <div>
                {
                    data.length>0?data.map((box,index)=>
                    {
                        return<div key={index+'m1'} className="box">
                            <h3 className="box-title">{box.title}</h3>
                            <div className="boxes-wrapper">
                                {
                                    box.groups.map((course,index)=>
                                    {
                                        return (
                                            <div className='the-course-card'>
                                                <Link to={`/courses/${box.type}/${course.id}`} key={index+'z1'} > 
                                                    <Course course={course}/>
                                                </Link>
                                                <motion.div className='icons' initial={{opacity:0, y:"-10px"}} animate={{opacity:1, y:"0px",transition:{duration:0.4}}}>
                                                    <label>
                                                        <input type='checkbox' name='favorite' style={{display: 'none'}}/>
                                                        <BsFillHeartFill className='heart'/>
                                                    </label>
                                                    <button><BsShare className='icon-share'/></button>
                                                </motion.div>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    }):isNotFound&&<EmptyCategory type='/courses'/>
                }
            </div>
        </div>
    </div>
</div>
)
}
