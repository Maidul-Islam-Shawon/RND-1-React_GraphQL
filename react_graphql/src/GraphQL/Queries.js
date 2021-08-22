export const GET_ALL_CUSTOMERS = `
    query GetAllCustomers{
        allCustomers{
        id name age email contactNumber address
        }
    }
`;

export const CREATE_CUSTOMER = `
  mutation CreateCustomer($Customer:CustomerInput!){
    createCustomer(customer:$Customer){
      id name age email contactNumber address
    }
}`;

export const UPDATE_CUSTOMER = `
  mutation UpdateCustomer($Id:ID!,$CustomerData:CustomerUpdate){
    updateCustomer(id:$Id,customer:$CustomerData){
      name age address email
    }
}`

export const GET_CUSTOMER_BY_ID = `
    query GetCustomerById($Id:ID!){
    customerByid(id:$Id){
      name age address email contactNumber
    }
  }`

export const DELETE_CUSTOMER = `
    mutation DeleteCustomer($Id:ID!){
        deleteCustomer(id:$Id)
    }
`;
