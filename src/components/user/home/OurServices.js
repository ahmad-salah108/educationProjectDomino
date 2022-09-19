import {useEffect} from 'react'
import m1 from '../../../images/exam.webp'
import m2 from '../../../images/groups.webp'
import m3 from '../../../images/fsio.webp'
import m4 from '../../../images/lect.webp'
import AOS from 'aos' 
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom'
import '../../../assest/css/user/home/ourServises.css'

export default function OurServices() {
    const data=[
        {
            id:"1",
            image:m1,
            title:"الدروس المرئية ",
            text:"شرح كامل عن الدروس المرئية مع امكانية الضغط علي مشاعدة او الاطلاع علي التفاصيل وياخذ لمحه كاملة عن الية الدروس المرئية .شرح كامل عن الدروس المرئية مع امكانية الضغط علي مشاعدة او الاطلاع علي التفاصيل وياخذ لمحه كاملة عن الية الدروس المرئية  . ",
            link:"videoLessons"
        },
        {
            id:"2",
            image:m1,
            title:"  الاختبارات   ",
            text:"شرح كامل عن الدروس المرئية مع امكانية الضغط علي مشاعدة او الاطلاع علي التفاصيل وياخذ لمحه كاملة عن الية الدروس المرئية .شرح كامل عن الدروس المرئية مع امكانية الضغط علي مشاعدة او الاطلاع علي التفاصيل وياخذ لمحه كاملة عن الية الدروس المرئية  . "
            ,link:"exams"
        },
        {
            id:"3",
            image:m2,
            title:" المجموعات  ",
            text:"شرح كامل عن الدروس المرئية مع امكانية الضغط علي مشاعدة او الاطلاع علي التفاصيل وياخذ لمحه كاملة عن الية الدروس المرئية .شرح كامل عن الدروس المرئية مع امكانية الضغط علي مشاعدة او الاطلاع علي التفاصيل وياخذ لمحه كاملة عن الية الدروس المرئية  . "
            ,link:"groups"
        },
        {
            id:"4",
            image:m3,
            title:" الاخصائي النفسي  ",
            text:"شرح كامل عن الدروس المرئية مع امكانية الضغط علي مشاعدة او الاطلاع علي التفاصيل وياخذ لمحه كاملة عن الية الدروس المرئية .شرح كامل عن الدروس المرئية مع امكانية الضغط علي مشاعدة او الاطلاع علي التفاصيل وياخذ لمحه كاملة عن الية الدروس المرئية  . "
            , link:"psychologist"
        },
        {
            id:"5",
            image:m4,
            title:" الدورات  ",
            text:"شرح كامل عن الدروس المرئية مع امكانية الضغط علي مشاعدة او الاطلاع علي التفاصيل وياخذ لمحه كاملة عن الية الدروس المرئية .شرح كامل عن الدروس المرئية مع امكانية الضغط علي مشاعدة او الاطلاع علي التفاصيل وياخذ لمحه كاملة عن الية الدروس المرئية  . "
            , link:"courses"
        },
        {
            id:"6",
            image:m4,
            title:" النوادي والمنتديات  ",
            text:"شرح كامل عن الدروس المرئية مع امكانية الضغط علي مشاعدة او الاطلاع علي التفاصيل وياخذ لمحه كاملة عن الية الدروس المرئية .شرح كامل عن الدروس المرئية مع امكانية الضغط علي مشاعدة او الاطلاع علي التفاصيل وياخذ لمحه كاملة عن الية الدروس المرئية  . "
            , link:"forums"
        }
    ];

return (
    <div className='services container'>
        <h2 className='title'>اهم خدماتنا .... <br/>
        وما نقدمه في الاكادميه ...</h2>
        <div className='content'>
            {
                data.map(da=>{
                    return(
                        <div className='box' key={da.id} data-aos="zoom-in">
                            <Link to={'/'+da.link} className="lessons-link">عرض الدروس</Link>
                            <div className='text'>
                                <div className='image'>
                                    <img src={da.image} alt=""/>
                                </div>
                                <h3 className='box-title'>{da.title}</h3>
                            </div>
                            <p className='box-descirption'>{da.text}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
)
}
