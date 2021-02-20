let shouldCheck = false;
window.onload = function () {
    chrome.storage.sync.get(['active_domains'], function (result) {
        const domain = window.location.host;
        if (result && result.active_domains && result.active_domains.indexOf(domain) !== -1) {
            //enable grammarly for ghost
            shouldCheck = true;
        }
    })
}

 document.addEventListener('focusin', function (e) {
    if(shouldCheck && e.target){
        if (e.target.hasAttribute('data-gramm')) {
            enableGrammarly(e.target);
        } else if (e.target.hasAttribute('data-koenig-dnd-droppable')) {
            //get the parent that has the data-gramm attribute
            const editors = document.querySelectorAll('[data-gramm]');
            if (editors.length) {
                //remove the attribute for all editors
                for (let i = 0; i < editors.length; i++) {
                    enableGrammarly(editors[i]);
                }
            }
        }
     }
 });

 function enableGrammarly (element) {
     //check the element's dimensions, since grammerly only
     //works with elements with the following conditions:
     //element.clientWidth > 301 && element.clientHeight > 38
     if (element.clientWidth <= 301 || element.clientHeight <= 38) {
        if (element.clientWidth < 301) {
            element.style.minWidth = '302px';
        }
        if (element.clientHeight < 38) {
            element.style.minHeight = '39px';
        }
     }
     element.removeAttribute('data-gramm');
     //this is to retrigger grammarly
     element.blur();
     element.focus();
 }