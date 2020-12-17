window.addEventListener("load", () => {
    var a = 0;
    // Html contents from html dom...
    const sounds = document.querySelectorAll('.beats .sound');
    const taps = document.querySelectorAll('section .beats');
    window.addEventListener('keypress', (key) => {
        a = key.keyCode;
        taps.forEach((tap) => {
            tap.style.background = "";
            tap.style.boxShadow = "";
        })
        if (a >= 49 || a <= 57) {
            var t = check(a, sounds, taps);
            t.style.background = 'linear-gradient(rgba(153, 41, 41, 0.4),rgba(153, 41, 41, 0.4))';
            t.style.boxShadow = '20px 15px 150px rgba(95, 10, 10, 0.781)'
        }
    })

});

function check(a, sounds, taps) {
    let index = a - 49;

    sounds[index].play();
    return taps[index];
}