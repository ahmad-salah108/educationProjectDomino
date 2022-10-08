import {useEffect} from 'react'
import Group from '../../../components/user/groups/Group';
import GroupsCategoryBar from '../../../components/user/groups/GroupCategoryBar';
import {BsFillHeartFill} from 'react-icons/bs'
import {motion} from 'framer-motion'
import '../../../assest/css/user/groups/groupsSearchFound.css'
import img1 from '../../../images/group1.webp'



export default function GroupsSearchFound() {
    const data=[
            {
                id:"1",
                img:img1,
                title:"مجموعة العربية #1",
                time:"يوم الخميس من كل اسبوع من 6.00 م حتي 8.00 م",
                number:"5",
                teacher:"أنور نور",
            },
            {
                id:"2",
                img:img1,
                title:"مجموعة العربية #1",
                time:"يوم الخميس من كل اسبوع من 6.00 م حتي 8.00 م",
                number:"5",
                teacher:"أنور نور",
            },
            {
                id:"3",
                img:img1,
                title:"مجموعة العربية #1",
                time:"يوم الخميس من كل اسبوع من 6.00 م حتي 8.00 م",
                number:"5",
                teacher:"أنور نور", 
            },
            {
                id:"4",
                img:img1,
                title:"مجموعة العربية #1",
                time:"يوم الخميس من كل اسبوع من 6.00 م حتي 8.00 م",
                number:"5",
                teacher:"أنور نور",
            }
    ]

    useEffect(()=>{
        window.scrollTo({
            behavior:"smooth",
            top:0
        })
    },[]);


return (
    <div className="groups-search-found container">
    <div className="groups-wrapper">
        <div className="category-wrap">
            <GroupsCategoryBar/>
        </div>
        <div className="groups-content">
            <h3 className="title-group">المجموعات</h3>
            <h4 className='search-title'>نتائج البحث</h4>
            <div>
                <div className="boxes-wrapper">
                    {
                        data.map((group,index)=>
                        {
                            return (
                            <div className="the-course-card">
                                <Group group={group}  key={index+'z1'}/>
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
        </div>
    </div>
</div>
  )
}
