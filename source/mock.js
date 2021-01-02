const MockData = [
  {
    topText: `Сказочное зоаморское яство`,
    brand: `Нямушка`,
    filling: `с фуа-гра`,
    action: {
      count: 10,
      profit: [
        {
          count: 0,
          item: `мышь в подарок`
        }
      ],
    },
    weight: 0.5,
    isActive: true,
  }, {
    topText: `Сказочное зоаморское яство`,
    brand: `Нямушка`,
    filling: `с рыбой`,
    action: {
      count: 40,
      profit: [
        {
          count: 2,
          item: `мыши в подарок`
        }
      ],
    },
    weight: 2,
    isActive: true,
  }, {
    topText: `Сказочное зоаморское яство`,
    brand: `Нямушка`,
    filling: `с фуа-гра`,
    action: {
      count: 10,
      profit: [
        {
          count: 5,
          item: `мышей в подарок`
        }, {
          count: 0,
          item: `заказчик доволен`
        }
      ],
    },
    weight: 5,
    isActive: false,
  }
];

export {MockData};
