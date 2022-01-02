var axios = require("axios").default;

var options = {
    method: 'GET',
    url: 'https://instagram28.p.rapidapi.com/media_info',
    params: { short_code: 'CA_ifcxMjFR' },
    headers: {
        'x-rapidapi-host': 'instagram28.p.rapidapi.com',
        'x-rapidapi-key': '6cf9828121mshc8398576acc1b1ep176c26jsnb25f25ad5b03'
    }
};

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});