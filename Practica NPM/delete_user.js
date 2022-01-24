const axios = require('axios');

async function makeDeleteRequest(userNum) {

    // let res = await ;

    const res = await axios.delete('http://localhost:3000/users', {data: { 'id': 11 }});
    //json = await res.data;
    console.log(json);
    console.log(res.status);
}

makeDeleteRequest();
