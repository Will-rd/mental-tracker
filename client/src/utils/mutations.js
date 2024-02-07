import { gql } from '@apollo/client'

export const ADD_USER = gql`
mutation Mutation($name: String!, $username: String!, $password: String!, $email: String!) {
    addUser(name: $name, username: $username, password: $password, email: $email) {
      _id
      name
      username
      password
      email
    }
  }
`