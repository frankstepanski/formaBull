(()=>{"use strict";var e,r,t,i={933:e=>{e.exports=require("electron")}},n={};r=(e=function e(r){if(n[r])return n[r].exports;var t=n[r]={exports:{}};return i[r](t,t.exports,e),t.exports}(933)).app,t=e.BrowserWindow,r.on("ready",(function(){var e=new t({width:1024,height:768});e.setMenuBarVisibility(!1),e.loadFile("index.html")}))})();