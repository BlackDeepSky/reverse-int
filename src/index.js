module.exports = function reverse (n) {
    n = Math.abs(n)
    return Array.from(n.toString(), Number).reverse().join('');
}
