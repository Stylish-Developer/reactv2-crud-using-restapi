// -- Employee List View Page

import { useParams } from "react-router-dom";

const EmpView = () => {
  const { empId } = useParams();
  const id = empId;

  return (
    <>
      <div className="row">
        <div className="col">
          <p>EmpView page</p>
          <p>Employee View Id: {id}</p>
        </div>
      </div>
    </>
  );
};

export default EmpView;
