let Bearing = 0
basic.forever(function () {
    Bearing = input.compassHeading()
    if (Bearing < 45 || Bearing > 315) {
        basic.showString("N")
        music.playMelody("C5 C5 C5 C5 C5 C5 C5 C5 ", 120)
    }
    if (Bearing < 135 || Bearing > 45) {
        basic.showString("W")
        music.playMelody("A A A A A A A A ", 120)
    }
    if (Bearing < 225 || Bearing > 135) {
        basic.showString("S")
        music.playMelody("F F F F F F F F ", 120)
    }
    if (Bearing < 315 || Bearing > 225) {
        basic.showString("E")
        music.playMelody("D D D D D D D D ", 120)
    }
})
