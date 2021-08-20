import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { GET_ALL_CUSTOMERS } from "../GraphQL/Queries";

const CustomerPage = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch("https://localhost:44371/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: GET_ALL_CUSTOMERS }),
    })
      .then((res) => res.json())
      .then((result) => setState(result.data.allCustomers))
      .catch((err) => console.log("Error: ", err));
  }, []);

  //console.log("result", state);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Customer Page</h2>
      <Container>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Contact Number</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {state.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.name}</td>
                <td>{customer.age}</td>
                <td>{customer.email}</td>
                <td>{customer.contactNumber}</td>
                <td>{customer.address}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default CustomerPage;
