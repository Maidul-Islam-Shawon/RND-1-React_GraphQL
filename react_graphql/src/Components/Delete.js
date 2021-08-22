import React, { useEffect, useState } from 'react'
import { Button, Card, Container } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { DELETE_CUSTOMER, GET_CUSTOMER_BY_ID } from '../GraphQL/Queries';
import { DeleteMessage } from '../utils/TostifyMessage';


const Delete = (props) => {
    const [state, setState] = useState({
        name: "",
        age: "",
        email: "",
        contactNumber: "",
        address: "",
    });
    const [errorMessage, setErrorMessage] = useState("");
    let history = useHistory();

    const CustomerId = props.match.params.id;
    console.log("id:", CustomerId);

    useEffect(() => {
        if (CustomerId) {
            fetch("https://localhost:44371/graphql", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ query: GET_CUSTOMER_BY_ID, variables: { Id: CustomerId } }),
            })
                .then((res) => res.json())
                .then((result) => {
                    setState(result.data.customerByid);
                })
                .catch((err) =>
                    setErrorMessage(err.message)
                );
        }

    }, [CustomerId]);

    const handleSubmit = () => {
        if (CustomerId) {
            fetch("https://localhost:44371/graphql", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ query: DELETE_CUSTOMER, variables: { Id: CustomerId } }),
            })
                .then((res) => res.json())
                .then((result) => {
                    DeleteMessage();
                    history.push("/");
                })
                .catch((err) =>
                    setErrorMessage(err.message)
                );
        }
    }
    return (
        <Container>
            <h2 className="title" style={{ color: "red", marginTop: "50px" }}>Are you sure you want to delete?</h2>
            <Card className="text-center">
                <Card.Header><h2>Name: <b>{state.name}</b></h2></Card.Header>
                <Card.Body>
                    <h4>Email: <b>{state.email}</b> |
                        Contact Number: <b>{state.contactNumber}</b></h4>
                    <h4>Age: <b>{state.age}</b> |
                        Address: <b>{state.address}</b></h4>
                </Card.Body>
                <div style={{ fontSize: "20px" }}>
                    <Link to={`/`} style={{ color: "green" }}>
                        Back
                    </Link> &nbsp; |  &nbsp;

                    <Button
                        type="Submit"
                        variant="danger"
                        size="small"
                        onClick={handleSubmit}
                        style={{ marginBottom: "10px" }}
                    >
                        Delete
                    </Button>

                </div>
            </Card>
        </Container>
    )
}

export default Delete
