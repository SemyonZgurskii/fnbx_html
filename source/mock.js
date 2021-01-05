const mockData = [
  {
    id: 1,
    topText: `Сказочное заморское яство`,
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
    description: `Печень утки разварная с артишоками.`,
    images: {
      png: {default: `img/cat@1x.png`, retina: `img/cat@2x.png`},
      webp: {default: `img/cat@1x.webp`, retina: `img/cat@2x.webp`},
    }
  }, {
    id: 2,
    topText: `Сказочное заморское яство`,
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
    description: `Головы щучьи с чесноком да свежайшая сёмгушка.`,
    images: {
      png: {default: `img/cat@1x.png`, retina: `img/cat@2x.png`},
      webp: {default: `img/cat@1x.webp`, retina: `img/cat@2x.webp`},
    }
  }, {
    id: 3,
    topText: `Сказочное заморское яство`,
    brand: `Нямушка`,
    filling: `с курой`,
    action: {
      count: 100,
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
    description: `Филе из цыплят с трюфелями в бульоне.`,
    images: {
      png: {default: `img/cat@1x.png`, retina: `img/cat@2x.png`},
      webp: {default: `img/cat@1x.webp`, retina: `img/cat@2x.webp`},
    }
  }
];

export {mockData};
