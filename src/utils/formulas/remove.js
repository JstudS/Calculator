const remove = (valueToShow) => {
    return  valueToShow.at(valueToShow.length - 1) === ' ' ?  valueToShow.slice(0, valueToShow.length - 3) : valueToShow.slice(0, valueToShow.length - 1)
}

export default remove