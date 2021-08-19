{/* <div class="container">
<h3>Creating element using javascript</h3>
<input type="text" id="mytextbox" placeholder="Enter a name">
<button id="btn">Create element</button>
</div>

<div class="container2">
<ul id="mylist">
    <li>Sample data</li>
</ul>
</div> */}


let mytextbox= document.querySelector("#mytextbox");
let btn= document.querySelector("#btn");
let mylist= document.querySelector("#mylist");

btn.addEventListener('click', function(){

    if(mytextbox.value.trim()==""){

    alert("pleae enter data");
    }else{

    let nw_elm=document.createElement("li");
    nw_elm.innerHTML=mytextbox.value;
    mylist.appendChild(nw_elm);
}
});