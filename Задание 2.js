function isPrime (number) {
    if (number > 1000) {
        throw new Error('Число должно быть меньше 1000!')
    }
    for (let i = 2; i < number; i++) {
        if (number % i == 0) return false
    }
    return true
}

console.log(isPrime())
