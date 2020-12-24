
	const EventName = document.getElementById('event-name')
	const days = document.getElementById('days')
	const hours = document.getElementById('hours')
	const minutes = document.getElementById('minutes')
	const seconds = document.getElementById('seconds')
	
	// Start Timer Var
	let Start;





let ClickButton = function(Target){
	let AtualTimeBTN = new Date()

	// Change BackGround

	ChangeBG(Target)
	DisableButtons(Target)
	

	// Check Data ///// 

		let ChristmasTime = new Date(AtualTimeBTN.getFullYear(),11,25)
		let NewYearTime = new Date(AtualTimeBTN.getFullYear()+1,00,01)
		let EasterTime = new Date(AtualTimeBTN.getFullYear(),03,03)
		
		
		// Check Event Date
		if(AtualTimeBTN.getTime() > EasterTime.getTime()){
			EasterTime.setFullYear(AtualTimeBTN.getFullYear()+1)
		}

		

		

		//
		if(AtualTimeBTN.getTime() > ChristmasTime.getTime()){
			
			ChristmasTime.setFullYear(AtualTimeBTN.getFullYear()+1)
		}

	////////////////

	
	// Start
	
	if(Target == 'CH'){
		clearInterval(Start)
		Start = setInterval(()=>Timer(ChristmasTime),1000)
		EventName.innerText = 'Christmas Countdown'
	}

	if(Target == 'NY'){
		clearInterval(Start)
		Start = setInterval(()=>Timer(NewYearTime),1000)
		EventName.innerText = 'New Year Countdown'
	}

	if(Target == 'ES'){
		clearInterval(Start)
		Start = setInterval(()=>Timer(EasterTime),1000)
		EventName.innerText = 'Easter Countdown'
	}
	
}	






function Timer(event){
	

	let AtualTime = new Date()
	
	AtualTime = AtualTime.getTime()

	let ReferenceTime = event.getTime()

	
	let TimeDiff =  Math.abs(AtualTime - ReferenceTime)

	let DaysTime = TimeDiff / (3600*24*1000) 
	let HoursTime = (DaysTime * 24)% 24
	let MinutesTime = (HoursTime * 60) % 60 
	let SecTime = (MinutesTime * 60) % 60
	
	


	// Format Values

	DaysTime = Math.trunc(DaysTime)
	HoursTime = Math.trunc(HoursTime)
	MinutesTime = Math.trunc(MinutesTime)
	SecTime = Math.trunc(SecTime)

	// Check Values


	DaysTime < 10 ? DaysTime = '0' + DaysTime : DaysTime
	//
	HoursTime < 10 ? HoursTime = '0' + HoursTime : HoursTime
	//
	MinutesTime < 10 ? MinutesTime = '0' + MinutesTime : MinutesTime
	//
	SecTime < 10 ? SecTime = '0' + SecTime : SecTime


	// Insert Date in Front App
	days.innerText = DaysTime
	hours.innerText = HoursTime
	minutes.innerText = MinutesTime
	seconds.innerText = SecTime
	
	

}



function ChangeBG(Event){
	// Change BackGround
	document.getElementById('main-div').style.background = `url(./imgs/${Event}.jpg) Center`
	document.getElementById('main-div').style.backgroundSize = 'cover'
}



function DisableButtons(btn){
		
		document.querySelectorAll('#buttons input').forEach((btns)=>
		{
			// Enable Buttons
			btns.disabled = false
			btns.style.opacity = '1'
			btns.style.cursor = 'pointer'


		})


		// Disable Clicked Button
		btn = document.getElementById(btn)
		btn.disabled = true
		btn.style.opacity = '0.4'	
		btn.style.cursor = 'default'
	

}
