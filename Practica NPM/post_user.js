const axios = require('axios');

async function makePostRequest() {

    let options = {
      method: 'POST',
      headers: {
        'Content-type':'application/json;charset=utf-8'
      },
      data: JSON.stringify({
        id:11,
        first_name:'Eugenio',
        last_name:'Hurtado',
        email:'eugenioh@gmail.com'
      })
    }

    let res = await axios('http://localhost:3000/users',options),
    json = await res.data;
    console.log(json);

    params = {
        id: 6,
        first_name: 'Fred',
        last_name: 'Blair',
        email: 'freddyb34@gmail.com'
      }

      //let res = await ;

    console.log(res.data);
}

makePostRequest();
