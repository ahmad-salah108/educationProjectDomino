import Navbar from "../../components/teacher/Navbar";
import DashboardSidebar from "../../components/teacher/DashboardSidebar";
import DashbaordContent from "../../components/teacher/DashbaordContent";
import '../../assest/css/teacher/dashboardmain.css'

export default function DashboardMain()
{
    return(
        <div className="dashboard">
            <Navbar/>
            <div className="dashboard-wrapper">
                <div className="dashbaord-sidebar">
                    <DashboardSidebar/>
                </div>
                <div className="dashbaord-content">
                    <DashbaordContent/>
                </div>
            </div>
        </div>
    )
}