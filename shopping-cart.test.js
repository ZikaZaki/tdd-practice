const orderTotal = require('./shopping-cart');

// it('Quantity', ()=> {
//     expect(orderTotal({
//         items: [
//             {name: 'Dragon candy', price: 2, quantity: 3 }
//         ]
//     })).toBe(6);
// });

it('Quantity', () =>
    expect(orderTotal({
        items: [
            {name: 'Dragon candy', price: 2, quantity: 3 }
        ]
    })).toBe(6)
);

it('No Qty Specified', () => 
    expect(orderTotal({
        items: [
            {name: 'Dragon candy', price: 3 }
        ]
    })).toBe(3)
);

it('Happy Path (Example 1)', () => 
    expect(orderTotal({
        items: [
            {name: 'Dragon food', price: 8, quantity: 1 },
            {name: 'Dragon cage (small)', price: 800, quantity: 1}
        ]
    })).toBe(808)
);

it('Happy Path (Example 2)', () => 
    expect(orderTotal({
        items: [
            { name: 'Dragon collar', price: 20, quantity: 1 },
            { name: 'Dragon chew toy', price: 40, quantity: 1 }
        ]
    })).toBe(60)
);

// if (orderTotal({
//     items: [
//         { name: 'Dragon collar', price: 20, quantity: 1 },
//         { name: 'Dragon chew toy', price: 40, quantity: 1 }
//     ]
// }) !== 60) {
//     throw new Error('[x_x] Check fail: Happy path (Example 2)');
// }else{console.log('[O_O] Check pass: Happy path (Example 2)');}

