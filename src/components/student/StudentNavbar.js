import '../../assest/css/student/studentNavbar.css'
import {BsSearch} from 'react-icons/bs'
import TeacherNavIcons from '../teacher/NavIcons'

export default function StudentNavbar()
{
    return(
        <div className='navbar'>
            <div className='container navbar-wrapper'>
                <div className='logo'>
                    <h3 className='logo-image'>لوجو</h3>
                    <h4 className='logo-title'>أكادميتنا </h4>
                </div>
                <div className='nav-left'>
                    <form className='search-box'>
                        <BsSearch className='search-icon'/>
                        <input type={"search"} className='search-input' placeholder='ابحث'/>
                    </form>
                    <TeacherNavIcons/>
                </div>
            </div>
        </div>
    )
}