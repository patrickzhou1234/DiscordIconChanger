// ==UserScript==
// @name         DiscordIconChanger
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://discord.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=discord.com
// @grant        none
// ==/UserScript==

setTimeout(() => {
var injectHTML = '<img src="/assets/a0e8219e310053130cba.webp" width="48" alt="App Icon" draggable="false"></div>';
document.querySelectorAll("foreignobject")[0].childNodes[0].childNodes[0].innerHTML=injectHTML;
}, 5000);
