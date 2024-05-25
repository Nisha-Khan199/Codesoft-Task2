let currentstate="light";
let toggle= document.querySelector("i");
toggle.addEventListener("click",()=>{
    if(currentstate==="light"){
        currentstate="dark";
        document.querySelector("body").classList.add("dark");
        document.querySelector("body").classList.remove("light")
    }
    else {
        currentstate="light";
        document.querySelector("body").classList.add("light");
        document.querySelector("body").classList.remove("dark");
    }
});




var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-content");
 function openTab(tabname){
for(tablink of tablinks){
    tablink.classList.remove("active-link");
};
for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
}
event.currentTarget.classList.add("active-link");
document.getElementById(tabname).classList.add("active-tab");
 };