import '../../../assest/css/user/courses/CourseBox.css'
import {Link} from 'react-router-dom'
import {BsShare, BsFillHeartFill} from 'react-icons/bs'
import vector3 from '../../../images/icons/Vector (5).png'
export default function CourseBox({course})
{
    return(
        <div className='course-box'>
            <img src={course.img} alt="load.." className='image'/>
            <h3 className='course-box-title'>
                {course.title}
            </h3>
            <h3 className='course-teacher'>
                الاستاذ {course.teacher}
            </h3>
            <div className='course-box-info'>
                <div className='course-box-time'>
                    المدة : 30 د
                </div>
                <div className='course-box-price'>
                    سعر : {course.price} دج
                </div>
            </div>
            <div className='course-footer'>
                <Link to={'#'} className='link'>اشترك</Link>
                <label className='favorite-label'>
                    <input type='checkbox' name='favorite' style={{display: 'none'}}/>
                    <BsFillHeartFill className='heart'/>
                </label>
                <button><BsShare className='icon-share'/></button>
            </div>
        </div>
    )
}