// ==UserScript==
// @name         PlaceTUD Overlay
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Overlay for PlaceTUD
// @author       forked of oralekin (stoatified by Jeck0_0)
// @match        https://hot-potato.reddit.com/embed*
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            if (!Date.now) {
                Date.now = function() { return new Date().getTime(); }
            }
            const i = document.createElement("img");
            i.src = "https://cdn.discordapp.com/attachments/960311022911123527/960311158785585242/overlay.png";
            i.style = "position: absolute;left: 0;top: 0px;image-rendering: pixelated;width: 2000px;height: 2000px;";
            i.id = "mcss-overlay"
            i.setAttribute("vis",1)
            console.log(i);
            return i;
        })())

            document.getElementsByTagName("body")[0].appendChild(
        (function () {
            const i = document.createElement("button");
            i.style = "position: fixed;left: 10px; background: #fff; top: 50%;width: 50px;height: 50px;";
            i.innerHTML = "T"
            i.onclick = function() {
                const img = document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.querySelector("#mcss-overlay")
                if (img.getAttribute("vis") == "1") {
                    img.setAttribute("vis",0)
                    img.style.opacity  = 0
                } else {

                    img.setAttribute("vis",1)
                    img.style.opacity  = 1
                }
            }
            console.log(i);
            return i;
        })())

    }, false);

}

