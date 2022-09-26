import '../../assest/css/student/dashBoardStudent.css'
import GoldenNavbar from '../../components/goldMemberShip/GoldenNavbar';
import GoldenDashboard from '../../components/goldMemberShip/GoldenDashboard';
import GoldTopMain from '../../components/goldMemberShip/GoldTopMain';
import '../../assest/css/goldMemberShip/honoraryboard.css'
import image from '../../images/goldStudent/WhatsApp Image 2021-12-24 at 11.24 7.png'
import '../../assest/css/goldMemberShip/teachershonorroll.css'
import HonoraryBoardTeacher from '../../components/goldMemberShip/HonoraryBoardTeacher';
import { useEffect } from 'react';


export default function TeachersHonorRoll()
{
    useEffect(()=>{
        window.scrollTo({
            behavior:"smooth",
            top:0
        })
    },[]);
    return(
        <div className="dashboard">
            <GoldenNavbar/>
            <div className="dashboard-wrapper">
                <div className="dashbaord-sidebar">
                    <GoldenDashboard/>
                </div>
                <div className="dashbaord-content">
                    <GoldTopMain/>
                    <div className='TeachersHonorRoll container'>
                        <div className='TeachersHonorRoll-teachers'>
                            <h3 className='TeachersHonorRoll-teachers-title'>لوحة الشرف الخاصة بالطلاب  </h3>
                            <div className='TeachersHonorRoll-teachers-boxes'>
                                <HonoraryBoardTeacher image={image} teacher="انور انور " summary="حاصل علي وسام التميز حيث انه يعد من اكثر المعلمين المشاركين والنشطين"/>
                                <HonoraryBoardTeacher image={image} teacher="انور انور " summary="حاصل علي وسام التميز حيث انه يعد من اكثر المعلمين المشاركين والنشطين"/>
                                <HonoraryBoardTeacher image={image} teacher="انور انور " summary="حاصل علي وسام التميز حيث انه يعد من اكثر المعلمين المشاركين والنشطين"/>
                                <HonoraryBoardTeacher image={image} teacher="انور انور " summary="حاصل علي وسام التميز حيث انه يعد من اكثر المعلمين المشاركين والنشطين"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    )
}
