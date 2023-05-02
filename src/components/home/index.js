// -- Home Page Of This Application

import { useEffect, useState } from "react";
import axiosInstance from "../../utils/BaseURL";

const Home = () => {
  const [empList, setEmpList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axiosInstance({
      method: "get",
    })
      .then((res) => res.data)
      .catch((err) => {
        if (err.response) {
          //the server responded with a status code other than 200 range
        } else if (err.request) {
          //request was made but no response "err.request"
        } else {
          //"err.message"
        }
      });

    setEmpList(response);
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
              <table className="table table-bordered">
                <thead className="bg-black text-white">
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Employee Name</th>
                    <th scope="col">Role</th>
                    <th scope="col">Doj</th>
                    <th scope="col">Email</th>
                    <th scope="col">WorkMode</th>
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
