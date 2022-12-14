import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

const Demo = () => {
  return (
    <div>
      <h2>Applied Computing - Modules table</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>No lectures</th>
            <th>No practicals</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>DevOps</td>
            <td>2</td>
            <td>3</td>
          </tr>
          <tr>
            <td>Web App Dev</td>
            <td>2</td>
            <td>2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Demo;