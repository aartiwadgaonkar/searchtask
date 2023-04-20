function pattern(num) {
    // num * 2
    let str = ""

    for (let i = 1; i <= num; i++) {
        for (let j = num; j >= i; j--) {
            if (i % 2 !== 0 && j % 2 !== 0) {
                str += `  `
            }
        }
        for (let j = 1; j <= i; j++) {
            if (i % 2 !== 0 && j % 2 !== 0) {
                str += `${j} `
            }
        }

        if (i % 2 !== 0) {
            str += `\n`
        }
    }

    for (let i = 2; i < num; i++) {
        for (let j = -1; j < i; j++) {
            if (i % 2 !== 0 && j % 2 !== 0) {
                str += `  `
            }
        }
        for (let j = 1; j <= num - i; j++) {
            if (i % 2 !== 0 && j % 2 !== 0) {
                str += `${j} `
            }
        }

        if (i % 2 !== 0) {
            str += `\n`
        }

    }
    return str
}
console.log(pattern(10));