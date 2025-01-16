const intoPercent = (valueToShow, storedExpressions) => {
    let res = `${(eval(valueToShow.replace(/ ÷ /g, '/'))) / 100}`
    storedExpressions(res)
    return res === 'NaN' ? "0" : res
}

export default intoPercent