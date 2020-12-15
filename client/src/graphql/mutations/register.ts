import { gql } from '@apollo/client';

export const REGISTER_MUTATION = gql`
  mutation Register($data: RegisterInput!) {
    register(data: $data){
      id
      name
      email
    }
      
  }
`;
