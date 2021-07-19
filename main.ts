input.onButtonPressed(Button.A, function () {
    if (_21 == 5) {
        basic.showString("Error:(")
    } else {
        _21 += 1
        _12 = randint(-12, 12)
        if (_12 < 1) {
            basic.showIcon(IconNames.No)
            basic.showNumber(_12)
        } else {
            basic.showNumber(_12)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    _21 = 0
})
let _21 = 0
let _12 = 0
_21 = 5
