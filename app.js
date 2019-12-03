async function productCall() {
    try {
      let data = await fetch(`https://api.bestbuy.com/v1/products/8880044.json?show=sku,name,salePrice&apiKey=pGkFlneZilafA6UKWELwcNc3`);
      console.log(data);
      return data = products
    } catch (err) {
      console.log(err);
    }
  }

  productCall();