// The script is for firefox's bookmarks-clean-up extension.
// to use it:
// Open Bookmarks clean up page
// Click the 'Find duplicated bookmarks' button
// F12 - open your console
// Put this code in your console and then enter the enter key
function removeDuplicateElements(elems) {
    const uniqueInnerHTMLs = {};
    for (let i = 0; i < elems.length; i++) {
        const element = elems[i];
        const innerHTML = element.innerHTML;
        if (uniqueInnerHTMLs[innerHTML]) {
            element.getElementsByClassName('custom-control-input')[0].click()
        } else {
            uniqueInnerHTMLs[innerHTML] = element
        }
    }
}

const elems = Array.from(document.querySelectorAll('.custom-control'))
removeDuplicateElements(elems)
