let X = 0
let Y = 0
function Horizontal (a: number, b: number, Size: number, Side: number) {
    X = a
    Y = b
    for (let index = 0; index < Size; index++) {
        led.plot(X, Y)
        X += Side
        basic.pause(200)
    }
}
input.onButtonPressed(Button.A, function () {
    Horizontal(0, 0, 4, 1)
    Diagonal(3, 0, 4, -1)
    Vertical(0, 3, 4, -1)
})
function Diagonal (a: number, b: number, Size: number, Side: number) {
    X = a
    Y = b
    for (let index = 0; index < Size; index++) {
        led.plot(X, Y)
        Y += -1 * Side
        X += Side
        basic.pause(200)
    }
}
input.onButtonPressed(Button.B, function () {
    Horizontal(1, 4, 4, 1)
    Vertical(4, 4, 4, -1)
    Diagonal(4, 1, 4, -1)
})
function Vertical (a: number, b: number, Size: number, Side: number) {
    X = a
    Y = b
    for (let index = 0; index < Size; index++) {
        led.plot(X, Y)
        Y += Side
        basic.pause(200)
    }
}
