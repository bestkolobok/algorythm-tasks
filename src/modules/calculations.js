const getVariants = (maxCount) => {
    const variants = [];
    for(let i=1, k=0; k < maxCount; i++) {
        k = Math.pow(i, 2);
        if (k <= maxCount) {
            variants.push(k)
        }
    }
    return variants;
}

const maxNumber = (array) => {
    if (array.length === 0) return 0;
    return Math.max(...array)
}

const getPlayer = (step) => {
    return step % 2 === 0 ? 'Mat' : 'Pat'
}

module.exports = {
    getVariants,
    maxNumber,
    getPlayer
}