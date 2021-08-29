import React, { useState, useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GET_CUSTOMER_BY_ID } from "../GraphQL/Queries";
import { SERVER_URL } from "../utils/ServerUrl";

const Detail = (props) => {
  const [state, setState] = useState({
    name: "",
    age: "",
    email: "",
    contactNumber: "",
    address: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const CustomerId = props.match.params.id;
  console.log("id:", CustomerId);

  useEffect(() => {
    if (CustomerId) {
      fetch(SERVER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: GET_CUSTOMER_BY_ID,
          variables: { Id: CustomerId },
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          setState(result.data.customerByid);
        })
        .catch((err) => setErrorMessage(err.message));
    }
  }, [CustomerId]);

  //console.log(state.name)

  return (
    <Container>
      <h2 className="title" style={{ color: "blue", marginTop: "50px" }}>
        Customer Detail
      </h2>
      <Card className="text-center">
        <Card.Header>
          <h2>
            Name: <b>{state.name}</b>
          </h2>
        </Card.Header>
        <Card.Body>
          <h4>
            Email: <b>{state.email}</b> | Contact Number:{" "}
            <b>{state.contactNumber}</b>
          </h4>
          <h4>
            Age: <b>{state.age}</b> | Address: <b>{state.address}</b>
          </h4>
        </Card.Body>
        <div style={{ fontSize: "20px" }}>
          <Link to={`/`} style={{ color: "green" }}>
            Back
          </Link>{" "}
          &nbsp; | &nbsp;
          <Link to={`/AddOrUpdate/${CustomerId}`} style={{ color: "orange" }}>
            <i className="fas fa-edit"></i> Edit
          </Link>{" "}
          &nbsp; | &nbsp;
          <Link
            to={`/Customer/Delete/${CustomerId}`}
            style={{ color: "orangered" }}
          >
            <i className="fas fa-trash-alt"></i> Delete
          </Link>
        </div>
      </Card>
      <h3>{errorMessage}</h3>
    </Container>
  );
};

export default Detail;
