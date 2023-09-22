let like=document.getElementById("like")
console.log(like);
let num=document.getElementById("num")
console.log(num);

let count=203;
let heart=true;

like.addEventListener("click",function(){
    if(heart==false){
        like.style.color="black"
        num.innerHTML=(count)
        heart=true
    }
    else{
        like.style.color="red"
        num.innerHTML=(count+1)
        heart=false
    }
})
