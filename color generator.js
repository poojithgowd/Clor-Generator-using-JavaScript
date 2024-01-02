const colors = ['red', 'blue', 'green', 'yellow', 'gray', 'pink', 'black'];

function changeColor() {
    const pickColor = Math.floor(Math.random() * 7);
    const col = colors[pickColor];
    const button = document.getElementById('id1');
    button.style.background = col;
}