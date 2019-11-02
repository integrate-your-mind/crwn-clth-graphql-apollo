import React from "react";
import { graphql } from "react-apollo";
import { flowRight } from "lodash";
import { gql } from "apollo-boost";

import Header from "./header.component";

const GET_CLIENT_PROPERTIES = gql`
  {
    cartHidden @client
    currentUser @client
  }
`;

const HeaderContainer = ({ data: { currentUser, cartHidden } }) => (
  <Header hidden={cartHidden} currentUser={currentUser} />
);

export default flowRight(graphql(GET_CLIENT_PROPERTIES))(HeaderContainer);
