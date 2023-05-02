// -- Employee List Delete Page

import { useParams } from "react-router-dom";

const EmpDelete = () => {
  const { empId } = useParams();
  const id = empId;

  return (
    <>
      <div className="row">
        <div className="col">
          <p>EmpDelete page</p>
          <p>Employee Delete Id: {id}</p>
        </div>
      </div>
    </>
  );
};

export default EmpDelete;
