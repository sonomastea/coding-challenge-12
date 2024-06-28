document.addEventListener("DOMContentLoaded", function(){
 const svg= d3.select("#viz")
 .append("svg")
 .attr("width", 600)   
 .attr("height,600");

 // data and filter
 d3.csv("mock_stock_data.csv"), function(data){
    d.date=+d.date
    d.value= +d.value;}
 .attr("value", d=>d)
 //scales
 const xScale= d3.scaleLinear ()
 .domain([0, d3.max(data=> date)])
 .range([0,500]);
const yScale= d3.scaleLinear()
.domain(0,(data=>value))
.range([500,0])

 //axis 
 svg.selectAll("g")
 .data(data)
 .enter()
 .append("g")
 .attr("transform","translate(20,20)").call(d3.axisLeft(y))
 
 //line
 const line=d3.line()
 .x(d => x(d.date))
 .y(d => y(d.value));

 //add line
 svg.append("path")
 .datum("data")
 .attr("class","line")
 .attr("fill", "blue" )
 .attr("line-width","1")
 .attr("d",line)
 
 //tooltip
const tooltip= d3.selectBody 
.append("div")
.attr("class","tooltip")
.style("fill","orange")


})
        