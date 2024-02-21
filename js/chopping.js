document.getElementById('chopping_btn').addEventListener('click', function(event){
    const getChoppingTitle = getInnerText('chopping_title')
    

    const getChoppingPrice = getInnerValue('chopping_price')
    addEntry(getChoppingTitle)
    
    //const totalPrice = addPrice(getChoppingPrice)
    
    // console.log(getChoppingTitle)
    // console.log(getChoppingPrice)
   
})

function getInnerText(id){
    const product_id = document.getElementById(id)
    const productName = product_id.innerText
    return productName
}

function getInnerValue(elementId){
    const product_price = document.getElementById(elementId)
    const productPriceString = product_price.innerText
    const productPrice = parseFloat(productPriceString)
    return productPrice;
}

function addEntry(title, price){
    const addItem = document.getElementById('addProductEntry')
    const p = document.createElement('p')
    const count = addItem.childElementCount
    p.classList.add('my-4')

    p.innerHTML = `
                    ${count+1}. ${title} 
                    
    `
    addItem.appendChild(p)
}

// function setTotal(choppingPrice){
//     const totalPriceSection = document.getElementById('total_price_sec')

//     const productId = document.getElementById('addProductEntry')
//     const productCount = productId.childElementCount

//     for (let i =0 ; i< productCount; i++){
//         let sum = 0
//         const productPrice = choppingPrice
//         sum = sum + productPrice
//     }

//     totalPriceSection.innerText = `Total price : ${sum}`
// }
