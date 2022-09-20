import React from 'react'
import '../../assest/css/goldMemberShip/accountSetting.css'
import GoldenNavbar from '../../components/goldMemberShip/GoldenNavbar'
import { Link } from 'react-router-dom'

export default function AccountSetting() {
  return (
    <div className='account-setting'>
        <GoldenNavbar/>
        <div className='container setting-wrapper'>
            <h2 className='setting-title'>إعدادات الحساب</h2>
            <div className='top-links-setting'>
                <div>
                    <Link to={"/goldStudent/setting/account"} className="link active-link">إعدادات الحساب</Link>
                </div>
                <Link to={"/goldStudent/setting/password"} className="link">إعدادات كلمة المرور </Link>
            </div>
        </div>
    </div>
  )
}
