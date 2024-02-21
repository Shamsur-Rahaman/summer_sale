document.getElementById('cooker_btn').addEventListener('click', function(){
    const getCookerTitle = getInnerText('cooker_title')
    
    const getCookerPrice = getInnerValue('cooker_price')
    addEntry(getCookerTitle)
    

//     console.log(getCookerTitle)
//     console.log(getCookerPrice)
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

