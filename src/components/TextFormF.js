import React, {useState} from 'react';
import NavbarF from './NavbarF';



export default function TextForm(props) {

    const handleUpperClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleLowerClick = () => {
        // console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase()
        setText(newText)
    }

    const handleClearClick = () => {
        // console.log("handleClearClick was clicked" + text);
        let newText = ""
        setText(newText)
    }

    const handleOnChange = (event) => {
        // console.log("handle On Change");
        setText(event.target.value)
    }


    // Function for Sentence case
   const handleSentenceCaseClick = () => {
        if (text !== undefined && text)
            setText(text.charAt(0).toUpperCase() + text.slice(1).toLowerCase())
        else
            alert('Please enter text here');
    }


    //function to handle extra spaces 
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(' '))
    }


    const [text, setText] = useState('')

   /*  const handleRedundancy = ()=> { 
        let set1 = new Set(text.split(" "));          
        let newText = Array.from(set1).join(" ");
        setText(newText);
   }
   // Function is able to eliminate the redundant words from the sentence or para
 */

   /* function firstCap(){
        let newText = text.toLowerCase() 
        let newText2 = newText.charAt(0).toUpperCase() + newText.slice(1);
        setText(newText2)
    } */

/* Updated word count removing space from word counter
    {text?text.split(' ').filter(function(t) {return t!== ''}).length:0}


    Updated minute read 
    {text?Math.ceil(0.008 * text.split(' ').length):0}

    capitalize first word of string(title case)
    const convertToTitlecase = () => {
        setText(text[0].toUpperCase() + text.substring(1).toLowerCase());
    } */


    /* To implement alternating case:
    const onAlternatingCase = () => {
        let newtext = ""
        for (let index = 0; index < text.length; index++) {
            if ((index % 2) == 0) {
                newtext += text[index].toLowerCase()
            }
            else {
                newtext += text[index].toUpperCase()
            }

        }
        setText(newtext)
    }
     */

/* 
    // Function for using calculate with regex validation and made eval usage safe. Thnk u harry vaiya for all // your effort.

    const calc = ()=>{
        let check = /^[^\sa-z_]+$/i
        if (check.test(text)){
            setText(String(eval(text))) // string since trim will give error in case if text not string. eval returns a Number
        }
        else{
            alert("Plz enter valid character")
        }
    } */

/* 
    Function to know which email service you use (Example : Gmail, rediffmail, yahoo, hotmail etc.) And also suggest you an username.
    const handleEmail =()=>{
        let newText=text.split("@");
        let later = newText[1].split(".");
        setText("Your account is on "+ later[0] + " And your username could be" + newText[0]);
    } */


 /*    Reverse the text
const handleReverse = () =>{

        function ReverseString(str) {
  
            if(!str || str.length < 2 || 
                    typeof str!== 'string') {
                return 'Not valid'; 
            }
              
            const revArray = [];
            const length = str.length - 1;
              
            for(let i = length; i >= 0; i--) {
                revArray.push(str[i]);
            }
              
            // Joining the array elements
            return revArray.join('');

        } */

/* 
        count number of sentences:

<p>{text.split(/[".!?"]/).length-1} :No of Sentences</p>
 */


/* Bold text function 
const [newStyle, setnewStyle] = useState({
        fontWeight: '400'
    })
    const bold = ()=>{
        if(newStyle.fontWeight==="400")
        {
            setnewStyle({
                fontWeight: 'bolder'
            })
        }
        else{
            setnewStyle({
                fontWeight: '400'
            })
        }
    } */


//     //conversion  of Title Case
//  const handleTitleClick=()=>{

//     let newText = text.replace(/\w\S*/g, function(t){ return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase(); } );
//     setText(newText);

// }


/* shortest code for copy: 
navigator.clipboard.writeText(text); */

/* 
function to capitalized first letter of every word :


const capitalFirstLetter = () => {
        let tempText = text.split(/[  ]+/);
        let newText="";
        tempText.forEach((e)=>{
            e=e.charAt(0).toUpperCase()+e.slice(1);
            newText=newText+e+" ";
        })
        setText(newText);

    } */


 /*    const vowelCheck = ()=>{
        const count = text.match(/[aeiou]/gi).length;
        setText("You have "+count + " no of vowels");
    } */



   /*  const titleCase = () =>{
  
        let newText = text.split(' ').map( (str)=> {
          return str.replace(str[0], str[0].toUpperCase());
        }).join(' ');
        
        setText(newText);
      
      } */


   /*    const reverseText = () => {
        let newText = text.split('').reverse().join('');
        setText(newText);
    } */


    /* const capitalizeHadler = () => {
        let newText = text
          .toLowerCase()
          .split(' ')
          .map(s => s.charAt(0).toUpperCase() + s.substring(1))
          .join(' ')
    
        setText(newText)
      } */


 /*      function to change font style and colour of a text input

const style1 = {
  fontFamily: "Roboto",
};

const style2 = {
  fontFamily: "Poppins",
  color: "green",
};

const styleHandler = () => {
  if (Style.fontFamily === "Roboto") {
    setStyle(style2);
  } else {
    setStyle(style1);
  }
};

 */
/* 
const handleSentenceCaseClick =()=>{
        
    let newText=text.charAt(0).toUpperCase()+text.slice(1).toLowerCase();
    setText(newText)
} */



 /*    Function to download text as a text file

const download=(filename, text)=>{
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);
  element.style.display = 'none'; document.body.appendChild(element);
  element.click(); document.body.removeChild(element);
} */

