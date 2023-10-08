// ==UserScript==
// @name         page
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://jandan.net/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=jandan.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var nextPage = document.getElementsByClassName('previous-comment-page')[0]
    $(document).keydown(function(event){
        //        console.log('event code', event.keyCode)
        if(event.keyCode == 13){
            nextPage.click()
        }
    });

    // trigger all gif click
    let timer = setTimeout(() => {
        let elems = document.getElementsByClassName('gif-mask')
        for (let k in elems) {
            const cur = elems[k]
            if (cur.click) cur.click();
        }
        clearTimeout(timer)
        timer = null
    }, 500)

    })();
