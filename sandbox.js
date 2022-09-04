const fetch = require('node-fetch');

const result = 
    fetch('https://vat.abstractapi.com/v1/',{
        headers: {
            'apikey': '9ae7088216204a688eb4a24e1e7cb4d4'
        }
    })
    .then(response => response.json())
    .then(data => data.rates.standard.value);

result 