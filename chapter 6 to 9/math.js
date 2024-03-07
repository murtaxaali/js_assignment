document.write("<CENTER><H2>Chapter6:MATHS Expressions</H2></CENTER>")

document.write(`<H4>question No:1</H4><P>Results:<BR>The value of a is:10<HR><BR>The value of ++a is:11<BR>Now the value of a is:11
 <BR><BR>The value of a++ is:11<BR>Now thw value of a is:12<BR><BR>The value of --a is:11 <BR>Now the value of a is:11
 <BR><BR>The value of a-- is:11<BR>Now the value of a is:10</P>`)

 document.write("<BR><H4>Question No:2</h4>")

var a=2; b=2;
document.write(`<BR>
--a;${--a}
<BR>--a - --b;${--a - --b}
<BR>--a - --b + ++b;${--a - --b + ++b}
<BR>--a - --b + ++b + b--;${--a - --b + ++b + b--}`)

document.write("<BR><H4>Question No:3</H4>")
var name= prompt("Input your name")
alert(`salam aleikum ${name}`)
document.write(`<BR>Salam Aleikum ${name}`)

document.write("<BR><H4>Question No:5</H4>")
var userinput= +prompt("enter any number to print table ")
if (userinput>=0){
document.write("<H4>Tables</H4>")
document.write(`<H4>${userinput}x1=${userinput*1}<H4>`)
document.write(`<H4>${userinput}x2=${userinput*2}<H4>`)
document.write(`<H4>${userinput}x3=${userinput*3}<H4>`)
document.write(`<H4>${userinput}x4=${userinput*4}<H4>`)
document.write(`<H4>${userinput}x5=${userinput*5}<H4>`)
document.write(`<H4>${userinput}x6=${userinput*6}<H4>`)
document.write(`<H4>${userinput}x7=${userinput*7}<H4>`)
document.write(`<H4>${userinput}x8=${userinput*8}<H4>`)
document.write(`<H4>${userinput}x9=${userinput*9}<H4>`)
document.write(`<H4>${userinput}x10=${userinput*10}<H4>`)}
else{document.write("<H4>Tables</H4>")
document.write(`<H4>${5}x1=${5*1}<H4>`)
document.write(`<H4>${5}x2=${5*2}<H4>`)
document.write(`<H4>${5}x3=${5*3}<H4>`)
document.write(`<H4>${5}x4=${5*4}<H4>`)
document.write(`<H4>${5}x5=${5*5}<H4>`)
document.write(`<H4>${5}x6=${5*6}<H4>`)
document.write(`<H4>${5}x7=${5*7}<H4>`)
document.write(`<H4>${5}x8=${5*8}<H4>`)
document.write(`<H4>${5}x9=${5*9}<H4>`)
document.write(`<H4>${5}x10=${5*10}<H4>`)
}

document.write("<BR><H4>Question no:6</H4>")

var englishobt=+prompt("enter your english marks")
var mathsobt=+prompt("enter your maths marks")
var urduobt=+prompt("enter your urdu marks")
var english=("English")
var maths=("Maths")
var urdu=("Urdu")
var engMarks=(100)
var MathMark=(100) 
var Urdumark=(100)
var totalMarks=(100+100+100)

var obttotal=(englishobt+mathsobt+urduobt)
document.write(`<BR><B>Subjects Total marks Obtained marks percentage </B>`)
document.write(`<BR><BR> ENGLISH 100 ${englishobt}, ${englishobt}%`)
document.write(`<BR> MATHS 100 ${mathsobt}, ${mathsobt}%`)
document.write(`<BR> URDU 100 ${urduobt}, ${urduobt}%`)
document.write(`<BR>Total ${totalMarks}, ${obttotal} ,${obttotal/totalMarks*100}%`)








































