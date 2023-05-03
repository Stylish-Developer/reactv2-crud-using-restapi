// -- page 404 page
import { Link } from "react-router-dom";
import page404Img from "../../assets/img/page404.jpg";

const Page404 = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <p className="h1 text-center">Page Not Found</p>
          <Link class="btn btn-success btn-sm" to="/" role="button">
            Go Home
          </Link>
          <img
            src={page404Img}
            alt="404page"
            style={{ height: "80%", width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Page404;
