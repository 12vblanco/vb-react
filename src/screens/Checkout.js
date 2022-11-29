import React from "react";
import Stripe from "stripe";
import styled from "styled-components";

const stripe = Stripe(
  "pk_test_51HqgwdGKpDMhyEuL11A63hDc42CNdjZbMH93xDPIumVyYlgGe5byVF9rXhgW0rs64r0uaDjQUqlwOUDXrbTZy9nx00cyCIwiBm"
);

const callApi = (e) => {
  e.preventDefault();
  fetch("/api/stripe", {
    method: "POST",
  })
    .then((response) => response.json())
    .then((response) => console.log(response))

    .then((session) => {
      return Stripe.redirectToCheckout({ sessionId: session.id });
    })
    .then((result) => {
      if (result.err) {
        alert(result.err.message);
      }
    })
    .catch((err) => {
      console.error("Error:", err);
    });
};

const Checkout = () => {
  return (
    <div>
      <form onSubmit={callApi}>
        <ChkButton
          type="submit"
          // onClick={callApi}
        >
          Checkout
        </ChkButton>
      </form>
    </div>
  );
};

const ChkButton = styled.button`
  background-color: #fff;
  color: #333;
  padding: 10px 16px;
  border-radius: 1.2rem;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  z-index: 110;
  border: 0.2rem solid #333;
`;

export default Checkout;
