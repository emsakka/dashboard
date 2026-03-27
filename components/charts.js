/* ============================================================
   CHARTS COMPONENT
   - Lightweight Charts (candlestick)
============================================================ */

export function initCandlestickChart() {
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

    // Dati placeholder
    candleSeries.setData([
        { time: "2024-01-01", open: 100, high: 110, low: 95, close: 105 },
        { time: "2024-01-02", open: 105, high: 112, low: 101, close: 108 },
        { time: "2024-01-03", open: 108, high: 115, low: 107, close: 112 },
        { time: "2024-01-04", open: 112, high: 118, low: 110, close: 115 },
        { time: "2024-01-05", open: 115, high: 120, low: 113, close: 118 },
    ]);

    return chart;
}
