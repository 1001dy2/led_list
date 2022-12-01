let list = [
[
0,
0,
0,
0,
0
],
[
0,
1,
0,
1,
0
],
[
0,
0,
0,
0,
0
],
[
1,
0,
0,
0,
1
],
[
0,
1,
1,
1,
0
]
]
for (let y = 0; y <= 4; y++) {
    for (let index = 0; index <= 4; index++) {
        if (list[y][index] == 1) {
            led.plotBrightness(index, y, 255)
        } else {
            led.unplot(index, y)
        }
    }
}
