const canvas = document.querySelector(".canvas")
const c = canvas.getContext("2d")

const w = canvas.width = canvas.offsetWidth
const h = canvas.height = canvas.offsetHeight

function createPet (type) {

	c.lineWidth = 3

	c.beginPath()
	c.fillStyle = "#5cabff"
	c.strokeStyle = "#5cabff"
	c.arc(w / 2, h / 2, 250, 0, Math.PI * 2, false)
	c.fill()

	c.closePath()
	c.beginPath()

	c.ellipse(w / 4, h - h / 6, 100, 70, 0, 0, Math.PI * 2, false)
	c.ellipse(w - w / 3, h - h / 6, 100, 70, 0, 0, Math.PI * 2, true)
	c.fill()

	c.closePath()
	c.beginPath()

	c.moveTo(w/4, h/4)
	c.lineTo(w/3, h/20)
	c.lineTo(w/2, h/4)
	c.stroke()
	c.fill()

	c.closePath()
	c.beginPath()

	c.moveTo(w - w/4, h/4)
	c.lineTo(w - w/3, h/20)
	c.lineTo(w - w/2, h/4)
	c.stroke()
	c.fill()

	c.closePath()
	c.beginPath()

	c.fillStyle = "#fff"
	c.strokeStyle = "#000"

	c.ellipse(w / 3, h / 2.6, 40, 70, 0, 0, Math.PI * 2, false)
	
	c.stroke()
	c.fill()

	c.beginPath()

	c.ellipse(w - w / 3, h / 2.6, 40, 70, 0, 0, Math.PI * 2, false)

	c.stroke()
	c.fill()

	c.closePath()
	c.beginPath()

	c.lineWidth = 10

	if (type === "sad") {
		createEyes("normal")
		
		c.beginPath()

		c.ellipse(w / 2, h / 1.4, 150, 70, 0, -20 * Math.PI / 180, 200 * Math.PI / 180, true)
		c.stroke()
	} else if (type === "normal") {
		createEyes("normal")

		c.ellipse(w / 2, h / 1.7, 150, 70, 0, 20 * Math.PI / 180, 160 * Math.PI / 180, false)
		c.stroke()
	} else if (type === "happy") {
		createEyes("normal")

		c.ellipse(w / 2, h / 1.7, 150, 70, 0, 20 * Math.PI / 180, 160 * Math.PI / 180, false)
		c.stroke()

		c.beginPath()

		c.fillStyle = "#6b4af0"
		c.arc(w / 4, h / 1.8, 50, 0, Math.PI * 2, false)
		c.arc(w- w / 4, h / 1.8, 50, 0, Math.PI * 2, false)
		c.fill()

	} else if (type === "cheeky") {
		createEyes("cheeky")

		c.beginPath()
		
		c.fillStyle = "#b32020"

		c.ellipse(w / 2, h / 1.6, 120, 70, 0, -30 * Math.PI / 180, 210 * Math.PI / 180, false)
		
		c.lineWidth = 3

		c.closePath()

		c.fill()
		c.stroke()
	}
}

function createEyes (type, y = h / 2.3) {
	if (type === "normal") {
		c.fillStyle = "#000000"
		
		c.beginPath()

		c.arc(w / 3, y, 20, 0, Math.PI * 2, false)
		c.fill()	

		c.beginPath()

		c.arc(w - w / 3, y, 20, 0, Math.PI * 2, false)
		c.fill()

		c.beginPath()
	} else if (type === "cheeky") {
		createEyes("normal", h / 2.5)
	}
}

var petStateTimeout =  setTimeout(createPet("sad"), 1)

console.log(w, h)
console.dir(canvas, window)

function petTimeout (petType, time = 5000) {
	createPet(petType)
	clearTimeout(petStateTimeout)
	petStateTimeout = setTimeout(() => {createPet("sad")}, time)
}

canvas.addEventListener("click", () => {
	petTimeout("normal")})
	
canvas.addEventListener("dblclick", () => {
	petTimeout("cheeky")})

var mousemoveCounter = 0

canvas.addEventListener("mousemove", () => {
	mousemoveCounter += 1
	if (mousemoveCounter === 100) {
		petTimeout("happy")
		mousemoveCounter = 0
	}
})
