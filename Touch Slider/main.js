var allButtons = $('#buttons > span')

for (let i = 0; i < allButtons.length; i++) {
    $(allButtons[i]).on('click', function (x) {
        var index = $(x.currentTarget).index()
        var z = index * -300
        $('#images').css({
            transform: 'translate(' + z + 'px)'
        })
        z = index
        activeButton(allButtons.eq(z % size))

    })
}




var n = 0;
var size = allButtons.length
playSlide(n % size)
var timerId = setTimer()

function activeButton($button) {
    $button.addClass('red')
        .siblings('.red').removeClass('red')
}

function playSlide(index) {
    allButtons.eq(index).trigger('click')
}

function setTimer() {
    return setInterval(() => {
        n += 1
        playSlide(n % size)
    }, 3000)
}

$('.window').on('mouseenter', function () {
    window.clearInterval(timerId)
})

$('.window').on('mouseleave', function () {
    timerId = setTimer()
})