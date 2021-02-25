const solution = function (x, y) {
    if (x != 0 && y != 0 && y <= 100000 && x <= 100000) {
        let prevSum = y;
        let number = 0;
        for (let i = 0; i < x;) {
            prevSum = prevSum + number;
            if (number >= (y - 1)) {
                i++;
            }
            number++
        }
        let stringifyRes = String(prevSum);
        return ('Capitan Pron Gold Treasure ID: ' + stringifyRes)
    }
   else
        return 'Limits:  Each value of x and y must be at least 1 and no greater than 100,000. Please retry'
}
