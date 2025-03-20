function identifyDateFormat(date) {
    const day = parseInt(date.substring(0, 2));
    const month = parseInt(date.substring(2, 4));

    const isDayValid = day >= 1 && day <= 31;
    const isMonthValid = month >= 1 && month <= 12;

    const canBeDDMM = isDayValid && isMonthValid;
    const canBeMMDD = isMonthValid && isDayValid;

    if (canBeDDMM && canBeMMDD) {
        return "BOTH"; 
    } else if (canBeDDMM) {
        return "DDMM"; 
    } else if (canBeMMDD) {
        return "MMDD"; 
    } else {
        return "NA"; 
    }
}

// Example Usage
const sampleDates = ["0112", "1201", "1305", "9999"];
sampleDates.forEach(date => {
    console.log(`Date: ${date} -> Format: ${identifyDateFormat(date)}`);
});
