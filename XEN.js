// ==UserScript==
// @name         XEN
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  I made this so I can make the website look as I intend it to.
// @author       Anonymous (M)
// @match        https://www.kogama.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=kogama.com
// @grant        none
// ==/UserScript==

const style = document.createElement('style');
style.type = 'text/css';

const css = `
  body {
  background : url('https://w0.peakpx.com/wallpaper/229/425/HD-wallpaper-space-black-aesthetic-space.jpg') !important; /*DISPLAY ON TOP*/
  background-repeat: no-repeat !important;
  background-attachment: fixed !important;
  background-size: cover !important;
  }

.css-1udp1s3, .css-zslu1c, ._1RMYS, .css-x84yyj, .css-b0qydj , ._1q4mD ._1sUGu ._1u05O, .css-1rbdj9p, ._3TORb, ._3i_24, .css-1n00yj3, #root-page-mobile #content #content-container #main-content, .css-1clyn5x, #root-page-mobile #content #content-container {
   background-color : transparent !important;
   backdrop-filter: blur(5px);
}

._13UrL ._23KvS ._33DXe{
   background-image : none !important;
}

._3TORb{
   transform : none !important; /*DO NOT CHANGE*/
    width : 30px;
    opacity : 0;
    transition : 1s !important;
}

._3TORb:hover{
   width : 260px;
   opacity : 1;
   transition : 1s !important;
}

.css-9la3qa, .css-16fidy5, .css-rqc8s9, .css-qr6c39, a.MuiButton-root, .css-cisn0m, .css-1vyp3ps{
   background: #212121 !important;
   color: #fff !important;
}

.css-9la3qa:hover, .css-16fidy5:hover, .css-rqc8s9:hover, .css-qr6c39:hover, a.MuiButton-root:hover, .css-cisn0m:hover, .css-1vyp3ps:hover {
   background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.2)) !important;
   border: 1px solid rgba(255, 255, 255, 0.2) !important;
   box-shadow: 0 4px 10px rgba(255, 255, 255, 0.1) !important;
   color: #fff !important;
   text-shadow: 0 0 5px rgba(255, 255, 255, 0.5) !important;
   transition : 1s;
}

._1iWPR .eq7_m._1mOOB, ._35ABf .SB7oy, ._35ABf ._30nde{
   display: none !important;
}

a:hover, .css-1i2fcqj:hover{
  color : #ff8a00 !important;
  transition : 1s !important;
  text-shadow: -0px 0px 10px #ff9954;
  background : transparent !important;
}

p, div, h1, h2, h3, h4{
   font-family : system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

._13UrL ._23KvS ._25Vmr ._2IqY6 h1{
    display: flex ;
    justify-content: center;
}

._1q4mD ._1sUGu ._2Jlgl a img:hover{
animation: spin 2.5s ease-in;
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@keyframes spin {
    100% {
        transform: rotate(360deg);
    }
}

`;

style.innerHTML = css;

document.head.appendChild(style);

(function() {
    window.onload = function() {
        let logo = document.querySelector('img[alt="KoGaMa"]');

        if (logo) {
            logo.src = "https://art.pixilart.com/44e1d381b27773e.gif"; /*NAVIGATION BAR ICON*/
        }
    };
})();