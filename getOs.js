export function getOS() {
    var userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'],
        os = null;

    if (macosPlatforms.indexOf(platform) !== -1) {
        os = ['Mac OS', 4]
    } else if (iosPlatforms.indexOf(platform) !== -1) {
        os = ['iOS', 4]
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = ['Windows', 0]
    } else if (/Android/.test(userAgent)) {
        os = ['Android', 1]
    } else if (!os && /Linux/.test(platform)) {
        os = ['Linux', 1]
    } else if (/WebTV/.test(platform)) {
        os = ['TV', 3]
    }

    return os;
}