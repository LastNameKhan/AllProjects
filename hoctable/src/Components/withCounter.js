import React, { useState } from "react";

const UpdatedComponent = (WrappedCompoenent, data) => {
  function UpdatedComponent(props) {
    const empdata = data.map((item) => {
      return (
        <tr style={{ border: "1px solid black" }} key={item.id}>
          <td style={{ border: "1px solid black" }}>{item.id}</td>
          <td style={{ border: "1px solid black" }}>{item.name}</td>
        </tr>
      );
    });
    const maindata = data.map((item, id) => {
      return (
        <tr style={{ border: "1px solid black" }} key={item.id}>
          <td style={{ border: "1px solid black" }}>{item.id}</td>
          <td style={{ border: "1px solid black" }}>{item.name}</td>
        </tr>
      );
    });
    return <WrappedCompoenent maindata={maindata} empdata={empdata} />;
  }
  return UpdatedComponent;
};

export default UpdatedComponent;
