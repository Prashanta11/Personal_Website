import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import ForgotPassword from "./pages/ForgotPassword";
import HomePage from './pages/HomePage';
import Login from "./pages/Login";
import ManageProject from "./pages/ManageProject";
import ManageSkill from "./pages/ManageSkill";
import ManageTimeline from "./pages/ManageTimeline";
import ResetPassword from "./pages/ResetPassword";
import UpdateProject from "./pages/UpdateProject";
import ViewProject from "./pages/ViewProject";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element= {<HomePage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/password/forgot" element ={<ForgotPassword/>}/>
        <Route path="/password/reset/:token" element ={<ResetPassword/>}/>
        <Route path="/manage/skill" element ={<ManageSkill/>}/>
        <Route path="/manage/timeline" element ={<ManageTimeline/>}/>
        <Route path="/manage/projects" element ={<ManageProject/>}/>
        <Route path="/view/project/:id" element ={<ViewProject/>}/>
        <Route path="/update/project/:id" element ={<UpdateProject/>}/>

      </Routes>
      <ToastContainer position="bottom-right" theme="dark"/>
    </Router>
  );
};

export default App;