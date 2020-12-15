import { gql } from '@apollo/client';

export const CONFIRM_MUTATION = gql`
mutation confirmUser($token:String!){
  confirmUser(token:$token)
}
`;
