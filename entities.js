exports.addTest = function (value1, value2) {
    let min = Math.min(value1, value2);
    let max = Math.max(value1, value2);
    let output = Array.from({
        length: max - min + 1
    }, (v, i) => i + min);
    if (value1 > value2) output.reverse();
    console.log(output, "Respuesta Test!");
    return output;
}