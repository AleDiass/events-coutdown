const bg = document.getElementById("imgbackground")
const title = document.getElementById("event-name")
const btnNY = document.getElementById("btnNY") 
const btnES = document.getElementById("btnES")
const btnCH = document.getElementById("btnCH")


//
const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')




//
let StartNY;
let StartES;
let StartCH;



function App(event){
	

	// Change Bg Image

	bg.style.background = `url(./imgs/${event}.jpg) bottom`
	bg.position = 'relative'
	
	

	

	// Change Timer //  Title
	if(event ==='NY'){
		title.innerText = 'New Year Countdown'

		StartNY = setInterval(Newyear,1000)		

		clearInterval(StartES)
		clearInterval(StartCH)

		// Disable Button
		ButtonStyleAdd(btnNY)

		//Enable Buttons
		ButtonStyleRemove(btnES,btnCH)



	}
	else if(event ==='ES'){
		title.innerText = 'Easter Countdown'
			
		
		StartES = setInterval(Easter,1000)	
		clearInterval(StartNY)
		clearInterval(StartCH)

		//Disable Button
		ButtonStyleAdd(btnES)
		
		//Enable Buttons
		ButtonStyleRemove(btnNY,btnCH)

	}
	else if(event === 'CH'){
		title.innerText = 'Christmas Countdown'

		
		
		StartCH = setInterval(Chrism,1000)	
	
		clearInterval(StartNY)
		clearInterval(StartES)
		
		// Disable Button		
		ButtonStyleAdd(btnCH)

		
		//Enable Buttons
		ButtonStyleRemove(btnNY,btnES)


	}


}





function ButtonStyleAdd(button){
	button.disabled = true
	button.style.opacity = '0.4'
	button.style.cursor = 'default'
	button.style.border = '1px white solid'
}

function ButtonStyleRemove(button1,button2){
	button1.disabled = false
	button1.style.opacity = '1'
	button1.style.cursor = 'pointer'
	button1.style.border = '1px black solid'

	button2.disabled = false
	button2.style.opacity = '1'
	button2.style.cursor = 'pointer'
	button2.style.border = '1px black solid'
}









function Newyear(){

	//Convert Time Countdown
	let	AtualN = new Date()
	
	let NY_Base = new Date(AtualN.getFullYear()+1,00,01)
	
	let NY_Diff = 		(AtualN.getTime()- NY_Base.getTime()) / 1000
	
	let NY_daysDiff =		   NY_Diff / (3600*24)
	
	let NY_HoursDiff = 		  (NY_daysDiff*24)%24

	let NY_minDiff =	 	  (NY_HoursDiff*60)%60
	
	let NY_secDiff =		  (NY_minDiff*60)%60
	
	//Insert Values
	days.innerText = Math.abs(Math.ceil(NY_daysDiff))
	hours.innerText = Math.abs(Math.ceil(NY_HoursDiff))
	minutes.innerText = Math.abs(Math.ceil(NY_minDiff))
	seconds.innerText = Math.abs(Math.ceil(NY_secDiff))
	
	CheckValue()
	
}


function Easter(){
	
	let AtualE = new Date()


	let ES_Base = new Date(AtualE.getFullYear(),03,04)



	if(AtualE.getTime() >ES_Base.getTime() ){
		ES_Base.setFullYear(AtualE.getFullYear()+1)
	}

	
	//Convert Time Countdown	

	let ES_Diff = (AtualE.getTime() - ES_Base.getTime()) / 1000
	
	let ES_daysDiff = ES_Diff / (3600*24)
	
	let ES_HoursDiff = (ES_daysDiff*24)%24
	
	let ES_minDiff =  (ES_HoursDiff*60)%60
	
	let ES_secDiff = (ES_minDiff*60)%60
	


	//Insert Values
	days.innerText = Math.abs(Math.ceil(ES_daysDiff))
	hours.innerText = Math.abs(Math.ceil(ES_HoursDiff))
	minutes.innerText = Math.abs(Math.ceil(ES_minDiff))
	seconds.innerText = Math.abs(Math.ceil(ES_secDiff))

	
	

	
	CheckValue()

}




function Chrism(){
	let AtualC = new Date()

	let CH_Base = new Date(AtualC.getFullYear(),11,25)
	
	if(AtualC.getTime() > CH_Base.getTime()){
		
		CH_Base.setFullYear(CH_Base.getFullYear()+1)
	
	}



	//Convert Time Countdown
	let CH_Diff = (AtualC.getTime() - CH_Base.getTime()) / 1000
	let CH_daysDiff = CH_Diff / (3600*24)
	let CH_HoursDiff = (CH_daysDiff*24)%24
	let CH_minDiff = (CH_HoursDiff*60)%60
	let CH_secDiff = (CH_minDiff*60)%60

	//Insert Values
	days.innerText = Math.abs(Math.ceil(CH_daysDiff))
	hours.innerText = Math.abs(Math.ceil(CH_HoursDiff))
	minutes.innerText = Math.abs(Math.ceil(CH_minDiff))
	seconds.innerText = Math.abs(Math.ceil(CH_secDiff))
	
	CheckValue()
	

	


}				




function CheckValue(){
	days.innerText < 10? days.innerText = '0'+ days.innerText: days.innerText
	hours.innerText < 10? hours.innerText = '0'+ hours.innerText: hours.innerText
	minutes.innerText < 10? minutes.innerText = '0'+ minutes.innerText: minutes.innerText
	seconds.innerText < 10? seconds.innerText = '0'+ seconds.innerText: seconds.innerText


}

//Not Working

/*
function InsertData(day,hour,min,sec){
	days.innerText = day
	hours.innerText = hour
	minutes.innerText = min
	seconds.innerText = sec
}

*/