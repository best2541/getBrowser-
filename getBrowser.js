export function getBrowser() {
    let browser
    if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
        return 'opera'
        alert('Opera');
    }
    else if (navigator.userAgent.indexOf("Edg") != -1) {
        return 'edge'
        alert('Edge');
    }
    else if (navigator.userAgent.indexOf("Chrome") != -1) {
        return 'chrome'
        alert('Chrome');
    }
    else if (navigator.userAgent.indexOf("Safari") != -1) {
        return 'safari'
        alert('Safari');
    }
    else if (navigator.userAgent.indexOf("Firefox") != -1) {
        return 'firefox'
        alert('Firefox');
    }
    else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) //IF IE > 10
    {
        return 'ie'
        alert('IE');
    }
    else {
        return 'unknown'
        alert('unknown');
    }
}
