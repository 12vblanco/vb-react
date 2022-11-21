import React from "react";
import Stripe from "stripe";
// import styled from "styled-components";
import MainContainer from "./MainContainer";

const stripe = Stripe(
  "pk_live_51HqgwdGKpDMhyEuLX8UlCGgIwar8J0f6kVS0keUbm5AJ3wARS3pjDX6DIewIBgVYFg8jlyNMtdwZR6sNwnTqfQ3000gB83o2z5"
);

const Checkout = () => {
  return (
    <MainContainer>
      <form action="/create-checkout-session" method="POST">
        <button
          type="submit"
          onClick={() => {
            {
              fetch("/api/stripe", {
                method: "POST",
              })
                .then(function (response) {
                  return response.json();
                })
                .then(function (session) {
                  return stripe.redirectToCheckout({ sessionId: session.id });
                })
                .then(function (result) {
                  if (result.error) {
                    alert(result.error.message);
                  }
                })
                .catch(function (error) {
                  console.error("Error:", error);
                });
            }
          }}
        >
          Checkout
        </button>
      </form>
    </MainContainer>
  );
};

export default Checkout;
