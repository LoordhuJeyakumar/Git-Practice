//Our team is building ecommerce website there two developer, Pravin , Priya

function calculateProductPrice(product) {

    let basePrice = product.price;// 200

    if(product.discount && product.discount > 0) {
        basePrice = basePrice * (1 - product.discount / 100);// 200 * (1 - 10 / 100) = 180
    }

    //Final price with tax
    const finalPrice = basePrice * 1.15;// 180 * 1.15 = 198.0

    return  finalPrice;

}