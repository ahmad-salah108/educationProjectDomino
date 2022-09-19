import '../../assest/css/student/dashBoardStudent.css'
import TopMainInfo from "../../components/student/TopMainInfo";
import GoldenNavbar from '../../components/goldMemberShip/GoldenNavbar';
import GoldenDashboard from '../../components/goldMemberShip/GoldenDashboard';

export default function GoldMemberShipMainPage()
{
    return(
        <div className="dashboard">
            <GoldenNavbar/>
            <div className="dashboard-wrapper">
                <div className="dashbaord-sidebar">
                    <GoldenDashboard/>
                </div>
                <div className="dashbaord-content">
                    <TopMainInfo/>
                </div>
            </div>
        </div>
    )
}