const inputElm = document.getElementById('active'),
      toggleBtnElm = document.getElementById('toggleBtn'),
      fieldElm = document.querySelector('.field'),
      promptLabelElm = document.getElementById('promptLabel');

let domain = "";

//get current domain 
chrome.tabs.query({active: true, lastFocusedWindow: true}, function (tabs) {
    if (tabs.length && tabs[0].url) {
        const url = new URL(tabs[0].url);
        domain = url.host;

        //get if it's active
        chrome.storage.sync.get(['active_domains'], function (result) {

            if (!result || !result.active_domains || result.active_domains.indexOf(domain) === -1) {
                toggleBtnElm.classList.add('toggle-off-btn');
                toggleBtnElm.classList.remove('toggle-on-btn');
                promptLabelElm.innerText = 'Enable?';
            } else {
                toggleBtnElm.classList.add('toggle-on-btn');
                toggleBtnElm.classList.remove('toggle-off-btn');
                promptLabelElm.innerText = 'Enabled';
            }
        
            enableField();
        });
    }
})

toggleBtnElm.addEventListener('click', function (event) {
    disableField();
    chrome.storage.sync.get(['active_domains'], function (result) { 
        if (!result || !result.active_domains) {
            result.active_domains = []; //initital value
        }

        const i = result.active_domains.indexOf(domain);

        if (i === -1) {
            result.active_domains.push(domain);
        } else {
            result.active_domains.splice(i, 1);
        }

        chrome.storage.sync.set({active_domains: result.active_domains}, function () {
            toggleBtnElm.classList.toggle('toggle-on-btn');
            toggleBtnElm.classList.toggle('toggle-off-btn');
            if (i === -1) {
                promptLabelElm.innerText = 'Enabled';
            } else {
                promptLabelElm.innerText = 'Enable?';
            }
            fieldElm.parentNode.insertBefore(createMessage(), fieldElm.nextSibling);
            enableField();
        });
    });
});

function disableField () {
    fieldElm.classList.add('disable');
}

function enableField () {
    fieldElm.classList.remove('disable');
}

function createMessage () {
    const prevMessage = document.querySelector('.message');
    if (prevMessage) {
        prevMessage.remove();
    }
    const message = document.createElement('p');
    message.innerText = 'Please refresh the page.';
    message.classList.add('message');
    return message;
}