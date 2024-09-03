input.onButtonPressed(Button.A, function () {
    radio.sendNumber(enumDispense)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(enumCycleTurnsPerFeed)
})
let enumDispense = 0
let enumCycleTurnsPerFeed = 0
enumCycleTurnsPerFeed = 1
enumDispense = 2
let enumRequestReceived = 3
let enumRequestComplete = 4
radio.setGroup(1)
radio.setTransmitSerialNumber(true)
