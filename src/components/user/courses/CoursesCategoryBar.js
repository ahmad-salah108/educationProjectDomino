import React from 'react'
import { Link } from 'react-router-dom'
import '../../../assest/css/user/courses/coursescategorybar.css'

export default function CoursesCategoryBar() {

return (
    <div className='groups-bar'>
    <h3 className="courses-content-title">الفئات</h3>
    <ul className="bar-wrapper">
        <Link to={'/courses/'} className={`link`}
            >الجميع
        </Link>
        <Link to={'/courses/arabic'}  className="link"
            >اللغة العربية
        </Link>
        <Link to={'/courses/math'}  className="link"
            >الرياضيات
        </Link>
        <Link to={'/courses/history'}  className="link"
            >التاريخ
        </Link>
        <Link to={'/courses/economie'}  className="link"
            >الإقتصاد
        </Link>
        <Link to={'/courses/etiquette'}   className="link"
            >الاداب
        </Link>
        <Link to={'/courses/languages'}  className="link"
            >اللغات الأجنبية
        </Link>
    </ul>
</div>
)
}
