let dark = document.getElementsByClassName("darkmode");
let menu = document.getElementsByClassName("menuicon");
let content = document.getElementsByClassName("content")
let main = document.getElementsByClassName("main")
let card = document.getElementsByClassName("card")
let twitterlogo = document.getElementsByClassName("twitter")
let contact = document.getElementById("Contact")
let form = document.getElementsByClassName("form")
let borderline = document.getElementsByClassName("borderline")
let bubble = document.getElementsByClassName("bubble7")
let bubble1 = document.getElementsByClassName("bubble8")



dark[0].addEventListener("click",()=>{
    menu[0].classList.toggle("dark-mode");
    dark[0].classList.toggle("dark-mode");
    content[0].classList.toggle("contentdark");
    document.body.classList.toggle("bgblack");
    main[0].classList.toggle("mainbg");
    card[0].classList.toggle("cardshadow");
    twitterlogo[0].classList.toggle("twitterlogo")
})

contact.addEventListener("click",()=>{
   if(form[0].style.display==='none'){
    form[0].style.display = 'flex';
    borderline[0].style.display = 'none';
    content[0].style.display = 'none';
    bubble[0].style.display = 'none';
    bubble1[0].style.display = 'none';
   }
   else{
    form[0].style.display = 'none';
    borderline[0].style.display = 'flex';
    content[0].style.display = 'flex';
    bubble[0].style.display = 'flex';
    bubble1[0].style.display = 'flex';
   }
})


