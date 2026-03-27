/* ============================================================
   SIGNALS COMPONENT
   - Logica per popup e segnali futuri
============================================================ */

export function triggerSignal(message) {
    const popup = document.getElementById("popup");
    const popupContent = document.getElementById("popupContent");

    popupContent.innerHTML = message;
    popup.classList.remove("hidden");

    setTimeout(() => {
        popup.classList.add("hidden");
    }, 3500);
}
