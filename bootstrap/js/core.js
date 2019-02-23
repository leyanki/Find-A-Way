var sidebar=function(){
    var sidebar=document.querySelector("#sideBarResponsive"),
        triggerSlide=document.querySelector("#sidebar_Trigger");
        triggerSlide.addEventListener("click", function(e){
            if(!sidebar.classList.contains("show_side")){
                sidebar.classList.add("show_side");
            }
        })
        sidebar.addEventListener("click",function(e){
            if(sidebar.classList.contains("show_side")){
                sidebar.classList.remove("show_side");  
            }
        })
}
sidebar();