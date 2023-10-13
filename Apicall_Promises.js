//Api calling using .then(Nested Api calls)

const axios = require('axios');
axios.get('https://dummyjson.com/products')
    .then(response1 => {
        // Handle the first successful response here
        console.log('Response from API 1:', response1.data);
        // Make a second API call after the first one
        axios.get('https://example.com/api/data2').then(response2 => {
            // Handle the second successful response here
            console.log('Response from API 2:', response2.data);
            // Make a third API call after the second one
             axios.get('https://example.com/api/data3').then(response3 => {
                // Handle the third successful response here
                console.log('Response from API 3:', response3.data);
            })
        })
    }).catch(error => {
        // Handle any errors that occur during the requests
        console.error(error);
    });


