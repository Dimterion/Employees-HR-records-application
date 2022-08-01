import { Link } from "react-router-dom";
import "./error.css";

function Error() {
  return (
    <div className="errorPage-container">
      <h1>404</h1>
      <h2>This page doesn't exist.</h2>
      <Link className="errorPage-homePageLink" to="./">
        Return to the Home page
      </Link>
    </div>
  );
}

export default Error;
