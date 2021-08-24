let tabs = document.getElementsByClassName("tab");
let chat_name = document.getElementsByClassName("chatName")[0];
console.log(chat_name);
for(let i = 0; i < tabs.length; i++){
  tabs[i].addEventListener("click", (e)=>{
    let this_name = e.currentTarget.firstElementChild.nextElementSibling.firstElementChild.innerHTML;
    chat_name.innerHTML = this_name;
  });
}
