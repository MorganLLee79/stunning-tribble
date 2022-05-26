//https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts

document.body.style.border = "5px solid red";

/*
let p = document.createElement("p");
p.textContent = "Paragraph added by page script.";
p.setAttribute("id","page-script-para");
document.body.appendChild(p);
//https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
// AKA adjusting DOM/"document object model", general javascript thing
*/

//Get contents of page. Collected as HTML or XML?
//let contents = document.body.innerHTML; //DocumentFragment
//Note: potential attack vector on a site? don't use as host, just as extension?
// const name = "<img src='x' onerror='alert(1)'>";
// el.innerHTML = name; // shows the alert

//HTMLCollection (array) of comments
let comments = document.getElementsByClassName("usertext-body");
/* targeting comments in /r/writingPrompts */
/* Example comment:
<div class="usertext-body may-blank-within md-container ">
    <div class="md">
        <p>I'm putting this into my dnd game. Lol</p>
    </div>
</div>*/

for(let i=0; i<comments.length; i++) {
    let comment = comments[i];
    let innerTextOutput = comment.innerText; //Collect visible elements as string
    let textContentOutput = comment.textContent;


    let innerHTMLOutput = comment.innerHTML;
    //'TEXT<b>' + innerHTMLOutput + '</b>';


    //Find <p></p> contents? or just Essentially
    //Edit text formatting
    let textContentOutput = "<b>" + "<p>TEXT</p>" + "</b>";
}

/*
<div id="divA">This is <span>some</span> text!</div>
let text = document.getElementById('divA').textContent;
// The text variable is now: 'This is some text!'
document.getElementById('divA').textContent = 'This text is different!';
// The HTML for divA is now:
// <div id="divA">This text is different!</div>
//Add <b></b> around first few vowels of words
*/



// define a new property on the window
//window.foo = "This global variable was added by a page script";

// redefine the built-in window.confirm() function
/*
window.confirm = function() {
  alert("The page script has also redefined 'confirm'");
}
*/
