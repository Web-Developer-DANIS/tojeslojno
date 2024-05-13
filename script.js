
const cart = receipt();
    

const deliveryCost = 9000;


let totalCost = deliveryCost;


let orderList = "Вы заказали ";


const items = Object.keys(cart);


for (let i = 0; i < items.length; i++) {

    orderList += `${items[i]}, `;

    totalCost += deliveryCost;
}




orderList = orderList.slice(0, -2);


console.log(`${orderList} | Общая стоимость ${totalCost} сум с доставкой (${deliveryCost})`);