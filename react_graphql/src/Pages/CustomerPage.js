import React, { useEffect, useState } from "react";
import { Container, Spinner, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomerList from "../Components/CustomerList";
import { GET_ALL_CUSTOMERS } from "../GraphQL/Queries";
import { SERVER_URL } from "../utils/ServerUrl";

const CustomerPage = () => {
  const [state, setState] = useState({
    loading: false,
    customersData: [],
    hasError: false,
  });
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetch(SERVER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: GET_ALL_CUSTOMERS }),
    })
      .then((res) => res.json(), setState({ loading: true }))
      .then((result) => {
        //debugger;

        setState({
          customersData: result.data.allCustomers,
          loading: false,
          hasError: false,
        });
      })
      .catch((err) =>
        err.message !== ""
          ? setState({
              customersData: [],
              loading: false,
              hasError: true,
            })
          : setErrorMessage(err.message)
      );
  }, []);

  //console.log("State:", state);

  //console.log("result", state);
  function renderCustomerData() {
    if (state.loading)
      return (
        <div className="loadingSpinner">
          <Spinner animation="border" variant="primary" />
        </div>
      );
    if (state.hasError)
      return (
        <div className="errorMessage">
          <b>Error:</b> {errorMessage}!
        </div>
      );
    return <CustomerList customersData={state.customersData} />;
  }

  return (
    <div>
      <Container>
        <h2 className="title">Customers List</h2>
        <Link to="/AddOrUpdate">
          <Button
            variant="success"
            size="small"
            style={{ margin: "0 0 10px 0" }}
          >
            <i className="fas fa-plus-square"></i> Add
          </Button>
        </Link>
        {renderCustomerData()}
      </Container>
    </div>
  );
};

export default CustomerPage;
