"use strict";

function updateHistoryLength() {
    document.getElementById("history-length").textContent =
        `History Length: ${history.length} pages`;
}

document.getElementById("back").addEventListener("click", () => {
    history.back();
});

document.getElementById("forward").addEventListener("click", () => {
    history.forward();
});

document.getElementById("back-two").addEventListener("click", () => {
    history.go(-2);
});

// 页面首次显示或通过浏览器前进、后退恢复时，刷新显示。
window.addEventListener("pageshow", updateHistoryLength);
window.addEventListener("popstate", updateHistoryLength);

updateHistoryLength();