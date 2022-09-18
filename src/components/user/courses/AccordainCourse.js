import { useState } from 'react'
import '../../../assest/css/user/courses/AccordinCourse.css'
import {IoIosVideocam} from 'react-icons/io'
import {AiOutlineFilePdf} from 'react-icons/ai'
import {BiLockAlt} from 'react-icons/bi'
export default function AccordinCourse({box})
{
    const [show,setShow] = useState(false)
    return(
        <div className='course-unit'>
            <div className="unit">
                    <span>{box.title} </span>
                    <button className="btn" onClick={()=>setShow(back=>!back)}>{show?"-":"+"}</button>
            </div>
            {show&&
            <div className='boxes-unit'>
                {
                    box.content.map((b,index)=>
                    {
                        return (
                            <div key={index+'m9'} className={`box-unit ${index%2!==0?'notColor':'color'}`}>
                                <div className='unit-content'>
                                    {b.type==='video'?
                                    <IoIosVideocam className='unit-video'/>:
                                    <AiOutlineFilePdf className='unit-video'/>}
                                    <h3 className='unit-text'>{b.header}</h3>
                                </div>
                                <BiLockAlt/>
                            </div>
                        )
                    })
                }
            </div>}
        </div>
    )
}