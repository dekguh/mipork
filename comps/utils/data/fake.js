export const JsonDataMenu = [
    {
        id: 1,
        name: 'Hamburger Cheese',
        typeMenu: 'food',
        description: '',
        price: 15000,
        discount: 20,
        bestseller: true,
        imageUrl: '/images/food/hamburger-cheese.jpg',
        published_at: ''
    },{
        id: 2,
        name: 'Hamburger Beef',
        typeMenu: 'food',
        description: '',
        price: 25000,
        discount: 20,
        bestseller: true,
        imageUrl: '/images/food/hamburger-beef-vegetable.jpg',
        published_at: ''
    },{
        id: 3,
        name: 'Hamburger Wijen',
        typeMenu: 'food',
        description: '',
        price: 30000,
        discount: 0,
        bestseller: true,
        imageUrl: '/images/food/hamburger-wijen.jpg',
        published_at: ''
    },{
        id: 4,
        name: 'Coffee Latte',
        typeMenu: 'drink',
        description: '',
        price: 10000,
        discount: 0,
        bestseller: true,
        imageUrl: '/images/drink/coffee-latte.jpg',
        published_at: ''
    },{
        id: 5,
        name: 'Cesar De La Cruz',
        typeMenu: 'snack',
        description: '',
        price: 30000,
        discount: 0,
        bestseller: true,
        imageUrl: '/images/snack/cesar-de-la-cruz.jpg',
        published_at: ''
    }
];

export const JsonDataCategory = [
    {
        id: 1,
        logo: '/images/icon_category/food.jpg',
        name: 'food',
        title: 'Makanan'
    },{
        id: 2,
        logo: '/images/icon_category/drink.jpg',
        name: 'drink',
        title: 'Minuman'
    },{
        id: 3,
        logo: '/images/icon_category/snack.jpg',
        name: 'snack',
        title: 'Jajanan'
    }
]

export const JsonDataNotif = [
    {
        id: 1,
        description: 'anda berhasil melakukan pembayaran untuk pesanan #123',
        published_at: '25-05-2021'
    },{
        id: 2,
        description: 'selamat anda mendapatkan promo gratis ongkir',
        published_at: '25-05-2021'
    }
]

export const JsonDataTransaction = [
    {
        id: 1,
        status: 'dibayar',
        total: 38000,
        menuId: [1, 2],
        published_at: '25-05-2021'
    },{
        id: 2,
        status: 'dibayar',
        total: 49000,
        menuId: [1, 2],
        published_at: '26-05-2021'
    },{
        id: 3,
        status: 'dibayar',
        total: 18000,
        menuId: [1],
        published_at: '29-05-2021'
    }
]