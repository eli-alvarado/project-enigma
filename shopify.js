const { json } = require('express');
const request = require('request');

// I couldn't get access with your account so I created another dummy account with a product.
// If you swap your creds with mine you'll be able to see your products.

// You need to pass a callback function so you can send the http reponse. 
function callShopify(callback) {
  // This is just dummy data, so these creds don't mean much. In a production environment, 
  // these would be stored in a config file that git would ignore.
  let apiKey = '1bdd5802ce95aa9c6318d1a834e8c3a9';
  let apiPw = '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';
  let shop = 'eli-testing-store';
  let route = '/products.json';
  let url = `https://${apiKey}:${apiPw}@${shop}.myshopify.com/admin/api/2020-10${route}`;


  // request is an npm package. def the easiest http/https library to work with. 
  request.get(url, function(err, res, body) {
    // If the error isnt null that means it was a bad request, send back the error.
    if(err) callback(err);

    // Check for a successful status code before attempting to parse.
    if(res.statusCode === 200) {
      // Parse the response.
      var products = JSON.parse(body).products;
 
      for(let variant of products[0].variants) {
        // variant['title'] would give you the same result. 
        console.log(variant.title)
      }
      // For the sake of the demo, I'm just sending back the entire response.
      callback(body);
    }
  });


}


// You do not invoke the function when adding to the exports, rather you invoke in the server file.
module.exports = callShopify;