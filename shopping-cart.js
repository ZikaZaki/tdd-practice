// orderTotal() function
function orderTotal(fetch, order) {
    fetch('https://vat.abstractapi.com/v1/9ae7088216204a688eb4a24e1e7cb4d4')
    return Promise.resolve(order.items.reduce((prev, cur) =>
        (cur.price * (cur.quantity || 1) + prev), 0))
}

module.exports = orderTotal