import teacherImage from '../../images/teacher/معلم 1.png'
import '../../assest/css/student/dashBoardStudent.css'
import {AiOutlineLaptop} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import {VscListFlat} from 'react-icons/vsc'
import { useState} from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import StudentNavIcons from './StudentNavIcons'
export default function StudebtSidebarDashboard()
{
    const [showSide,setShowSide] = useState(false)
    const [showListIcon,setShowListIcon]=useState(false);

    const handleShowSidebar=()=>{
        setShowSide(true);
        setShowListIcon(true);
    }

    const closeSidebar=()=>{
        setShowSide(false);
        setTimeout(()=>{
            setShowListIcon(false);
        },100);
    }



    return(
        <div className='container sidebar-content'>
            <div className={`show-sideBar-icon-wrapper`} onClick={()=>handleShowSidebar()}>
                <VscListFlat className='show-sideBar-icon'/>
            </div>
            <div className={`sidebar ${showSide?"show":""}`} >
                <div className='close-btn'>
                    <AiOutlineClose className='close-btn-icon' onClick={()=>closeSidebar()}/>
                </div>
                <img src={teacherImage} alt="load" className='image'/>
                <h3 className='title'> مرحبا بك .. التلميذ /محمد</h3>
                <h4 className='description-title'>لوحة التحكم</h4>
                <div className='categories'>
                    <div className='categ-link'>
                        <span className='categ-icon'><AiOutlineLaptop className="icon"/></span>
                        <Link to={'#'} className='link-title'>كشف النقاط</Link>
                    </div>
                    <div className='categ-link'>
                        <span className='categ-icon'><AiOutlineLaptop className="icon"/></span>
                        <Link to={'#'} className='link-title'>جدول الحصص</Link>
                    </div>
                    <div className='categ-link'>
                        <span className='categ-icon'><AiOutlineLaptop className="icon"/></span>
                        <Link to={'#'} className='link-title'>الشهادات</Link>
                    </div>
                    <div className='categ-link'>
                        <span className='categ-icon'><AiOutlineLaptop className="icon"/></span>
                        <Link to={'#'} className='link-title'>متابعة الحضور والغياب </Link>
                    </div>
                </div>
                <StudentNavIcons/>
            </div>
        </div>
    )
}