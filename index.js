var img1 = 0
var img2 = 0
var img3 = 0
var img4 = 0
var img5 = 0
var img6 = 0
var img7 = 0
var img8 = 0
var img9 = 0

var selected = []

const arrBox = document.getElementsByClassName('box')

for(let i = 0; i< arrBox.length; i++){
	arrBox[i].addEventListener('click', function(){

		let arrClass = Array.from(arrBox[i].classList)

		if(!arrClass.includes('visible')){

			if(selected.length < 2){
				arrBox[i].classList.add('visible')
			}

			selected.push(arrBox[i].id)

			if(selected.length > 1){
				if(document.getElementById(selected[0]).children[0].src != 
					document.getElementById(selected[1]).children[0].src){
					console.log('no son iguales')
					setTimeout(()=>{
						for(let i = 0; i< selected.length; i++){
							document.getElementById(selected[i]).classList.remove('visible')
						}
						selected.splice('')
					},500)
				}else{
					selected.splice('')
				}
			}

			if(document.getElementsByClassName('visible').length == 18){
				setTimeout(()=>{
					if(window.confirm('YOU WIN, Restart?')){
						window.location.reload()
					}
				},500)
			}
		}
	})
}

window.addEventListener('load', function(){

	for(let i = 0; i< arrBox.length; i++){
				
		let numRandom = 0

		let image = ''

		do{
			numRandom = Math.floor(Math.random() * 10)

			image = getImage(numRandom)			
		}while(!image)

		arrBox[i].id = i
		arrBox[i].innerHTML = `<img src="${image}">`
	}	
})

function getImage(index){

	switch(index){
		case 0:
		case 1:
			if(img1 < 2){
				img1++
				return "arco-y-flecha.png"
			}
		break
		case 2:
			if(img2 < 2){
				img2++
				return "basketball-ball.png"
			}
		break
		case 3:
			if(img3 < 2){
				img3++
				return "beisbol.png"
			}
		break
		case 4:
			if(img4 < 2){
				img4++
				return "futbol-americano.png"
			}
		break
		case 5:
			if(img5 < 2){
				img5++
				return "golf.png"
			}
		break
		case 6:
			if(img6 < 2){
				img6++
				return "guante-de-boxeo.png"
			}
		break
		case 7:
			if(img7 < 2){
				img7++
				return "volleyball.png"
			}
		break
		case 8:
			if(img8 < 2){
				img8++
				return "rugby.png"
			}
		break
		case 9:
			if(img9 < 2){
				img9++
				return "tennis.png"
			}
		break	
	}

}
