var days_html = document.getElementById('days')
var hours_html = document.getElementById('hours')
var mins_html = document.getElementById('mins')
var seconds_html = document.getElementById('seconds')
var now = new Date()
var baqraEid = new Date('6/17/2024')
var diff= baqraEid.getTime() - now.getTime()
var interval = setInterval(function(){
diff = diff - 1000
var days= diff/1000/60/60/24
var hours =diff/1000/60/60
var mins= diff/1000/60
var seconds =diff/1000
days_html.innerText = Math.floor(days)

hours_html.innerText =":"+Math.floor(hours)

mins_html.innerText =":"+Math.floor(mins)

seconds_html.innerText =":"+ Math.floor(seconds)

},1000 )