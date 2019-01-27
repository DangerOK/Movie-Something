import React from "react";
import {Link} from "react-router-dom";

const NotFound = () => (
  <div>
    <h3>This Page Does Not Exist</h3>
    <Link to='/'>Return To Browse Movies </Link>
  </div>
);

export default NotFound;
