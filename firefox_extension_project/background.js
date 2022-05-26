
browser.contextMenus.create({
    id: "apply_br",
    title: "test: Apply BR"
});

browser.contextMenus.onClicked.addListerner(function(info, tab) {
    if(info.menuItemId == "apply_br") {
        browser.tabs.executeScript({
            file: "apply_br.js"
        });
    }
});
