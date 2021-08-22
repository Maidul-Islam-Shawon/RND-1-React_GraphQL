//................. Customer Queries...............//

//.....Fragment for common fields.....//
const CUSTOMER_FIELDS = `
  fragment CustomerFields on Customer{
    name age email contactNumber address
  }
`;

//.....query to get all Customer.....//
export const GET_ALL_CUSTOMERS = `
    query GetAllCustomers{
        allCustomers{
        id, 
        ...CustomerFields
        }
    }${CUSTOMER_FIELDS}
`;

//.....query to Create Customer.....//
export const CREATE_CUSTOMER = `
  mutation CreateCustomer($Customer:CustomerInput!){
    createCustomer(customer:$Customer){
      id, 
      ...CustomerFields
    }
}${CUSTOMER_FIELDS}
`;

//.....query to Update Customer.....//
export const UPDATE_CUSTOMER = `
  mutation UpdateCustomer($Id:ID!,$CustomerData:CustomerUpdate){
    updateCustomer(id:$Id,customer:$CustomerData){
      ...CustomerFields
    }
}${CUSTOMER_FIELDS}
`;

//.....query to get Customer by Id.....//
export const GET_CUSTOMER_BY_ID = `
    query GetCustomerById($Id:ID!){
    customerByid(id:$Id){
      ...CustomerFields
    }
  }${CUSTOMER_FIELDS}
  `;

//.....query to Delete Customer.....//
export const DELETE_CUSTOMER = `
    mutation DeleteCustomer($Id:ID!){
        deleteCustomer(id:$Id)
    }
`;
