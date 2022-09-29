import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

const Demo = props => {

  const modules = [
  
  ]

  const list = props.modules.map((module, id) => {
    return (
      <tr key={module.id}>
      <td>{module.name}</td>
      <td> {module.noLectures} </td>
      <td> {module.noPracticals} </td>
    </tr>
      
    );
  });
  return (
    <>
      <h2>{props.course}</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>No lectures</th>
            <th>No practicals</th>
          </tr>
        </thead>
        <tbody>{list}</tbody>
      </table>
    </>
  );
};

export default Demo;