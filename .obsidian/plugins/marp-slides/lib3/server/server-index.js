!function(){"use strict";const e="marp-cli-show-all";!function(){const t=document.getElementById("show-all"),s=document.getElementById("index"),c=c=>{t.checked=c,s.classList.toggle("show-all",c);try{sessionStorage.setItem(e,c?"1":"")}catch(e){console.error(e)}};c(!!sessionStorage.getItem(e)),t.addEventListener("change",(()=>c(t.checked)))}()}();