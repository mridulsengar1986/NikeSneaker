const incrementBtn = document.getElementById('increment')
const decremntBtn =  document.getElementById('decrement')
const quantityDisplay = document.getElementById('quantity-display')
const cartBtn =  document.getElementById('cart-btn')
let quantity=0
decremntBtn.addEventListener("click",function(){
    quantity --
if(quantity === 0){
    decremntBtn.disabled=true
    cartBtn.disabled = true
}
    quantityDisplay.innerText=quantity
})
incrementBtn.addEventListener("click", function(){
    quantity = quantity+1
    decremntBtn.disabled = false
    cartBtn.disabled = false
    quantityDisplay.innerText=quantity
})
cartBtn.addEventListener('click', function(){
 
    console.log(`your order for ${quantity} pairs of shoes is being processed`)
    
})
