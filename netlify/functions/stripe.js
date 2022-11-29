const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);

exports.handler = async (event, context) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            id: "prod_Mgf4xpHnATQIbj",
            default_price: "price_1LxHk4GKpDMhyEuL53Xfr9oB",
            name: "Prunus serrulata",
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
      // {
      //   price_data: {
      //     currency: "gbp",
      //     product_data: {
      //       id: "price_1LxHiBGKpDMhyEuLOkox92AU",
      //       name: "Cupressus x leylandii",
      //     },
      //     // price: 90,
      //   },
      //   quantity: 1,
      // },
    ],
    mode: "payment",
    success_url: "https://vb-react.netlify.app/success",
    cancel_url: "https://vb-react.netlify.app/cancel",
  });

  return {
    statusCode: 200,
    body: JSON.stringify({
      id: session.id,
    }),
  };
};
