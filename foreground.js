console.log('[YT Auto Loop] running foreground');

var bean = document.firstElementChild.getAttribute("popup_wakeup")

if (bean != null && bean != ""){
    document.firstElementChild.setAttribute("popup_wakeup", "wakeup")
    console.log("[YT Auto Loop] instance already executed on current page");
}
else{
    document.firstElementChild.setAttribute("popup_wakeup", "awaiting")

    // kickstart our checks 
    function clickLoopButtonIfNeeded() {
        const btn = document.querySelector('button[aria-label="Loop playlist"]');

        if (!btn) {
            console.log("[YT Auto Loop] button not present or already pressed");
            return;
        }

        const isActive = btn.getAttribute("aria-pressed") === "true";

        if (!isActive) {
            console.log("[YT Auto Loop] Activating loop");
            btn.click();
        } else {
            console.log("[YT Auto Loop] already activated loop");
        }
    }
    // run once every 10 sec
    setInterval(() => {
        try {
            clickLoopButtonIfNeeded();
        } catch (e) {
            console.warn("[YT Auto Loop] Error:", e);
        }
    }, 10000);

    // Also run once on load
    console.log("[YT Auto Loop] started");
}