/* Adding a functionality that can change first letter of ever text capital.


const handleFisrtLetterCapital  = () => {
Let arr = text.split(" ");
for( let i=0; i < arr.length; i++ )
{
 arr[i] = arr[i].charAt(0).toUpperCase() + are[i].slice(1);
}
setText(arr.join(" "));
} */


/* sir challenge accepted sorry  im alte but here is my function it basically captialize each word of sentence following is my function

const captialText = ()=>{

      let capitalizeText = text.split(' ').map(t => t.charAt(0).toUpperCase() + t.slice(1).toLowerCase()).join(" ");

      setText(capitalizeText)



  }

// button function 

<button className="btn btn-primary mx-3" onClick={captialText}>Captial Text</button>
 */


/* it capitalize the first letter

const handlecapClick = ()=>{
        let capText = text.slice(0,1).toUpperCase() + text.slice(1, text.length)
        setText(capText)
    } */

   /*  this function speaks
const Speak_Baby=()=>{
      var msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
    }
 */

 /*    //To find and replace a word in the whole text
//JS code
const handleFindAndReplace = () =>{
    let find = document.getElementById("find").value;
    let replace = document.getElementById("replace").value;
    let newText = text.replaceAll(find,replace);
    setText(newText);
}

// JSX code 
    <div className="container my-3">
        <h4>Find and Replace the text</h4>
        <input type="text" className="form-control my-2" placeholder="Enter the text you want to change" id="find"/>
        <input type="text" className="form-control mb-2" placeholder="Enter the new text you want to add" id="replace"/>
        <button className="btn btn-primary mb-3 mx-1" onClick={handleFindAndReplace}>Replace</button>
    </div> */

 /*    Check a string is present in the para or not
  const handlepresent = () =>{
   let newtext = prompt();
   alert(text.includes(newtext));

 } */

 /* const handleRESClick = () => {
    let newtext = text.replace(/\s+/g,' ');
    setText(newtext);
  }; */


 /*  //To find and replace a word in the whole text
//JS code
const handleFindAndReplace = () =>{
    let find = document.getElementById("find").value;
    let replace = document.getElementById("replace").value;
    let newText = text.replaceAll(find,replace);
    setText(newText);
}

// {JSX code}
    <div className="container my-3">
        <h4>Find and Replace the text</h4>
        <input type="text" className="form-control my-2" placeholder="Enter the text you want to change" id="find"/>
        <input type="text" className="form-control mb-2" placeholder="Enter the new text you want to add" id="replace"/>
        <button className="btn btn-primary mb-3 mx-1" onClick={handleFindAndReplace}>Replace</button>
    </div> */

   /*  Function for substrings
    const handlesubstrClick=()=>{
            console.log("Clear text was clicked" + text);
            let newText=text.substring(0,4);
            setText(newText)
        } */

      /*   Suggestion to count words properly.(Omitting empty string, omitting  stop sign(.) )

        1)In JSX : <p>{wordCount(text)} words and {text.length} characters.</p>
        2) Creating a function wordCount:
        const wordCount = (value) => {
                return value.replace(/\./g, '')
                    .split(' ')
                    .filter(str => { return str !== '' })
                    .length;
            }; */


           /*  To avoid empty string, new lines, spaces in counting words and char use this

                <p>{text.trim().length } characters</p>
                <p>{text.replace(/\n/g, " ").split(' ').filter(value => value != "").length} words</p>
 */
/* 
                For Remove space  Counting in words 😁
<p>{text.split(/[^\s]+/).length} words, {text.length} characters</p> */


/* 
<p> { text==="" ?0 :text.trim().split(" ").length} words, {text.length} characters</p>
removes extra trailing space */


/* we can do this for remove 1 to at blank string time
and last charactor blank  

const str = text;
    const last = str.charAt(str.length - 1);
    let wordlength = text.split(" ").length;
    if(text.length === 0){
      wordlength = 0;
    }
    else if(last === " "){
      wordlength = (text.split(" ").length) - 1;
    }
    else{
      wordlength = text.split(" ").length;
    }

( <p>{wordlength} Words and {text.length}</p>) */




/* const handleCapitalFirstLetterClick = ()=>{
    let words = text.split(" ")
   let uppercaseword = ''
   if(text.length===0){
    words.forEach(element => {
        uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + " "
     });
   }
    
    setText(uppercaseword)
} */

const handleCopyClick = () => {
    console.log("I am Copy");
    var text = document.getElementById("myTextBox")
    text.select()
    navigator.clipboard.writeText(text.value)
}



  return (
    <>  <NavbarF title="TextUtils" about="About" />
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleOnChange} value={text} id="myTextBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpperClick}>Convert to Upper Case</button>
            <button className="btn btn-primary mx-1" onClick={handleLowerClick}>Convert to Lower Case</button>
            <button className="btn btn-primary mx-1" onClick={handleSentenceCaseClick}>Convert to Sentence Case</button>
            <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-3">
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length - 1} words and {text.length} characters</p> 
            <p>{0.008 * text.split(' ').length} Minutes Required to Read</p> 
            <h2>Preview</h2>
            <p>{text}</p>
        
        </div>
    </>
  );
}
