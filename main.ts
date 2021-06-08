input.onButtonPressed(Button.A, function () {
    contador += 1
    basic.showNumber(contador)
    if (contador == 4) {
        contador = 0
        basic.showNumber(contador)
    }
})
input.onButtonPressed(Button.B, function () {
    if (contador == 1) {
        basic.showIcon(IconNames.No)
    } else if (contador == 2) {
        basic.showString("atenção")
    } else if (contador == 3) {
        basic.showIcon(IconNames.Yes)
    }
})
let contador = 0
contador = 1
