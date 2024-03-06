import { Route, Router, Routes,Switch } from 'react-router-dom';
import Register from './Login&Register/Register';
import Login from './Login&Register/login';
import Home from './BothForStudent&Teacher/Home';
import Entry from './Login&Register/Entry';
import Teacher from './Teacher/Teacher';
import Student from './Student/Student';
import Search from './BothForStudent&Teacher/Search';
import Help from './BothForStudent&Teacher/Help';
import MyCourses from './Teacher/MyCourses';
import CourcsesAndLesson from './Teacher/CourcsesAndLesson';
import AddCourses from './Teacher/AddCourses';
import AddLesson from './Teacher/AddLesson';
import Lessons from './inPage/Lessons';
import Courses from './inPage/Courses';
import ViewCourse from './Student/ViewCourse';
import PurchaseCourse from './BothForStudent&Teacher/PurchaseCourse';
import Update from './Login&Register/Update';
import UpdatePassword from './Login&Register/UpdatePassword';
import About from './Login&Register/About';
import EditCourse from './Teacher/EditCourse';
import EditLessons from './Teacher/EditLessons';
import ViewTeacherCourse from './Teacher/ViewTeacherCourse';

function App() {
  return (
    <div>
    
      <Routes>
        <Route path='' element={<Student />}>
          <Route path='' element={<Home />}/>
          <Route path='/viewcourses' element={<Courses />} />
          <Route path='/course' element={<PurchaseCourse/>} />
          <Route path='/help' element={<Help />} />
          <Route path='/viewCourse' element={<ViewCourse/>}/>
          <Route path='/lesson' element={<Lessons/>} />
        </Route>
        <Route path='/trainer/' element={<Teacher />}>
          <Route path='' element={<Home />}/>        
          <Route path='viewcourses' element={<Courses />} />
          <Route path='lesson' element={<Lessons/>} />
          <Route path='mycourse' element={<MyCourses />} />
          <Route path='course' element={<PurchaseCourse/>}>
        <Route path='viewCourse' element={<ViewCourse/>}/>
          </Route>
          <Route path='help' element={<Help />} />
          <Route path='add/' element={<CourcsesAndLesson />}>
            <Route path='' element={<AddLesson />} />
            <Route path='addcourses' element={<AddCourses />} />
            <Route path='addlesson' element={<AddLesson />} />
          </Route>
        </Route>
        <Route path='/entry/' element={<Entry />}>
        <Route path='' element={<Login/>} />
          <Route path='login' element={<Login/>} />
          <Route path='register' element={<Register />} />
          <Route path='update' element={<Update/>}/>
          <Route path='updatepassword' element={<UpdatePassword/>}/>
        </Route>
        <Route path='/viewCourse' element={<ViewCourse/>}/>
        <Route path='/viewtcourse' element={<ViewTeacherCourse/>}/>
        <Route path='/lesson' element={<Lessons/>} />
        <Route path='/aboutme' element={<About/>} />
        <Route path='/editCourse' element={<EditCourse/>} />
        <Route path='/editLesson' element={<EditLessons/>} />
      </Routes>
    </div>

  );
}

export default App;
