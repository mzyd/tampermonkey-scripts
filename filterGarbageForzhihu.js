// ==UserScript==
// @name         Filter Garbage For zhihu
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.zhihu.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=zhihu.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    let curPos = 0

    setTimeout(() => {
        filterGarbage()
    }, 2000)

    window.addEventListener('scroll', function() {
        const verticalScrollPosition = window.scrollY || window.pageYOffset;
        if (verticalScrollPosition - curPos > 220) {
            curPos = verticalScrollPosition
            filterGarbage()
        }
    })

    function filterGarbage() {
        console.log('*****filterGarbage****')
        const list = document.querySelectorAll(".TopstoryItem-isRecommend")
        const keywords = ['脱发', '黑头', 'XC90', 'SUV', '种植牙', '护眼灯', '装修', '耳机', '戴森']
        list.forEach(item => {
            const elems = keywords.filter(k => item.innerHTML.includes(k))
            if (elems.length > 0) {
                console.log("These cards will be removing ...", elems)
                item.parentNode.removeChild(item)
            }
        })
    }

})();
