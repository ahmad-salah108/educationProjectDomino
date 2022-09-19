import '../../assest/css/teacher/dashboardmain.css'
import StudebtSidebarDashboard from "../../components/student/StudentSidebarDashboard";
import StudentNavbar from "../../components/student/StudentNavbar";
import TopMainInfo from "../../components/student/TopMainInfo";

export default function LandStudentDashboardPage()
{
    return(
        <div className="dashboard">
            <StudentNavbar/>
            <div className="dashboard-wrapper">
                <div className="dashbaord-sidebar">
                    <StudebtSidebarDashboard/>
                </div>
                <div className="dashbaord-content">
                    <TopMainInfo/>
                </div>
            </div>
        </div>
    )
}