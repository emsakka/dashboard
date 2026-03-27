/* ============================================================
   PORTFOLIO DASHBOARD — SCRIPT PRINCIPALE
   Funzioni:
   - Caricamento dati (placeholder)
   - Grafico candlestick (Lightweight Charts)
   - Popup
   - Slide-in panel
   - Eventi UI
============================================================ */

/* ===========================
   POPUP
=========================== */

const popup = document.getElementById("popup");
const popupContent = document.getElementById("popupContent");

function showPopup(message) {
    popupContent.innerHTML = message;
    popup.classList.remove("hidden");

    setTimeout(() => {
        popup.classList.add("hidden");
    }, 3500);
}

/* ===========================
   SLIDE-IN PANEL
=========================== */

const slidePanel = document.getElementById("slidePanel");
const closePanel = document.getElementById("closePanel");
const panelContent = document.getElementById("panelContent");

function openPanel(htmlContent) {
    panelContent.innerHTML = htmlContent;
    slidePanel.classList.add("open");
}

closePanel.addEventListener("click", () => {
    slidePanel.classList.remove("open");
});

/* ===========================
   GRAFICO CANDLESTICK
=========================== */

function initCandlestickChart() {
    const chartElement = document.getElementById("candlestickChart");

    const chart = LightweightCharts.createChart(chartElement, {
        layout: {
            background: { color: "#050505" },
            textColor: "#8affc1",
        },
        grid: {
            vertLines: { color: "#111" },
            horzLines: { color: "#111" },
        },
        crosshair: {
            mode: LightweightCharts.CrosshairMode.Normal,
        },
        timeScale: {
            borderColor: "#333",
        },
        rightPriceScale: {
            borderColor: "#333",
        },
    });

    const candleSeries = chart.addCandlestickSeries({
        upColor: "#4bffb0",
        downColor: "#ff4b4b",
        borderUpColor: "#4bffb0",
        borderDownColor: "#ff4b4b",
        wickUpColor: "#4bffb0",
        wickDownColor: "#ff4b4b",
    });

    // Dati placeholder — li sostituiremo con i tuoi reali
    const sampleData = [
        { time: "2024-01-01", open: 100, high: 110, low: 95, close: 105 },
        { time: "2024-01-02", open: 105, high: 112, low: 101, close: 108 },
        { time: "2024-01-03", open: 108, high: 115, low: 107, close: 112 },
        { time: "2024-01-04", open: 112, high: 118, low: 110, close: 115 },
        { time: "2024-01-05", open: 115, high: 120, low: 113, close: 118 },
    ];

    candleSeries.setData(sampleData);

    return chart;
}

/* ===========================
   CARICAMENTO DATI (placeholder)
=========================== */

function loadPortfolioData() {
    // Questi valori verranno sostituiti con i dati reali da OneDrive
    document.getElementById("portfolioValue").innerText = "€19.683";
    document.getElementById("totalInvested").innerText = "€19.536";
    document.getElementById("gainLoss").innerText = "+€147";
}

/* ===========================
   EVENTI UI
=========================== */

document.querySelectorAll(".alloc-block").forEach(block => {
    block.addEventListener("click", () => {
        openPanel(`<h3>${block.innerText}</h3><p>Dati dettagliati in arrivo…</p>`);
    });
});

/* ===========================
   INIZIALIZZAZIONE
=========================== */

window.onload = () => {
    loadPortfolioData();
    initCandlestickChart();
    showPopup("Dashboard caricata correttamente");
};

