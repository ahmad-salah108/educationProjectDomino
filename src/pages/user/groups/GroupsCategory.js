import {useState, useEffect} from 'react'
import { useParams , Link} from 'react-router-dom'
import Group from '../../../components/user/groups/Group';
import GroupsCategoryBar from '../../../components/user/groups/GroupCategoryBar';
import groupsData from '../../../data/groupsData';
import {BsFillHeartFill} from 'react-icons/bs'
import {motion} from 'framer-motion'
import '../../../assest/css/user/groups/categoryGroupsPage.css'
import EmptyCategory from '../../../components/user/util/EmptyCategory';


export default function GroupsCategory() {
    // get gategory from url params
    const{groupType}=useParams();
    const [data,setData] = useState([]);
    const[isNotFound,setIsNotFound]=useState(false);

    useEffect(()=>{
        window.scrollTo({
            behavior:"smooth",
            top:0
        })
        setData([]);
        setTimeout(()=>{
            setData(groupsData.filter(g=>g.type.toLowerCase()===groupType));
            if(groupsData.filter(g=>g.type.toLowerCase()===groupType).length===0){
                setIsNotFound(true);
            }
            else{
                setIsNotFound(false);
            }
        },100)
    },[groupType]);


return (
    <div className="groups-category container">
    <div className="groups-wrapper">
        <div className="category-wrap">
            <GroupsCategoryBar/>
        </div>
        <div className="groups-content">
            <h3 className="title-group">المجموعات</h3>
            <div>
                {
                    data.length>0?data.map((box,index)=>
                    {
                        return<div key={index+'m1'} className="box">
                            <h3 className="box-title">{box.title}</h3>
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
                    }):isNotFound&&<EmptyCategory type='/groups'/>
                }
            </div>
        </div>
    </div>
</div>
  )
}
