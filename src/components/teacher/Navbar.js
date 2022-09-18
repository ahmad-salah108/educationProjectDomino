import '../../assest/css/teacher/Navbar.css'
import {BsSearch} from 'react-icons/bs'
import NavIcons from './NavIcons'

export default function Navbar()
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
                        <input className='search-input' placeholder='ابحث'/>
                    </form>
                    <NavIcons/>
                </div>
            </div>
        </div>
    )
}