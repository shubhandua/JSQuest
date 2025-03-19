function isPianoPlayable(noteSequence) {
    for (let index = 0; index < noteSequence.length - 1; index++) {
        if (noteSequence[index] === noteSequence[index + 1]) {
            return "NO";
        }
    }
    return "YES";
}

const noteSequence = [1, 2, 1, 2, 1, 2];
console.log(isPianoPlayable(noteSequence));
