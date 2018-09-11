

const CHART_WITH = 800;
const CHART_HEIGHT = 400;
const BAR_PADDING = 5;

const data = [];

for (let index = 0; index < 25; index++) {
    // var num = Math.floor(Math.random() * 50);
    var num = Math.floor(d3.randomUniform(1, 50)());
    data.push(num)
}

// Create SVG Element
var svg = d3.select('#chart')
    .append('svg')
    .attr('width', CHART_WITH)
    .attr('height', CHART_HEIGHT)


// Create the bars
svg.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', (d, i) => i * (800 / data.length))
    .attr('y', (d) => CHART_HEIGHT - d * 5)
    .attr('width', CHART_WITH / data.length - BAR_PADDING)
    .attr('height', (d) => d * 5)
    .attr('fill', '#7ED26D')

// Create labels
svg.selectAll('text')
    .data(data)
    .enter()
    .append('text')
    .text((d) => d)
    .attr('x', (d, i) => i * (CHART_WITH / data.length) + (CHART_WITH / data.length - BAR_PADDING) / 2)
    .attr('y', (d) => CHART_HEIGHT - d * 5 + 15)
    .attr('font-size', 14)
    .attr('fill', 'white')
    .attr('text-anchor', 'middle')


