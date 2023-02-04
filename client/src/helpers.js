const formatString = string => {
    return string.split('-')
    .map(item => item[0].toUpperCase() + item.substr(1))
    .join(' ');
}

module.exports = { formatString };