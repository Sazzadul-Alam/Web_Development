const shop = {
    owner: 'Alia',
    address: {
        street: 'mia bari road',
        city: 'Dhaka',
        country: 'Bangladesh'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false,
};
console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON)
const shopObj = JSON.parse(shopJSON)
console.log(shopObj)