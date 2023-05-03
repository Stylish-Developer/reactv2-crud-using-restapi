// -- Employee List Edit Page

import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/BaseURL";

const EmpEdit = () => {
  const { empId } = useParams();
  const navigate = useNavigate();
  const id = empId;
  const [employeeDetails, setEmployeeDetails] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
   await axiosInstance({
      method: "GET",
      url: `${id}`,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => setEmployeeDetails(res.data))
      .catch((err) => console.log(err));

    
  };

  const handleChange = (e) => {
    setEmployeeDetails({ ...employeeDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editDetails();
  };

  const editDetails = async () => {
    await axiosInstance({
      method: "PUT",
      url: `${id}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: employeeDetails,
    })
      .then(() => {
        alert("Employee Details Edited Successfully");
        navigate("/");
      })
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
        <div className="row m-5">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Edit Employee Details</h5>
                <div className="card-text">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="empId" className="form-label">
                        Employee Id
                      </label>
                      <input
                        type="text"
                        name="id"
                        value={employeeDetails.id}
                        onChange={handleChange}
                        className="form-control"
                        disabled="disabled"
                        id="empId"
                        required
                      />
                      <label htmlFor="empName" className="form-label">
                        Employee Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={employeeDetails.name}
                        onChange={handleChange}
                        className="form-control"
                        id="empName"
                        required
                      />

                      <label htmlFor="empRole" className="form-label">
                        Employee Role
                      </label>
                      <input
                        type="text"
                        name="role"
                        value={employeeDetails.role}
                        onChange={handleChange}
                        className="form-control"
                        id="empRole"
                        required
                      />

                      <label htmlFor="empDoj" className="form-label">
                        Employee DOJ
                      </label>
                      <input
                        type="date"
                        name="doj"
                        value={employeeDetails.doj}
                        onChange={handleChange}
                        className="form-control"
                        id="empDoj"
                        required
                      />
                      <label htmlFor="empEmail" className="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={employeeDetails.email}
                        onChange={handleChange}
                        className="form-control"
                        id="empEmail"
                        required
                      />
                      <label htmlFor="empWorkMode" className="form-label">
                        Employee WorkMode
                      </label>
                      <input
                        type="text"
                        name="workMode"
                        value={employeeDetails.workMode}
                        onChange={handleChange}
                        className="form-control"
                        id="empWorkMode"
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                    <Link
                      className="btn btn-warning btn-sm mx-2"
                      to="/"
                      role="button"
                    >
                      Go Home
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmpEdit;
