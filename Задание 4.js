function printNumber (from, to) {
    let timerId = setInterval(() => {
        console.log(from)
        if (from === to) {
            clearInterval(timerId)
        }
        from++
    }, 1000)
}

printNumber(5, 15)

