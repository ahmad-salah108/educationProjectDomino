import teacherImage from '../../images/teacher/معلم 1.png'
import '../../assest/css/teacher/dashboardsidebar.css'
import {AiOutlineLaptop} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import {VscListFlat} from 'react-icons/vsc'
import { useState} from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import NavIcons from './NavIcons'
export default function DashboardSidebar()
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
            <div className={`show-sideBar-icon ${showListIcon?"notShow-sideBar-icon":""}`} onClick={()=>handleShowSidebar()}>
                <VscListFlat className='show-sideBar-icon'/>
            </div>
            <div className={`sidebar ${showSide?"show":""}`} >
                <div className='close-btn'>
                    <AiOutlineClose className='close-btn-icon' onClick={()=>closeSidebar()}/>
                </div>
                <img src={teacherImage} alt="load" className='image'/>
                <h3 className='title'>مرحبا بك<br/> ..ا. محمد البعلوشي </h3>
                <div className='categories'>
                    <div className='categ-link'>
                        <span className='categ-icon'><AiOutlineLaptop className="icon"/></span>
                        <Link to={'#'} className='link-title'>ادارة المستخدمين</Link>
                    </div>
                    <div className='categ-link'>
                        <span className='categ-icon'><AiOutlineLaptop className="icon"/></span>
                        <Link to={'#'} className='link-title'> المجموعات</Link>
                    </div>
                    <div className='categ-link'>
                        <span className='categ-icon'><AiOutlineLaptop className="icon"/></span>
                        <Link to={'#'} className='link-title'> الدروس المرئية</Link>
                    </div>
                    <div className='categ-link'>
                        <span className='categ-icon'><AiOutlineLaptop className="icon"/></span>
                        <Link to={'#'} className='link-title'> المنتديات والنوادي</Link>
                    </div>
                    <div className='categ-link'>
                        <span className='categ-icon'><AiOutlineLaptop className="icon"/></span>
                        <Link to={'#'} className='link-title'> متابعة الحضور والغياب</Link>
                    </div>
                    <div className='categ-link'>
                        <span className='categ-icon'><AiOutlineLaptop className="icon"/></span>
                        <Link to={'#'} className='link-title'> الحصالة المالية</Link>
                    </div>
                    <NavIcons/>
                </div>
            </div>
        </div>
    )
}