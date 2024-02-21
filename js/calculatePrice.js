document.getElementById('spoon_btn').addEventListener('click', function(){
    const spoonPrice = getProductPrice('spoon_price')
    console.log(spoonPrice)
    addToTotalPrice(spoonPrice)
})

document.getElementById('chopping_btn').addEventListener('click', function(){
    const choopingPrice = getProductPrice('chopping_price')
    console.log(choopingPrice)
    addToTotalPrice(choopingPrice)
})

document.getElementById('cooker_btn').addEventListener('click', function(){
    const cookerPrice = getProductPrice('cooker_price')
    console.log(cookerPrice)
    addToTotalPrice(cookerPrice)
})

function getProductPrice(spoon_price_id){
    const spoonPriceId = document.getElementById(spoon_price_id)
    const spoon_price_string = spoonPriceId.innerText
    const spoon_price_amount = parseFloat(spoon_price_string)
    return spoon_price_amount
}

function addToTotalPrice(price){
    
    const addToTotalSection = document.getElementById('total_price_sec')
    const p = document.createElement('span')
    p.innerHTML = `
           ${price}   
    `
    addToTotalSection.appendChild(p)
}
