const calculation = (valueToShow, storedExpressions) => {
    let res = `${eval(valueToShow.replace(/ ÷ /g, '/'))}`
    storedExpressions(valueToShow)
    return res === 'NaN' ? "0" : res
}

export default calculation