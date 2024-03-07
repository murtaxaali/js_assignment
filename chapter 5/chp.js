document.write("<CENTER><H1>java script CHAPTER 5 And 6</H1></center>")
document.write("<HR>")
document.write("<center><h2>CHAPTER 5 (MATH EXPRESSIONS) </h2></center>")
var sum=(3+5)
var Is=("sum of 3and 5 is")
document.write(" <P>1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.</P>")
document.write(Is+sum)
document.write("<P></p>")
document.write("<P>2. Repeat task1 for subtraction, multiplication, division &modulus.</p>")
var a=(40)
var b=(4)
var c=(40-4)
var line=("subtraction 40 and 4 is")
document.write( "<BR>"+line+c)
document.write("<BR>multiplication of 40 and 4 is"+ a*b)
document.write("<BR>division of 40 and 4 is"+ a/b)
document.write("<br>modulus of 40 and 4 is"+ a%b)
document.write("<BR><BR>3. Do the following using JS Mathematic Expressions")
document.write("<BR>a. Declare a variable.")
var value=(15)
document.write("<BR>b. Show the value of variable in your browser like “Value after variable declaration is: ??”.")
document.write("<BR>value after variable declaration is"+ value)
document.write("<BR>c. Initialize the variable with some numberd. <BR> d.Show the value of variable in your browser like “Initialvalue: ?”.")
var NumbeRVariable=(18)
document.write("<BR>initial value:"+NumbeRVariable)
document.write("<BR>e. Increment the variable.<BR>f. Show the value of variable in your browser like “Valueafter increment is: 6”.")
document.write("<BR>value after increment is :"+ ++NumbeRVariable)
document.write ("<BR>g. Add 7 to the variable.<BR>h. Show the value of variable in your browser like “Value")
NumbeRVariable=(18 +7)
document.write("<BR> value after adition is :"+ NumbeRVariable)
document.write("<BR>i. Decrement the variable.<BR>j. Show the value of variable in your browser like “Valueafter decrement is: 12”.")
document.write("<BR>value after decrement is :"+  --NumbeRVariable)
document.write ("<BR>k. Show the remainder after dividing the variable’s valueby 3.<BR>l. Output : “The remainder is : 0”.")
document .write ("<BR>OUTput the remainde is :"+ --NumbeRVariable/3 )
document.write("<BR><BR>4. Cost of one movie ticket is 600 PKR. Write a script tostore ticket price in a variable & calculate the cost of buying 5tickets to a movie. Example output:")
var onemovieticket=("600")
var quantityofmovietickets=("5")
document.write("<BR>Total cost to buy 5 movie ticket is "+ onemovieticket*quantityofmovietickets +"PKR" )
document.write("<BR><BR>5. Write a script to display multiplication table of any number in your browser. E.g")
var userinput=prompt("enter any number to print table")
document.write("Tables")
document.write(`<H4>${userinput}x1=${userinput*1}<H4>`)
document.write(`<H4>${userinput}x2=${userinput*2}<H4>`)
document.write(`<H4>${userinput}x3=${userinput*3}<H4>`)
document.write(`<H4>${userinput}x4=${userinput*4}<H4>`)
document.write(`<H4>${userinput}x5=${userinput*5}<H4>`)
document.write(`<H4>${userinput}x6=${userinput*6}<H4>`)
document.write(`<H4>${userinput}x7=${userinput*7}<H4>`)
document.write(`<H4>${userinput}x8=${userinput*8}<H4>`)
document.write(`<H4>${userinput}x9=${userinput*9}<H4>`)
document.write(`<H4>${userinput}x10=${userinput*10}<H4>`)

document.write("<BR><BR>7. Write a program to implement checkout process of ahopping cart system for an e-commerce website. Storethe following in variables<BR>a. Price of item 1<BR>b. Price of item 2<BR>c. Ordered quantity of item 1<BR>d. Ordered Quantity of item 2<BR>e. Shipping charges<BR>Compute the total cost & show the receipt in your browser")
var priceitem=(600)
var price2item=(100)
var quatityitem=(3)
var quantity2item=(7)
var shippingcharges=(100)
document.write(`<H5>Price of item 1=${priceitem}</H5>`)
document.write(`<H5>Ordered quantity of item 1 is ${quatityitem}</H5>`)
document.write(`<H5>Price of item 2=${price2item}</H5>`)
document.write(`<H5>Ordered Quantity of item 2 is 7</H5>`)
document.write(`<H5>Shipping charges=${shippingcharges}</H5>`)
document.write(`<BR><H5>Total Cost Of Your Order=${priceitem*quatityitem+price2item*quantity2item+shippingcharges}</H5>`)

document.write("<BR><BR>8. Store total marks & marks obtained by a student in 2variables. Compute the percentage & show the result inyour browser")
var totalmark=(650)
var obtainedmarks=(480)
document.write(`<BR>Total Marks:${totalmark}<BR>Obtained Marks:${obtainedmarks}<BR>Percentage:${obtainedmarks/totalmark*100}`)

document.write(`<BR><BR>9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
script to convert the total currency to Pakistani Rupees.
Perform all calculations in a single expression.
(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
and 1 Saudi Riyal = 28 Pakistani Rupee)`)
var $pkr=(104.80)
 var pkr=(28)
document.write(`<BR>Total currency in PKR is:${$pkr*10+pkr*25}`)























