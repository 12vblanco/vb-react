import React from "react";
import Stripe from "stripe";
import styled from "styled-components";

const stripe = Stripe(
  "pk_live_51HqgwdGKpDMhyEuLX8UlCGgIwar8J0f6kVS0keUbm5AJ3wARS3pjDX6DIewIBgVYFg8jlyNMtdwZR6sNwnTqfQ3000gB83o2z5"
);

const Checkout = () => {
  return (
    <div>
      <form
        action="https://vb-react.netlify.app/create-checkout-session"
        method="POST"
      >
        <ChkButton
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
