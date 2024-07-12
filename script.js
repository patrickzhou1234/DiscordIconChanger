// ==UserScript==
// @name         DiscordIconChanger
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://discord.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=discord.com
// @require      https://cdn.jsdelivr.net/npm/sweetalert2@11.6.16/dist/sweetalert2.all.min.js
// @grant        GM_addStyle
// ==/UserScript==

/* global Swal */

setInterval(() => {
    document.querySelectorAll("div").forEach((el) => {
        if (el.className.includes("appIconSelectionContainer")) {
            el.onclick = (event) => {
                var injectHTML =
                    '<img src="' +
                    event.target.childNodes[0].childNodes[0].src +
                    '" width="48" alt="App Icon" draggable="false"></div>';
                document.querySelectorAll(
                    "foreignobject",
                )[0].childNodes[0].childNodes[0].innerHTML = injectHTML;
                Swal.fire({
                    title: "Icon Changed!",
                    text:
                        "Icon changed to " +
                        event.target.childNodes[0].getAttribute("aria-label"),
                    icon: "success",
                    background: "black",
                    color: "white",
                });
            };
            el.style.cursor = "pointer";
        }
    });
}, 500);
