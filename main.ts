let a = 0
let light2 = 0
input.onButtonPressed(Button.A, function () {
    a = 1
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
})
input.onButtonPressed(Button.B, function () {
    a = 0
    music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
})
basic.forever(function () {
    light2 = input.lightLevel()
})
basic.forever(function () {
    if (a == 1) {
        if (light2 < 100) {
            music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once)
            basic.showString("BE SAFE, BE SEEN!")
        }
    }
})
