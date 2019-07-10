function formatValues(value, context) {
    let newValue
    if (!context.header) {
        return isNaN(value) ? newValue = value : newValue = parseFloat(value)
    } else {
        return value
    }
}

let CSV_PARSE_OPTIONS = {
    delimiter: ',', 
    columns: true, 
    ltrim: true, 
    rtrim: true,
    cast: (value, context) => formatValues(value, context)
}

module.exports = {
    CSV_PARSE_OPTIONS
}