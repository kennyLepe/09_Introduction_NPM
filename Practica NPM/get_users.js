const axios = require('axios');

async function makeGetRequest() {
  
   //let res = await ;

  let res = await axios.get('http://localhost:3000/users').then(response => {
    console.log(response);
  })
  //let data = res.data;
  //console.log(data);
}

makeGetRequest();
