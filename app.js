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

let skuArray = [6316142,5721014,6191401,6261177,6255368,5353902,6355044,5706633,6302020,6355731];

let randSku;

let randNumber;

async function apiCall(){
  randSku = skuArray[Math.floor(Math.random() * skuArray.length)];
  randNumber = Math.floor(Math.random() * 150) + 1;
  let req = await fetch(`https://api.bestbuy.com/v1/products/${randSku}.json?show=sku,name,salePrice&apiKey=pGkFlneZilafA6UKWELwcNc3`);
  return await req.json()
};

console.log(apiCall().then(async x => {
  console.log(x)
}))

let actualValue;

async function createQuestion(data) {
  document.querySelector('.question').innerHTML = `Is the price of ${data.name} higher or lower than $${randNumber}?`;
  console.log(data.salePrice)
  if(data.salePrice > randNumber){
    actualValue = "Higher";
  }else{
    actualValue = "Lower";
  }
  console.log(actualValue)
}
function site() {
  let promise = apiCall()
  promise.then(x => {createQuestion(x)}).then(async x => {
    document.querySelectorAll('.choice').forEach(x => {
      x.addEventListener('click', e => {
        console.log(e.target.innerText)
        if (e.target.innerText == actualValue) {
          alert("Correct!");
        }else{
          alert("Wrong!");
        }
        let promise = apiCall().then(x => {
          createQuestion(x)
        })
        
      })
    })
  });
}
site()


function clickListener(el, run){
  document.querySelectorAll(el).forEach(el => {
    el.addEventListener('click', run); 
  });
};

clickListener(`.choice`,(el)=>{
  let value = el.target.textContent;
  console.log(value);
});