document.getElementById('spoon_btn').addEventListener('click', function(){
    const getSpoonTitle = getInnerText('spoon_rack')
    
    const getSpoonPrice = getInnerValue('spoon_price')
    addEntry(getSpoonTitle)
    

//     console.log(getSpoonTitle)
//     console.log(getSpoonPrice)
//   //  console.log(totalPrice)
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

function addEntry(title){
    const addItem = document.getElementById('addProductEntry')
    const p = document.createElement('p')
    const count = addItem.childElementCount
    
    p.classList.add('my-4')
    p.innerHTML = `
                    ${count+1}. ${title}
    `
    addItem.appendChild(p)
}

// function setTotal(spoonPrice){
//     const totalPriceSection = document.getElementById('total_price_sec')

//     const productId = document.getElementById('addProductEntry')
//     const productCount = productId.childElementCount

//     for (let i =0 ; i< productCount; i++){
//         let sum = 0
//         const productPrice = spoonPrice
//         sum = sum + productPrice
//         return sum;
//     }

//     totalPriceSection.innerText = `Total price : ${sum}`
// }
