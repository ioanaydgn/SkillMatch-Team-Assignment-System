import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../Pages/authentification/auth.login.jsx";
import Register from "../Pages/authentification/auth.register.jsx";
import WorkerLink from "../Pages/authentification/auth.generatelink.jsx";
import WorkerRegister from "../Pages/authentification/auth.workerregister.jsx";
import UserDashboard from "../Pages/User/user.dashboard.jsx";
import Dashboard from "../Pages/User/user.dashboard2.jsx";
import CreateProjectPage from "../Pages/Project/project.createproject.jsx";
import UpdateUserPage from "../Pages/User/user.updateuser.jsx";
import SkillForm from "../Pages/Skills/user.skillscreation.jsx";
import SkillUpdateForm from "../Pages/Skills/user.updateskill.jsx";
import SkillAssignment from "../Pages/Skills/user.skillassignment.jsx";
import EmployeeSearch from "../Pages/TeamFind/team.available.jsx";
import ViewProjectPage from "../Pages/Project/project.viewproject.jsx";
import ProtectedRoute from "../routes/ProtectedRoute.jsx";
import "../css/auth.login.css";
import "../css/auth.generatelink.css";
import "../css/user.dashboard.css";
import "boxicons/css/boxicons.min.css";
import ParentComponent from "../Components/SideBar/app.sidebar.parent.jsx";

const App = () => {
  const project = {
    title: "Project Title",
    description: "Project Description",
    period: "fixed",
    startDate: "2024-03-10",
    deadlineDate: "2024-03-20",
    techStack: "React, Node.js",
    status: "not_started",
    selectedRoles: ["Developer", "Designer"],
  };
  return (
    <Router>
      <Routes>
        {/* Public routes accessible to all users */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/worker/:organizationId" element={<WorkerRegister />} />
        <Route element={<ProtectedRoute  />}>
        <Route path="/dashboard/" element={<UserDashboard />} />
        <Route path="/generatelink" element={<WorkerLink />} />
        <Route path="/createproject/" element={<CreateProjectPage />} />
        <Route path="/updateuser/q/:userid" element={<UpdateUserPage />} />
        <Route path="/createskill/" element={<SkillForm />} />
        <Route path="/updateskill/q/:skillid" element={<SkillUpdateForm />} />
        <Route path="/skillassignment/:userId" element={<SkillAssignment />} />
        <Route path="/teamassignment" element={<EmployeeSearch />} />        
        
        <Route
          path="/viewproject"
          element={<ViewProjectPage project={project} />}
        />
        </Route>
       
        {/* Protected routes accessible only to authenticated users */}
      </Routes>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
