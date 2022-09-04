const orderTotal = require('./shopping-cart');

// Previous test cases
// it('Quantity', ()=> {
//     expect(orderTotal({
//         items: [
//             {name: 'Dragon candy', price: 2, quantity: 3 }
//         ]
//     })).toBe(6);
// });

const emptyFunction = () => {};

it('calls a vat api', () => {
    let isFakeFetchCalled = false;
    const fakeFetch = (url) => {
        expect(url).toBe('https://vat.abstractapi.com/v1/9ae7088216204a688eb4a24e1e7cb4d4');
        isfakeFetchCalled = true;
    }
    orderTotal(fakeFetch, {
        items: [
            {name: 'Dragon waffles', price: 20, quantity: 2 }
        ]
    }).then(result => {
        expect(isFakeFetchCalled).toBe(true);
    });
});

it('Quantity', () =>
    orderTotal({
        items: [
            {name: 'Dragon candy', price: 2, quantity: 3 }
        ]
    }).then(result => expect(result).toBe(6)));

it('No Qty Specified', () => 
    orderTotal({
        items: [
            {name: 'Dragon candy', price: 3 }
        ]
    }).then(result => expect(result).toBe(3)));

it('Happy Path (Example 1)', () => 
    orderTotal({
        items: [
            {name: 'Dragon food', price: 8, quantity: 1 },
            {name: 'Dragon cage (small)', price: 800, quantity: 1}
        ]
    }).then(result => expect(result).toBe(808)));

it('Happy Path (Example 2)', () => 
    orderTotal({
        items: [
            { name: 'Dragon collar', price: 20, quantity: 1 },
            { name: 'Dragon chew toy', price: 40, quantity: 1 }
        ]
    }).then(result => expect(result).toBe(60)));

// if (orderTotal({
//     items: [
//         { name: 'Dragon collar', price: 20, quantity: 1 },
//         { name: 'Dragon chew toy', price: 40, quantity: 1 }
//     ]
// }) !== 60) {
//     throw new Error('[x_x] Check fail: Happy path (Example 2)');
// }else{console.log('[O_O] Check pass: Happy path (Example 2)');}

