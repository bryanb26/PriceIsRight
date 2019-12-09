/*  async function productCall() {
    try {
      let data = await fetch(`https://api.bestbuy.com/v1/products/8880044.json?show=sku,name,salePrice&apiKey=pGkFlneZilafA6UKWELwcNc3`, {
        method: 'GET',
        body: JSON.stringify(data);
      });
      console.log(data);
      return data = products
    } catch (err) {
      console.log(err);
    }
  }

  productCall();  */
  var request = require('request');

  var options = {
    method: 'GET',
    url: `https://api.bestbuy.com/v1/products/${randomSku(01000000,10000000)}.json?show=sku,name,salePrice&apiKey=pGkFlneZilafA6UKWELwcNc3`,
    json: true
    
  };

  request(options, function(err, res, body) {
    console.log(body.sku)
  })

  

  function randomSku(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

console.log(randomSku(01000000,10000000));