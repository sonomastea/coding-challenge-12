document.addEventListener("DOMContentLoaded", function(){
    const svg=d3.select("#viz").append("svg")
    .attr("width",600)
    .attr("height",600)

    d3.csv("mock_stock_data.csv", function(d){
        d.date= new Date (d.date);
        d.value= +d.value
        return d;
    })
    .then(data =>{
        const x=d3.scaleTime()
        .domain(d3.extent(data,d => d.date))
        .range([0,580]);
        const y= d3.scaleLinear()
        .domain([0,d3.max(data, d=> d.value)])
        .range([580,0]);
        
        svg.append("g")
        .attr("transform", "translate(10,590")
        .call(d3.axisBottom(x));
        svg.append("g")
        .attr("transform", "translate(10,10")
        .call(d3.axidLeft(y));
        

        svg.selectAll(".bar")
        .data(data)
        .enter().append(rect)
        .attr("class", "bar")
        .attr("x", d => x(d.date))
        .attr("y", d => y(d.value))
        .attr("width, 5 ")
        .attr("height", d=> x(d.date))
        .attr("transform", "translate )10,10")

        .on(mouseover, function(event,d){
            
        })


    })

})