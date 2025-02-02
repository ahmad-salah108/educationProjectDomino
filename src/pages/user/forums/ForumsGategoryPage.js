import {useState, useEffect} from 'react'
import { useParams , Link} from 'react-router-dom'
import Forum from '../../../components/user/forums/Forum';
import ForumsCategory from '../../../components/user/forums/ForumsCategoryBar';
import forumsDate from '../../../data/forumsData';
import {BsFillHeartFill} from 'react-icons/bs'
import {motion} from 'framer-motion'
import '../../../assest/css/user/forums/forumsGategoryPgae.css'
import EmptyCategory from '../../../components/user/util/EmptyCategory';

export default function ForumsCategoryPage() {
    const {forumType} = useParams();
    const [data,setData] = useState([]);
    const [isNotFound,setIsNotFound]=useState(false);

    useEffect(()=>{
        window.scrollTo({
            behavior:"smooth",
            top:0
        })
        setData([]);
        setTimeout(()=>{
            setData(forumsDate.filter(g=>g.type.toLowerCase()===forumType));
            if(forumsDate.filter(g=>g.type.toLowerCase()===forumType).length===0){
                setIsNotFound(true);
            }
            else{
                setIsNotFound(false);
            }
        },100)
    },[forumType]);
    return (
    <div className="formus-category container">
    <div className="groups-wrapper">
        <div className="category-wrap">
            <ForumsCategory/>
        </div>

        <div className="groups-content">
            <h3 className="title-forums">المنتديات و النوادي</h3>
            <div>
                {
                    data.length>0?data.map((box,index)=>
                    {
                        return<div key={index+'m1'} className="box">
                            <h3 className="box-title">{box.title}</h3>
                            <div className="boxes-wrapper">
                                {
                                    box.groups.map((forum,index)=>
                                    {
                                        return (
                                            <div className="the-course-card">
                                                <Link to={`/forums/${box.type}/${forum.id}`} key={index+'z1'} className="forum-link"> 
                                                    <Forum forum={forum}/>
                                                </Link>
                                                <motion.div className="icons" initial={{opacity:0, y:"-10px"}} animate={{opacity:1, y:"0px",transition:{duration:0.4}}}>
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
                    }):isNotFound&&<EmptyCategory type='/forums'/>
                }
            </div>
        </div>
    </div>
</div>
  )
}
