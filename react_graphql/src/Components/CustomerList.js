import React from "react";
import { Table } from "react-bootstrap";

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
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CustomerList;
