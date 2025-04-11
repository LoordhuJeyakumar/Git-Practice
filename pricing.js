//Our team is building ecommerce website there two developer, Pravin , Priya

function calculateProductPrice(product) {

    let basePrice = product.price;// 200

    if(product.discount && product.discount > 0) {
        basePrice = basePrice * (1 - product.discount / 100);// 200 * (1 - 10 / 100) = 180
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

    return  finalPrice;

}