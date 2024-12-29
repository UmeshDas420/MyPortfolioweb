document.querySelector('.cross').style.display = "none";
const content = document.querySelector('.content');
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.menubar').classList.toggle("sidebargo");
    if(document.querySelector('.menubar').classList.contains("sidebargo")){
        document.querySelector('.ham').style.display = "inline";
        document.querySelector('.cross').style.display = "none";
        content.style.marginLeft = "0px";
    }else{
        content.style.marginLeft = "21vw";
        setTimeout(()=>{
            document.querySelector('.ham').style.display = "none";
            document.querySelector('.cross').style.display = "inline";
        },150)
    }
})
document.querySelector('.pro').addEventListener("click",function(){
    window.location.href = "./Htmlfiles/project.html";
})
document.querySelector('.con').addEventListener("click",function(){
    window.location.href = "./Htmlfiles/Contact.html";
})
setInterval(()=>{
    setTimeout(()=>{
        document.querySelector('.name').style.color = "orange";
    },200);
    document.querySelector('.name').style.color = "chocolate";
    
},1000)

document.addEventListener("DOMContentLoaded",()=>{
    document.querySelector('#toggle').addEventListener("change",()=>{
        if(document.querySelector('#toggle').checked){
            
            document.querySelector(".container").classList.add('menubarDark');
            console.log("working");
        }else{
            document.querySelector("body").classList.remove('menubarDark');
        }
    })
})
