import '../../assest/css/student/dashBoardStudent.css'
import GoldenNavbar from '../../components/goldMemberShip/GoldenNavbar';
import GoldenDashboard from '../../components/goldMemberShip/GoldenDashboard';
import GoldTopMain from '../../components/goldMemberShip/GoldTopMain';
import '../../assest/css/goldMemberShip/oneConversation.css'
import OneMessenger from '../../components/goldMemberShip/OneMessenger';
import {BiSearchAlt2} from 'react-icons/bi'
import FriendBox from '../../components/goldMemberShip/FriendBox';
import { useEffect } from 'react';

export default function OneConversation()
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
                    <div className='oneConversation-wrapper'>
                        <div className='conversation-wrapper'>
                            <OneMessenger/>
                        </div>
                        <div className='list-user-wrapper'>
                            <h6 className='conv-title'>الدردشة</h6>
                            <div className='users-wrapper'>
                                <form className='search-form'>
                                    <button className='search-btn'><BiSearchAlt2/></button>
                                    <input type={"search"} placeholder="البحث" className='search-input'/>
                                </form>
                                <div className='friends-wrapper'>
                                    <FriendBox info={{name:"محمد احمد" , time:"20ث"}}/>
                                    <FriendBox info={{name:"محمد احمد" , time:"20ث"}}/>
                                    <FriendBox info={{name:"محمد احمد" , time:"20ث"}}/>
                                    <FriendBox info={{name:"محمد احمد" , time:"20ث"}}/>
                                    <FriendBox info={{name:"محمد احمد" , time:"20ث"}}/>
                                    <FriendBox info={{name:"محمد احمد" , time:"20ث"}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}