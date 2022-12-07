const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);

exports.handler = async (cart) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "gbp",
          product_data: {
            name: "Prunus serrulata",
          },
          unit_amount: 6000,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "https://vb-react.netlify.app/success",
    cancel_url: "https://vb-react.netlify.app/cancel",
  });
  return {
    statusCode: 200,
    body: JSON.stringify({
      id: session.id,
      items: "cart.items",
    }),
  };
};
