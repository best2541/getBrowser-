export function getBrowser() {
    let browser
    if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
        return 1
        alert('Opera');
    }
    else if (navigator.userAgent.indexOf("Edg") != -1) {
        return 1
        alert('Edge');
    }
    else if (navigator.userAgent.indexOf("Chrome") != -1) {
        return 1
        alert('Chrome');
    }
    else if (navigator.userAgent.indexOf("Safari") != -1) {
        return 4
        alert('Safari');
    }
    else if (navigator.userAgent.indexOf("Firefox") != -1) {
        return 1
        alert('Firefox');
    }
    else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) //IF IE > 10
    {
        return 1
        alert('IE');
    }
    else {
        return 5
        alert('unknown');
    }
}