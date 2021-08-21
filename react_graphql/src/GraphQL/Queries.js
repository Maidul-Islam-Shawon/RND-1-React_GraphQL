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
