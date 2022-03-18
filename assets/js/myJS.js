var cart= new Array();
function addCart(x)
{
    var product =x.parentElement.parentElement.parentElement.children;
    var img = product[0].src;
    var name =product[1].children[0].innerText;
    var price=product[1].children[3].children[2].innerText;
    var soluong= product[1].children[2].children[0].value;
    var sanpham=new Array(img,name,soluong,price);

    cart.push(sanpham);
    sessionStorage.setItem("cart",JSON.stringify(cart));
    // alert(cart);
}

function showCart(){

    var gh=sessionStorage.getItem("cart");
    var cart=JSON.parse(gh);
    var ttgh ="";
    var tong=0;
    for(let i=0;i<cart.length;i++)
    {
        var tt=parseInt(cart[i][3])*parseInt(cart[i][2]);
        tong += tt;
        ttgh+= '<tr>'+
        '<td scope="row"><img class="cart-img"src="'+cart[i][0]+'" alt=""></td>'+   
        '<td>'+cart[i][1]+'</td>'+
        '<td>'+cart[i][3]+'</td>'+
        '<td>'+cart[i][2]+'</td>'+
        '<td>'+tt+' đ</td>'+
    '</tr>';
    }

    document.getElementById('myCart').innerHTML=ttgh;
}