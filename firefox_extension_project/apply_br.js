//https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts

//document.body.style.border = "5px solid red";

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

//param: Take in HTML string
//returns: HTML string w/ bolding in correct spots
function applyBrToWord(innerHTML) {

  let words = innerHTML.split(" ");
  let result = ""; //Assuming not referentially connected still

  //find all spaces, if it's displayed text then add <b></b>
  //Go through all words
  let inTag = 0; //Track layers of tag currentWord involves
  const focus = 3;
  for (let i=0; i<words.length; i++) {
      let currentWord = words[i];

      //Confirm it's not formatting html?
      /*if(currentWord.includes("<")) {
        //Move forward to after tag is closed
        inTag += (currentWord.match(/</g || []).length;
      }
      if(currentWord.includes(">")) {
        inTag -= (currentWord.match(/>/g || []).length;
    }*/

      if(inTag == 0) {
        if(currentWord.length > focus) {
          currentWord = "<b>" + currentWord.substring(0, focus) +
                        "</b>" + currentWord.substring(focus);
        } else {
          currentWord = "<b>" + currentWord + "</b>";
        }
      }

      result += currentWord + " ";
  }

  //Add length handling later
  wordHTML = "<b>" + word + "</b>";
  //Avoid punctuation, start at first letter, bound by max size of word/letters count
  return wordHTML;
};
//Edit HTML, use regex to account for tags?
//https://stackoverflow.com/questions/56743154/using-javascript-to-format-an-html-string-to-display-properly

function fn3(inputString) {
    //alert("TESTTEST");
    return "fn3" + inputString;
};

function recursionSurvey(activeElement) {
  let nodeList = activeElement.children; //returns elements
  if(activeElement.children.length == 0) {
      return "0 ";
  }

  let text = activeElement.children.length + "[";

  for (let i = 0; i < nodeList.length; i++) {
    let currentElement = nodeList[i];
    text += recursionSurvey(currentElement);
    /*
    //If it's a valid text segment ?? != script?
    if(currentElement.nodeName == "P") {
      text += nodeList[i].textContent + nodeList[i].children.length + "<br>";

      //If further child nodes, recurse down
      if(nodeList[i].children.length > 0) {
      	text += nodeList[i].children[0].textContent + nodeList[i].children.length + "<br>";
        applyBrToElementChildren(nodeList[i]);
      }
  }*/
  }
  //document.getElementById("demo").innerHTML = text;
  return text + "] ";
};

function applyBrToElementChildren(activeElement) {
  let nodeList = activeElement.children; //returns elements
  if(activeElement.children.length == 0) {
      return "|";
  }

  let text = " [" + activeElement.children.length;

  for (let i = 0; i < nodeList.length; i++) {
    let currentElement = nodeList[i];
    text += applyBrToElementChildren(currentElement);
    /*
    //If it's a valid text segment ?? != script?
    if(currentElement.nodeName == "P") {
      text += nodeList[i].textContent + nodeList[i].children.length + "<br>";

      //If further child nodes, recurse down
      if(nodeList[i].children.length > 0) {
      	text += nodeList[i].children[0].textContent + nodeList[i].children.length + "<br>";
        applyBrToElementChildren(nodeList[i]);
      }
  }*/
  }
  //document.getElementById("demo").innerHTML = text;
  return text + "] ";
};
