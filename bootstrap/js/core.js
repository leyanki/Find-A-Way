var sideBar=function(){
    var trigger=document.querySelector("#sidebar_Trigger"),
    sidebar=document.querySelector("#sidebar");

    trigger.addEventListener("click",function(e){
        sidebar.classList.toggle("show_sidebar");   
    })
}
sideBar();
    