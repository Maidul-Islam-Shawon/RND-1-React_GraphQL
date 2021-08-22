import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const CustomerList = ({ customersData }) => {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>Contact Number</th>
          <th>Address</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {customersData.map((customer) => (
          <tr key={customer.id}>
            <td>{customer.name}</td>
            <td>{customer.age}</td>
            <td>{customer.email}</td>
            <td>{customer.contactNumber}</td>
            <td>{customer.address}</td>
            <td style={{ textAlign: "center", fontSize: "20px" }}>
              <Link to={`/Customer/${customer.id}`} style={{ color: "green" }}>
                <i className="fas fa-hand-pointer"></i>
              </Link> &nbsp;
              <Link to={`/AddOrUpdate/${customer.id}`} style={{ color: "orange" }}>
                <i className="fas fa-edit"></i>
              </Link> &nbsp;
              <Link to={`/Customer/Delete/${customer.id}`} style={{ color: "orangered" }}>
                <i className="fas fa-trash-alt"></i>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CustomerList;
