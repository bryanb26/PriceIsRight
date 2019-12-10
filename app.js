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

var skuArray = [6316142,5721014,6191401,6261177,6255368,5353902,6355044,5706633,6302020,6355731];

let randSku = skuArray[Math.floor(Math.random() * skuArray.length)]

var options = {
    method: 'GET',
    url: `https://api.bestbuy.com/v1/products/${randSku}.json?show=sku,name,salePrice&apiKey=pGkFlneZilafA6UKWELwcNc3`,
    json: true 
    
};

request(options, function(err, res, body) {
    return body.name;
})






