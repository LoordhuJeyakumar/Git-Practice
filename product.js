function displayPrice(priceFromServer, discount = 0) {
    
    const finalPrice = priceFromServer - (priceFromServer * discount / 100);// 200 - (200 * 10 / 100) = 180

    if (discount > 0) {
        return `The price is ${finalPrice}`;
    }

    return `The price is ${priceFromServer}`;
}

console.log(displayPrice(200, 10));



function getPrice(product) {
    const basePrice = product.price;
    if (product.discount && product.discount > 0) {
        return basePrice - (basePrice * product.discount / 100);
    }
    return basePrice;
}