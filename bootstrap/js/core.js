var sideBar=function(){
    var trigger=document.querySelector("#sidebar_Trigger"),
    sidebar=document.querySelector("#sidebar");
    content=document.querySelector(".content");

    trigger.addEventListener("click",function(e){
        sidebar.classList.toggle("show_sidebar");
        if(sidebar.classList.contains("show_sidebar")){
            content.style.display="none";
        }else{
            content.style.display="block"; 
        }

    })
}
sideBar();
    