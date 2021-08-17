let carts =document.querySelectorAll('.click-cart');

let product =[
    {
        name: 'shirt1' ,
        price:100 ,
        incart:0
    },
    {
        name: 'shirt2' ,
        price:100 ,
        incart:0
    },
    {
        name: 'shirt3' ,
        price:100 ,
        incart:0
    },
    {
        name: 'shirt4' ,
        price:100 ,
        incart:0
    },
    {
        name: 'shirt5' ,
        price:100 ,
        incart:0
    },
    {
        name: 'shirt6' ,
        price:100 ,
        incart:0
    },
    {
        name: 'shirt7' ,
        price:100 ,
        incart:0
    },
    {
        name: 'shirt8' ,
        price:100 ,
        incart:0
    },
    {
        name: 'shirt9' ,
        price:100 ,
        incart:0
    }
    

    


]
function onloadcartnum(){
    let num=localStorage.getItem('cartsNumber');
    if(num ){
        document.querySelector('.add-cart span').textContent= num;
    }
}

for(let i=0;i<carts.length;i++){
    carts[i].addEventListener('click',()=>{
        cartsNumber(product[i]);
        totalCost(product[i]);
    })
}





function cartsNumber(product){
    let num=localStorage.getItem('cartsNumber');
    num=parseInt(num);
    console.log(num)
    if(num){
        console.log("sdas")
        localStorage.setItem('cartsNumber',num+1)
        document.querySelector('.add-cart span').textContent= num+1;

    }else{
        localStorage.setItem('cartsNumber',1);
        document.querySelector('.add-cart span').textContent=1;
    }

    setItem(product);
}
function totalCost(product){
    let cartCost=localStorage.getItem('totalCost');

    if(cartCost!=null){
        cartCost=parseInt(cartCost);
        localStorage.setItem('totalCost',cartCost+product.price);
    }else{
        localStorage.setItem('totalCost',product.price);
    }
}

function setItem(product){
    let cartItem=localStorage.getItem('productInCart');
    cartItem=JSON.parse(cartItem);
    if(cartItem != null){
        if( cartItem[product.tag] == undefined) {
            cartItem={
                ...cartItem,
                [product.tag]: product
            }
        }
        cartItem[product.tag].incart+=1;

    }else{
        product.incart=1;
        cartItem= {
            [product.tag]: product
        }
    }

    localStorage.setItem('productInCart',JSON.stringify(cartItem));
}


onloadcartnum();