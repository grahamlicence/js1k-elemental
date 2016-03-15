function D(x, y, C) {
    c.fillStyle = C
    c.fillRect(x, y, 1, 1);
}
function S(posX, posY, r, C) {
    s = Math.PI / 10
    for ($i = 0; $i <= 20; $i++) {

        $x = r * Math.cos(s * $i);
        $y = r * Math.sin(s * $i);
        D($x + posX, $y + posY, C)

    }
}
arr = []
setInterval(function() {
    c.fillStyle = '#000';
    c.fillRect(0, 0, a.width, a.height);
    for (i = 0; i < arr.length; i++) {
        S(arr[i].x, arr[i].y, arr[i].r, arr[i].c)
        arr[i].r++;
        if (arr[i].r > 200) {
            arr.splice(i, 1);
        }
    }
}, 50);
co = [110, 180, 230];
function col() {
    for (i = 0; i < 3; i++) {
        if (co[i] > 255) {
            co[i] = 110
        } else {
            co[i]++
        }
    }
    return co;
}
function add(e) {
    col();
    arr.push({
        r: 1,
        x: e.clientX,
        y: e.clientY,
        c: 'rgb(' + co[0] + ',' + co[1] + ',' + co[2] + ')'
    });
}
window.addEventListener('click', add);
window.addEventListener('mousemove', add);