import { useEffect } from 'react';
import AOS from 'aos'
import {Route, Routes} from 'react-router-dom'
import UserpagesOutlet from './pages/user/UserpagesOutlet';
import Home from './pages/user/home/Home';
import Groups from './pages/user/groups/Groups';
import GroupsCategory from './pages/user/groups/GroupsCategory';
import Forums from './pages/user/forums/Forums';
import ForumsCategoryPage from './pages/user/forums/ForumsGategoryPage';
import SingleGropup from './pages/user/groups/SingleGroup';
import SingleForum from './pages/user/forums/SingleForum';
import Physchologist from './pages/user/psychologist/Psychologist';
import PsychologistSessions from './pages/user/psychologist/PsychologistSessions';
import RequestSession from './pages/user/psychologist/RequestSession';
import MemberShipsPage from './pages/user/memberShips/MemberShips';
import GoldenMemberShipPage from './pages/user/memberShips/GoldenMemberShipPage';
import SilverMemberShipPage from './pages/user/memberShips/SilverMemberShipPage';
import ReqularMemberShipPage from './pages/user/memberShips/ReqularMemberShipPage';
import VideoLessons from './pages/user/videoLessons/VideoLessons';
import VideoLessonsCategory from './pages/user/videoLessons/VideoLessonsCategory';
import ViewVideoLessonSingle from './pages/user/videoLessons/ViewSingleLesson';
import PlayerLessonPage from './pages/user/videoLessons/PlayerLessonPage';
import LessonUrlPage from './pages/user/videoLessons/LessonUrlPage';
import ShowSubjectsExam from './pages/user/exams/ShowSubjectsExam';
import ShowCategorySubjectsExam from './pages/user/exams/ShowCategorySubjectsExam';
import MultiQuestionsInPage from './pages/user/exams/MultiQuestionsInPage';
import SingleQuestionTrueOrrFalse from './pages/user/exams/SingleQuestionTrueOrFalse';
import SingleQuestionChoices from './pages/user/exams/SingleQuestionChoices';
import TeacherRegister from './pages/auth/TeacherRegister';
import StudentRegister from './pages/auth/StudentRegister';
import TeacherLogin from './pages/auth/TeacherLogin';
import StudentLogin from './pages/auth/StudentLogin';
import ForgotPassword from './pages/auth/ForgetPassword';
import ParentLogin from './pages/auth/ParentLogin';
import Courses from './pages/user/courses/Courses';
import CoursesCategoryPage from './pages/user/courses/CoursesCategoryPage';
import SingleCourse from './pages/user/courses/SingleCourse';
import SingleCourseJoin from './pages/user/courses/SingleCourseJoin';
import DashboardMain from './pages/teacher/DashboardMain';
import FinancialSahrePage from './pages/teacher/FinancialSharePage';
import CalenderPage from './pages/teacher/ClenderPage';
import LandStudentDashboardPage from './pages/student/LandStudentDashboardPage';
import FollowUpAttendance from './pages/student/FollowUpAttendance';
import DetectionPointsStudent from './pages/student/DetectionPointsStudent';
import GoldMemberShipMainPage from './pages/goldMemberShip/GoldMemberShipMainPage';

function App() {
  useEffect(() => {
    AOS.init({
      duration : 600
    });
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<UserpagesOutlet/>}>
          <Route index element={<Home/>}/>
          <Route path='groups' element={<Groups/>}/>
          <Route path='groups/:groupType' element={<GroupsCategory/>}/>
          <Route path="forums" element={<Forums/>}/>
          <Route path='forums/:forumType' element={<ForumsCategoryPage/>}/>
          <Route path='groups/:groupType/:groupId' element={<SingleGropup/>}/>
          <Route path='forums/:forumType/:forumId' element={<SingleForum/>}/>
          <Route path='psychologist' element={<Physchologist/>}/>
          <Route path='psychologist/sessions' element={<PsychologistSessions/>}/>
          <Route path='psychologist/request/:sessionId' element={<RequestSession/>}/>
          <Route path="memberships" element={<MemberShipsPage/>}/>
          <Route path="memberships/golden" element={<GoldenMemberShipPage/>}/>
          <Route path="memberships/silver" element={<SilverMemberShipPage/>}/>
          <Route path="memberships/regular" element={<ReqularMemberShipPage/>}/>
          <Route path='videoLessons' element={<VideoLessons/>}/>
          <Route path='videoLessons/:lessonsType' element={<VideoLessonsCategory/>}/>
          <Route path='videoLessons/watch/url/:lessonType/:lessonId' element={<LessonUrlPage/>}/>
          <Route path='videoLessons/watch/:lessonType/:lessonId' element={<PlayerLessonPage/>}/>
          <Route path='videoLessons/:lessonType/:lessonId' element={<ViewVideoLessonSingle/>}/>
          <Route path='exams' element={<ShowSubjectsExam/>}/>
          {/* page for multi question in the same oage */}
          {/* <Route path='exams/questions' element={<MultiQuestionsInPage/>}/> */}
          {/* page for one true or false question */}
          {/* <Route path='exams/questions' element={<SingleQuestionTrueOrrFalse/>}/> */}
          {/* page for one multi choices question */}
          <Route path='exams/questions' element={<SingleQuestionChoices/>}/>
          <Route path='exams/:examType' element={<ShowCategorySubjectsExam/>}/>
          {/* login and register routes */}
          <Route path='register/teacher' element={<TeacherRegister/>}/>
          <Route path='register/student' element={<StudentRegister/>}/>
          <Route path='login/teacher' element={<TeacherLogin/>}/>
          <Route path='login/student' element={<StudentLogin/>}/>
          <Route path='forgot-password' element={<ForgotPassword/>}/>
          <Route path='login/parent' element={<ParentLogin/>}/>
          <Route path='courses' element={<Courses/>}/>
          <Route path='courses/:courseType' element={<CoursesCategoryPage/>}/>
          <Route path='courses/:courseType/:courseId' element={<SingleCourse/>}/>
          {/*if the user are subscribed to the course*/}
          {/* <Route path='courses/:courseType/:courseId' element={<SingleCourseJoin/>}/> */} 
        </Route>
        <Route path="teacher" element={<DashboardMain/>}/>
        <Route path='teacher/financial' element={<FinancialSahrePage/>}/>
        <Route path='teacher/calender' element={<CalenderPage/>}/>
        <Route path='student' element={<LandStudentDashboardPage/>}/>
        <Route path='student/followupattendance' element={<FollowUpAttendance/>}/>
        <Route path='student/detectionpoints' element={<DetectionPointsStudent/>}/>
        <Route path='/goldUser' element={<GoldMemberShipMainPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
