let tabs = document.getElementsByClassName("tab");
let chat_name = document.getElementsByClassName("chatName")[0];
console.log(chat_name);
let prev_tab = null, this_tab = null;
for(let i = 0; i < tabs.length; i++){
  tabs[i].addEventListener("click", (e)=>{
    this_tab = e.currentTarget;
    let this_name = e.currentTarget.firstElementChild.nextElementSibling.firstElementChild.innerHTML;
    chat_name.innerHTML = this_name;
    if(prev_tab){
      prev_tab.className="tab";
    }
    this_tab.className="tabSelected";
    prev_tab = this_tab;
  });
}
