// ==UserScript==
// @name         SatchelOne Title Changer
// @namespace    http://choudry.org
// @version      0.0.1
// @description  changes the title of SatchelOne tabs to reflect actual title
// @author       You
// @match        https://*.satchelone.com/*
// @icon         https://d3acmx713t44o3.cloudfront.net/images/favicon-d8c2d8ccfb6986c7a5177290b9688b5b.ico
// @grant        none
// ==/UserScript==

(async function() {
    'use strict';
    const sleep = (ms) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(), ms);
        })
    }

    const changeTitle = async () => {
        await sleep(500);
        document.title = document.querySelector(".main-header-title").innerText;
    }
    // Your code here...
    document.addEventListener('click', changeTitle);

    window.addEventListener('load', changeTitle);
})();
