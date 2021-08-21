import React, { useState } from "react";
import { Col, Container, Form, Button } from "react-bootstrap";

const CREATE_CUSTOMER = `
  mutation CreateCustomer($Customer:CustomerInput!){
    createCustomer(customer:$Customer){
      id name age email contactNumber address
    }
}`;

const AddOrUpdate = () => {
  const [state, setState] = useState({
    name: "",
    age: "",
    email: "",
    contactNumber: "",
    address: "",
  });
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    //debugger;
    setState({ ...state, [name]: value });
  };

  console.log(state);

  const handleSubmit = (event) => {
    event.preventDefault();
    validationChecking(event);
    debugger;
    if (state.age) {
      var _age = Number(state.age);
      setState({ age: _age });
    }

    fetch("https://localhost:44371/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: CREATE_CUSTOMER,
        variables: { Customer: state },
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err.message));
  };

  function validationChecking(event) {
    const form = event.currentTarget;
    //console.log("val:", form);
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  }

  return (
    <Container>
      <h2 className="title">Add a Customer</h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>Customer Name</Form.Label>
            <Form.Control
              required
              type="text"
              name="name"
              placeholder="Customer Name"
              onChange={handleChange}
              value={state.name || ""}
            />
            <Form.Control.Feedback type="invalid">
              Please provide Customer Name.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Age</Form.Label>
            <Form.Control
              required
              type="number"
              name="age"
              placeholder="Age"
              onChange={(e) =>
                setState({ ...state, age: parseInt(e.target.value) })
              }
              value={state.age || ""}
            />
            <Form.Control.Feedback type="invalid">
              Please provide Customer Age.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={state.email || ""}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Email.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom04">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control
              required
              type="text"
              name="contactNumber"
              placeholder="Contact Number"
              onChange={handleChange}
              value={state.contactNumber || ""}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Contact Number.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} md="12" controlId="validationCustom05">
            <Form.Label>Address</Form.Label>
            <Form.Control
              required
              type="text"
              name="address"
              placeholder="Address"
              onChange={handleChange}
              value={state.address || ""}
            />
            <Form.Control.Feedback type="invalid">
              Please provide Address.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        {/* <Form.Group>
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before Submit."
            onChange={handleCheck}
          />
        </Form.Group> */}

        {/* {ButtonName} */}
        <Button
          type="Submit"
          variant="success"
          size="small"
          style={{ width: "8rem" }}
        >
          Create
        </Button>
      </Form>
    </Container>
  );
};

export default AddOrUpdate;