(function (doc, win) {
    var docEl = document.getElementsByTagName('html')[0],
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth
            if (!clientWidth) return
            docEl.style.fontSize = 16 * (clientWidth / 1920) + 'px'
        }
    if (!doc.addEventListener) return
    win.addEventListener(resizeEvt, recalc, false)
    doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)
