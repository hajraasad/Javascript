const axios = require('axios');

 async function makeMultipleApiCalls() {
    try {
        const response1 = await axios.get('https://dummyjson.com/products');
        console.log('Response from API 1:', response1.data);

        const response2 = await axios.get('https://example.com/api/data2');
        console.log('Response from API 2:', response2.data);

        const response3 = await axios.get('https://example.com/api/data3');
        console.log('Response from API 3:', response3.data);
    } catch (error)
    {
        // Handle any errors that occur during the requests
        console.error("its an error",error);
    }
}

makeMultipleApiCalls();
