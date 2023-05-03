// -- app component

import { Route, Routes } from "react-router";
import Home from "./components/home";
import EmpCreate from "./components/empcreate/index";
import EmpView from "./components/empview/index";
import EmpEdit from "./components/empedit/index";

import Page404 from "./components/page404/index";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="employee/create" element={<EmpCreate />} />
        <Route path="employee/view/:empId" element={<EmpView />} />
        <Route path="employee/update/:empId" element={<EmpEdit />} />
       
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
};

export default App;
