function getBulbState(totalPresses, buttonPresses) {
    let bulbIsOn = 0;
    for (let pressIndex = 0; pressIndex < totalPresses; pressIndex++) {
        if (buttonPresses[pressIndex] === 1) {
            bulbIsOn = 1 - bulbIsOn;
        }
    }
    return bulbIsOn;
}
const totalPresses = 5;
const buttonPresses = [1, 0, 1, 1, 0];
console.log(getBulbState(totalPresses, buttonPresses));
