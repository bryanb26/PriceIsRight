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
//var request = require('request');

var skuArray = [6316142,5721014,6191401,6261177,6255368,5353902,6355044,5706633,6302020,6355731];

let randSku = skuArray[Math.floor(Math.random() * skuArray.length)];

let randNumber = Math.floor(Math.random() * 150) + 1;

/* var options = {
    method: 'GET',
    url: `https://api.bestbuy.com/v1/products/${randSku}.json?show=sku,name,salePrice&apiKey=pGkFlneZilafA6UKWELwcNc3`,
    json: true 
    
};

request(options, function(err, res, body) {
  return body.name;
}); */

async function apiCall(){
  let req = await fetch(`https://api.bestbuy.com/v1/products/${randSku}.json?show=sku,name,salePrice&apiKey=pGkFlneZilafA6UKWELwcNc3`);
  return req.json()
};


let promise = apiCall(randSku);

promise.then(function(data) {
  document.querySelector('.question').innerHTML = `Is the price of ${data.name} greater or less than $${randNumber}?`;
  if (data.salePrice > randNumber){
    higher = true;
  }
  else{
    lower = true;
  }
})

