// -- Home Page Of This Application

import { useEffect, useState } from "react";
import axiosInstance from "../../utils/BaseURL";
import { Link } from "react-router-dom";

const Home = () => {
  const [empList, setEmpList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axiosInstance({
      method: "get",
    })
      .then((res) => setEmpList(res.data))
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

  const handleEmpDelete = async (id) => {
    await axiosInstance({
      method: "DELETE",
      url: `${id}`,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => fetchData())
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="h1 text-center">CRUD OPERATIONS</p>
          </div>
          <div className="row">
            <div className="col">
              <Link
                to="/employee/create"
                className="btn btn-success btn-sm my-1"
                role="button"
              >
                Add Employee (+)
              </Link>
              <table className="table table-bordered">
                <thead className="bg-black text-white">
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Employee Name</th>
                    <th scope="col">Role</th>
                    <th scope="col">Doj</th>
                    <th scope="col">Email</th>
                    <th scope="col">WorkMode</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {empList.map((emp, i) => (
                    <tr key={emp.id}>
                      <td>{emp.id}</td>
                      <td>{emp.name}</td>
                      <td>{emp.role}</td>
                      <td>{emp.doj}</td>
                      <td>{emp.email}</td>
                      <td>{emp.workMode}</td>
                      <td>
                        <Link
                          className="btn btn-success btn-sm m-1"
                          to={`employee/view/${emp.id}`}
                          role="button"
                        >
                          view
                        </Link>
                        <Link
                          className="btn btn-primary btn-sm m-1"
                          to={`employee/update/${emp.id}`}
                          role="button"
                        >
                          edit
                        </Link>
                        <Link
                          className="btn btn-danger btn-sm m-1"
                          onClick={() => handleEmpDelete(emp.id)}
                          role="button"
                        >
                          delete
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
