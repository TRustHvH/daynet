const TEXT_HEIGHT = 40
const TEXT_MARGIN = 42


$(document).ready(function () {
  let charts = $(".yars-chart-container");
  for (let i = 0; i < charts.length; i++) {
    let $chart = $(charts[i]);
    let minValue = parseInt($chart.attr("min-chart-value"))
    let maxValue = parseInt($chart.attr("max-chart-value"))
    let currentValueOne = parseInt($chart.attr("chart-value-one"))
    let currentValueTwo = parseInt($chart.attr("chart-value-two"))
    let afterSymbol = $chart.attr("after-number-symbol") ? $chart.attr("after-number-symbol") : ""

    let valueLength = Math.abs(minValue) + Math.abs(maxValue)

    let firstLinePercent = currentValueOne / (valueLength / 100) / 100
    let secondLinePercent = currentValueTwo / (valueLength / 100) / 100

    let width = $chart.width()
    // Соотношение сторон 9:1.403 для графиков на дизе.
    // В зависимости от ширины будет меняться высота и смотреться гармонично
    let chart_height = Math.round((width / 9) * 1.403)
    // Это высота канваса, она высчитывается исходя из цфир под ним их размеров и отступов
    let canvas_height = Math.round((width / 9) * 2.087) + TEXT_HEIGHT + TEXT_MARGIN

    $chart.append(`<canvas width="${width}" height="${canvas_height}"></canvas>`)
    let canvas = $($chart.find("canvas")).get(0)
    let ctx = canvas.getContext("2d");

    const gradient = ctx.createLinearGradient(0, 0, width, 0);

    gradient.addColorStop(firstLinePercent / 2, "#7A73FF");
    gradient.addColorStop(firstLinePercent, "#FD9BE8");
    gradient.addColorStop(firstLinePercent + 0.002, "#83FFBC");

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.roundRect(0, 20, width, chart_height, [8]);
    ctx.fill();


    // draw lines
    ctx.beginPath()
    ctx.strokeStyle = "#AFB6B3"
    ctx.moveTo(width * firstLinePercent, 0);
    ctx.lineTo(width * firstLinePercent, canvas_height - TEXT_HEIGHT - TEXT_MARGIN);
    ctx.stroke()
    ctx.moveTo(width * secondLinePercent, 0);
    ctx.lineTo(width * secondLinePercent, canvas_height - TEXT_HEIGHT - TEXT_MARGIN);
    ctx.stroke()

    // draw texts
    ctx.font = `${TEXT_HEIGHT}px serif`
    ctx.fillStyle = "#04101C"
    ctx.globalAlpha = 0.6;
    // ctx.fillText("0", 0, chart_height + TEXT_MARGIN + TEXT_HEIGHT);
    ctx.textAlign = "center"
    ctx.fillText(`${currentValueOne}${afterSymbol}`, width * firstLinePercent, chart_height + TEXT_MARGIN + TEXT_HEIGHT);
    ctx.globalAlpha = 1;
    ctx.fillStyle = "#04101C"
    ctx.fillText(`${currentValueTwo}${afterSymbol}`, width * secondLinePercent, chart_height + TEXT_MARGIN + TEXT_HEIGHT);
    ctx.textAlign = "right"
    ctx.globalAlpha = 0.6;
    ctx.fillStyle = "#04101C"
    // ctx.fillText(`${valueLength}`, width, chart_height + TEXT_MARGIN + TEXT_HEIGHT);
    ctx.globalAlpha = 1;
  }
})
