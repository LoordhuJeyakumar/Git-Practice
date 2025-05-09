//Our team is building ecommerce website there two developer, Pravin , Priya

function calculateProductPrice(product) {
  let basePrice = product.price; // 200

  if (product.discount && product.discount > 0) {
    basePrice = basePrice * (1 - product.discount / 100); // 200 * (1 - 10 / 100) = 180
  }

  //Apply additional discount based if valid discount code
  if (product.discountCode) {
    const discountValue = getDiscountCodeValue(product.discountCode);
    
    if(discountValue > 0) {
        basePrice = basePrice * (1 - discountValue / 100); // 180 * (1 - 20 / 100) = 144
    }

  }


    //Add tax based on region
    let taxRate;
    switch(product.region) {
        case "US":
            taxRate = 0.05;
            break;
        case "CA":
            taxRate = 0.07;
            break;
        case "UK":
            taxRate = 0.08;
            break;
        default:
            taxRate = 0.05;
            break;
    }

    //Final price with tax
    const finalPrice = basePrice * (1 + taxRate); // 180 * (1 + 0.05) = 189

  return finalPrice;
}

function getDiscountCodeValue(code) {
  const discountCode = {
    SUMMER20: 20,
    FALL30: 30,
    WINTER40: 40,
    SPRING50: 50,
    BLACKFRIDAY60: 60,
  };
  return discountCode[code] || 0;
}


function displayPrice(priceFromServer, discount = 0) {
  const finalPrice = priceFromServer - (priceFromServer * discount / 100);
  if (discount > 0) {
    return `The price is ${finalPrice}`;
  }
  return `The price is ${priceFromServer}`;
}
