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
              <i class="fas fa-hand-pointer"></i> &nbsp;
              <i class="fas fa-edit"></i> &nbsp;
              <i class="fas fa-trash-alt"></i>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CustomerList;
