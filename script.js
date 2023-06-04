window.addEventListener("load", getMenu);
async function getMenu(){
    try{
        const response = await fetch(`https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json`);
        let data = await response.json();
        console.log("Menu-data: ", data);
        startProcess();
    }catch(error){
        console.log('cannot read the data... ', error);
    }
}
 // user ordering and adding three burgers in the object
 function takeOrder(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve({"order1" : "veg Burger", "order2" : "Chicken chowmin Burger", "order3":"Burger schezwan"}), 2500);
    });
}

 // function for showing order is preparing
 function orderPrep(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve({"order_status":true, "paid":false}), 1500);
    });
}

// function showing status for paying order
function payOrder(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve({"order_status":true, "paid":true}), 1000);
    });
}

// function for showing thank messages
function thankyouFnc(){
    alert(" Thank-you for visiting today !");
}


async function startProcess(){
    let order =  await takeOrder();
    console.log("order : ", order);
    let prepStatus = await orderPrep();
    console.log("orderStatus : ", prepStatus);
    let paymentStatus = await payOrder();
    console.log("paymentStatus : ", paymentStatus);
    thankyouFnc();
}
