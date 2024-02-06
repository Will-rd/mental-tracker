import { gql } from '@apollo/client';

export const VIEW_USERS = gql`
query seeAllUsers {
    viewUsers {
      _id
      name
      username
      password
      email
      touchySubs
    }
  }
`