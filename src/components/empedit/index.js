// -- Employee List Edit Page

import { useParams } from "react-router-dom";

const EmpEdit = () => {
  const { empId } = useParams();
  const id = empId;

  return (
    <>
      <div className="row">
        <div className="col">
          <p>EmpEdit page</p>
          <p>Employee Edit Id: {id}</p>
        </div>
      </div>
    </>
  );
};

export default EmpEdit;
