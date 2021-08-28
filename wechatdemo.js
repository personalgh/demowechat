// bind event at add new tab
let new_chat_button = document.getElementsByClassName("addChat")[0];
new_chat_button.addEventListener("click", ()=>{
  let this_tab_number = tabs.length + document.getElementsByClassName("tabSelected").length;
  let new_tab = tabs[0].cloneNode(true);
  new_tab.setAttribute("data-id", this_tab_number);
  new_tab.firstElementChild.nextElementSibling.firstElementChild.innerHTML = this_tab_number;
  new_tab.addEventListener("click", (e)=>{tab_selected(e)});
  document.getElementsByClassName("tabs")[0].appendChild(new_tab);
})

// bind event at tab selected or clicked
let tabs = document.getElementsByClassName("tab");
let chat_name = document.getElementsByClassName("chatName")[0];
console.log(chat_name);
let prev_tab = null, this_tab = null;
function tab_selected(e){
  this_tab = e.currentTarget;
  let this_name = e.currentTarget.firstElementChild.nextElementSibling.firstElementChild.innerHTML;
  chat_name.innerHTML = this_name;
  if(prev_tab){
    prev_tab.className="tab";
  }
  this_tab.className=" tabSelected";
  prev_tab = this_tab;
}
for(let i = 0; i < tabs.length; i++){
  tabs[i].addEventListener("click", (e)=>{
    tab_selected(e);
  });
}

// bind event at message sent
let send_button = document.getElementsByClassName("sendButton")[0];
let chat_content = document.getElementsByClassName("chatContent")[0];
let chat_input_box = document.getElementsByClassName("inputBoxDiv")[0].firstElementChild;
function send_message(){
  let this_chat = chat_input_box.value;
  if(!this_chat.length) return;
  let demo_chat_message = document.getElementsByClassName("myMessageBox")[0].cloneNode(true);
  demo_chat_message.firstElementChild.innerHTML = this_chat;
  chat_content.appendChild(demo_chat_message);
  chat_input_box.value='';
  chat_content.scrollTop = chat_content.scrollHeight;
}
send_button.addEventListener("click", (e)=>{
  send_message();
});
let input_area = document.getElementsByClassName("inputArea")[0];
input_area.onkeydown = function(e){
  if(e.keyCode === 13){
    e.preventDefault();
    e.returnValue = false;
    send_message();
    return false;
  }
}
