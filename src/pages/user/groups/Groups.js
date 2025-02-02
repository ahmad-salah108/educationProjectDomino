import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Group from "../../../components/user/groups/Group";
import GroupsCategoryBar from "../../../components/user/groups/GroupCategoryBar";
import gropusData from '../../../data/groupsData'
import '../../../assest/css/user/groups/groupsPage.css'
import {BsFillHeartFill} from 'react-icons/bs'
import {motion} from 'framer-motion'

export default function Groups()
{
    const [data,setData] = useState(gropusData)

    // get page scroll to top
    useEffect(()=>
    {
        window.scrollTo({
            behavior:"smooth",
            top:0
        });
        setData(gropusData.map(g=>{
            return {...g,groups:g.groups.slice(0,3)}
        }))
    },[])

    return(
        <div className="groups container">
            <div className="groups-wrapper">
                <div className="category-wrap">
                    <GroupsCategoryBar/>
                </div>
                <div className="groups-content">
                    <h3 className="groups-title">المجموعات</h3>
                    <div>
                        {
                            data.length>0&&data.map((box,index)=>
                            {
                                return<div key={index+'m1'} className="box">
                                    <h3 className="box-title">{box.title}</h3>
                                    <Link to={`/groups/${box.type.toLowerCase()}`}
                                    className="watchAll">مشاهدة الجميع</Link>
                                    <div className="boxes-wrapper">
                                        {
                                            box.groups.map((group,index)=>
                                            {
                                                return (
                                                    <div className="the-course-card">
                                                        <Link to={`/groups/${box.type}/${group.id}`} key={index+'z1'} > <Group group={group}/></Link>
                                                        <motion.div className='icons' initial={{opacity:0, y:"-10px"}} animate={{opacity:1, y:"0px",transition:{duration:0.4}}}>
                                                            <label>
                                                                <input type='checkbox' name='favorite' style={{display: 'none'}}/>
                                                                <BsFillHeartFill className='heart'/>
                                                            </label>
                                                        </motion.div>
                                                    </div>
                                                );
                                            })
                                        }
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}