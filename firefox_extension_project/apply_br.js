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

//
function applyBrToWord(wordHTML) {
    //Add length handling later
    wordHTML = "<b>" + word + "</b>";
    //Avoid punctuation, start at first letter, bound by max size of word/letters count
    return wordHTML;
}

//HTMLCollection (array) of comments
let comments = document.getElementsByClassName("usertext-body");
/* targeting comments in /r/writingPrompts */
/* Example comment:
<div class="usertext-body may-blank-within md-container ">
    <div class="md">
        <p>I'm putting this into my dnd game. Lol</p>
    </div>
</div>
class names: commentarea; entry; usertext; usertext-body; md?
*/

for(let i=0; i<comments.length; i++) {
    //Get all child nodes' NodeList
    let comment = comments[i].getElementsByClassName("md")[0]; //select div
    let innerTextOutput = comment.innerText; //Collect visible elements as string
    let textContentOutput = comment.textContent; //String w/ tags, style
    /*
<p id="source">
  <style>#source { color: red;  } #text { text-transform: uppercase; }</style>
<span id=text>Take a look at<br>how this text<br>is interpreted
       below.</span>
  <span style="display:none">HIDDEN TEXT</span>
</p>
    ...

  #source { color: red;  } #text { text-transform: uppercase; }
Take a look athow this textis interpreted
       below.
  HIDDEN TEXT
  - "athow...textis" -> <br> excluded
    */

    //let innerHTMLOutput = comment.innerHTML
    //innerHTMLOutput = 'TEXT<b>' + innerHTMLOutput + '</b>'; //Insert <b> </b> into words
    //go through html, add <b> accordingly
    /*
    <ul id="list">
      <li><a href="#">Item 1</a></li>
      <li><a href="#">Item 2</a></li>
      <li><a href="#">Item 3</a></li>
    </ul>
    ...
    const list = document.getElementById("list");
    list.innerHTML += `<li><a href="#">Item ${list.children.length + 1}</a></li>`;
    //Treat like string?
    ///Also, use element.setHTML() https://developer.mozilla.org/en-US/docs/Web/API/Element/setHTML
    */


    //Get nodes' innerHTML for updating
    let children = comment.childNodes;
    for(let j=0; j<comment.childNodes.length;j++){
        //Consider swapping to recursive function b/c child nodes?

        let innerHTMLText = comment.childNodes[j].innerHTML;

        //console.log(typeof elements[i].innerHTML);
        if(typeof innerHTMLText = 'string') {
        	console.log(innerHTMLText.split(" "));

            let splitVals = innerHTMLText.split(" ");
            let result = ""; //Assuming not referentially connected still
            //find all spaces, if it's displayed text then add <b></b>
            //Go through all words
            for (let k=0; k<splitVals.length; k++) {
                let currentWord = splitVals[k];
                //result += "<b>" + currentWord + "</b>";
                result += applyBrToWord(currentWord)
                //Avoid putting in <div>? How? if prev+next != "<" + ... + ">"?
            }

            comment.childNodes[j].innerHTML = result;
        }
    }
    //Split w/ js string functions
        //Find <p></p> contents, words preceded by space
        //https://www.w3schools.com/js/js_htmldom_elements.asp
    //Edit text formatting; For word
        //pass substring to applyBrToWord subfunction, update html
        let textContentOutput = "<b>" + "<p>TEXT</p>" + "</b>";
}

/*
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTMLDOM</h2>
<p id="bodyText">
<div class="userText"><div class="md">Displaying document bodytestsete</div><p>zxcasd</p><div class="md">AB<p>FDD</p>SCCS</div></div>
</p>

<p id="demo"></p>

<script>
let elements= document.getElementsByClassName("userText")[0].childNodes;
let element = elements[1];
let innerHTMLtext = element.innerHTML;
//let spaceSplit = innerHTMLtext.split(" ");
let result = "AAAA";//"M<p>[0]" + spaceSplit[0] + "[0]<b>[1]" + spaceSplit[1] + "[1]</b></p>M";

console.log("TEST");
console.log(elements);
//nsole.log(element[0].childNodes[1]);
for(let i=0; i<elements.length;i++){
	//console.log(typeof elements[i].innerHTML);
	console.log(elements[i].innerHTML.split(" "));
}
//console.log("-" + element.textContent);
console.log("TEST");

document.getElementById("demo").innerHTML = result;
</script>

</body>
</html>

*/

/*
<div id="divA">This is <span>some</span> text!</div>
let text = document.getElementById('divA').textContent;
// The text variable is now: 'This is some text!'
document.getElementById('divA').textContent = 'This text is different!';
// The HTML for divA is now:
// <div id="divA">This text is different!</div>
//Add <b></b> around first few vowels of words
// use document.getElementsByClassName() to get collection, byID to get specific
*/



// define a new property on the window
//window.foo = "This global variable was added by a page script";

// redefine the built-in window.confirm() function
/*
window.confirm = function() {
  alert("The page script has also redefined 'confirm'");
}
*/
