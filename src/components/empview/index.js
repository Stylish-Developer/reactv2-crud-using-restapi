// -- Employee List View Page

import { Link, useParams } from "react-router-dom";
import axiosInstance from "../../utils/BaseURL";
import { useEffect, useState } from "react";

const EmpView = () => {
  const { empId } = useParams();
  const id = empId;
  const [empDetail, setEmpDetail] = useState([]);

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
     await axiosInstance({
      method: "GET",
      url: `${id}`,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => setEmpDetail([res.data]))
      .catch((err) => {
        if (err.response) {
          //the server responded with a status code other than 200 range
        } else if (err.request) {
          //request was made but no response "err.request"
        } else {
          //"err.message"
        }
      });

    
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col m-5">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Employee Details View: </h5>
                {empDetail?.map((data) => (
                  <div key={data.id}>
                    <p className="card-text">Employee Name: {data.name}</p>
                    <p className="card-text">Employee Role: {data.role}</p>
                    <p className="card-text">Employee DOJ: {data.doj}</p>
                    <p className="card-text">Employee Email: {data.email}</p>
                    <p className="card-text">
                      Employee WorkMode: {data.workMode}
                    </p>
                  </div>
                ))}
                <Link to="/" className="btn btn-primary" role="button">
                  go back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmpView;
