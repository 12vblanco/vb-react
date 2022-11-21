const stripe = require("stripe")(process.env.STRIPE_SECRET);

exports.handler = async (event, context) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "gbp",
          product_data: {
            id: "price_1LxHk4GKpDMhyEuL53Xfr9oB",
            name: "Prunus serrulata 'Kanzan'",
          },
          price: 60,
        },
        quantity: 1,
      },
      {
        price_data: {
          currency: "gbp",
          product_data: {
            id: "price_1LxHiBGKpDMhyEuLOkox92AU",
            name: "Cupressus x leylandii",
          },
          price: 90,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "/success",
    cancel_url: "/cancel",
  });

  return {
    statusCode: 200,
    body: JSON.stringify({
      id: session.id,
    }),
  };
};
