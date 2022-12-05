const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);

exports.handler = async (event, context, callback) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            active: true,
            description:
              '      "Print section the main stem of Cherry Tree with large decay pockets. Print 320 x 350 mm approx. Paper (420 x 594 mm).',
            images: [
              "https://files.stripe.com/links/MDB8YWNjdF8xSHFnd2RHS3BETWh5RXVMfGZsX3Rlc3RfREJ0S2NibGR1VEs0MjdpWkNodnZ3algx00GVfjicjz",
            ],
            livemode: false,
            metadata: {},
            name: "Prunus serrulata",
            package_dimensions: null,
            statement_descriptor: null,
            tax_code: null,
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
