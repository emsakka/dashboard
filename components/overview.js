/* ============================================================
   OVERVIEW COMPONENT
   - Aggiorna i valori principali
   - Gestisce i blocchi di allocazione
============================================================ */

export function updateOverview(data) {
    document.getElementById("portfolioValue").innerText = data.portfolioValue;
    document.getElementById("totalInvested").innerText = data.totalInvested;
    document.getElementById("gainLoss").innerText = data.gainLoss;
}

export function bindAllocationBlocks(openPanel) {
    document.querySelectorAll(".alloc-block").forEach(block => {
        block.addEventListener("click", () => {
            openPanel(`
                <h3>${block.innerText}</h3>
                <p>Dati dettagliati in arrivo…</p>
            `);
        });
    });
}
