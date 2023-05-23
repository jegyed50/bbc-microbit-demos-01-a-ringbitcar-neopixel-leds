input.onButtonPressed(Button.A, function () {
    strip.clear()
    basic.pause(1000)
    strip.showRainbow(1, 360)
    for (let index = 0; index <= 128; index++) {
        strip.setBrightness(index + 1)
        strip.rotate(1)
        strip.show()
        basic.pause(10)
    }
    basic.pause(1000)
    strip.clear()
    strip.show()
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 3; index++) {
        strip.clear()
        basic.pause(1000)
        for (let index = 0; index <= 9; index++) {
            strip.setPixelColor(index, neopixel.rgb(randint(0, 255), randint(0, 255), randint(0, 255)))
            basic.pause(1000)
            strip.show()
        }
    }
    basic.pause(2000)
    strip.clear()
    strip.show()
})
input.onButtonPressed(Button.B, function () {
    strip.clear()
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(500)
    strip.show()
    basic.pause(500)
    strip.clear()
    strip.show()
    basic.pause(500)
})
let strip: neopixel.Strip = null
led.setBrightness(125)
basic.showIcon(IconNames.Heart)
strip = neopixel.create(DigitalPin.P2, 10, NeoPixelMode.RGBW)
strip.setBrightness(128)
strip.clear()
strip.show()
basic.forever(function () {
	
})
