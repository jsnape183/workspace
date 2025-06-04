const checkout = {
  totalPrice: 256.28 * 5 + 365.25 * 4 + 130.39 * 3 + 365.25 * 10 * 0.9,
  lineItems: [
    {
      productId: 1,
      quantity: 5,
      unitPrice: 256.28,
      priceBreaks: [],
    },
    {
      productId: 2,
      quantity: 4,
      unitPrice: 365.25,
      priceBreaks: [
        {
          quantity: 5,
          discountPct: 0.05,
        },
        {
          quantity: 10,
          discountPct: 0.1,
        },
      ],
    },
    {
      productId: 3,
      quantity: 3,
      unitPrice: 130.39,
      priceBreaks: [],
    },
    {
      productId: 2,
      quantity: 10,
      unitPrice: 365.25,
      priceBreaks: [
        {
          quantity: 5,
          discountPct: 0.05,
        },
        {
          quantity: 10,
          discountPct: 0.1,
        },
      ],
    },
  ],
};

module.exports = checkout;
