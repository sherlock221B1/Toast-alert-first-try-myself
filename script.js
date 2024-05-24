const boxTag = document.querySelector(".box");
const buttonTag = document.querySelector(".button")
const alertTag = document.querySelector(".alert")

colorChange = false;
buttonTag.addEventListener("click", ()=>{
    if(colorChange === true){
        boxTag.style.backgroundColor = "rgb(104, 255, 104)";
        addAndRemoveClasslist();
        colorChange = false;
    }else{
        boxTag.style.backgroundColor = "rgb(255, 255, 59)";
        addAndRemoveClasslist();
        colorChange = true;
    };
  
})
const addAndRemoveClasslist = ()=>{
    alertTag.classList.add("alertShower");
    setTimeout(
        ()=>{
            alertTag.classList.remove("alertShower");
        }, 2000
    )
}