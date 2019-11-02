import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import Spinner from "../../components/spinner/spinner.component";
import CheckoutPage from "./checkout.component";

const GET_CART_ITEMS_AND_TOTAL = gql`
  {
    cartItems @client
    cartTotal @client
  }
`;

const CheckoutPageContainer = () => (
  <Query query={GET_CART_ITEMS_AND_TOTAL}>
    {({ data: { cartItems, cartTotal }, loading }) => {
      if (loading) return <Spinner />;
      return <CheckoutPage cartItems={cartItems} total={cartTotal} />;
    }}
  </Query>
);

export default CheckoutPageContainer;
