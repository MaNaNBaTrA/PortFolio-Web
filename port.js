let dark = document.getElementsByClassName("darkmode");
let menu = document.getElementsByClassName("menuicon");
let content = document.getElementsByClassName("content")
let main = document.getElementsByClassName("main")
let card = document.getElementsByClassName("card")
let twitterlogo = document.getElementsByClassName("twitter")
let contact = document.getElementById("Contact")
let form = document.getElementsByClassName("form")

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
   if(form[0].style.display==='block'){
    form[0].style.display = 'none';
   }
   else{
    form[0].style.display = 'block';
   }
})


