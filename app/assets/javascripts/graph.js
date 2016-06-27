// $(document).ready(function(){
//   $('.pol').on('click', 'a', function(e){
//           $.ajax({
//            type: "GET",
//            contentType: "application/json",
//            url: '/politicians/17/tweet_data',
//            dataType: 'json',
//            success: function(data) {
//             debugger
//                draw(data);
//            },
//            error: function (result) {
//                error();
//            }
//        });
//   })

//   function draw(data){
//   d3.select( ".chart" )
//     .selectAll( "div" )
//       .data( data )
//     .enter().append( "div" )
//       .style( "width", function(d) { return d * 10 + "px"; })
//       .text( function(d) { return d; });
//   }

//   function error(){
//     console.log("error");
//   }

// })

function draw(data){
  d3.select( ".chart" )
    .selectAll( "div" )
      .data( data )
    .enter().append( "div" )
      .style( "width", function(d) { return d * 10 + "px"; })
      .text( function(d) { return d; });
  }

  function error(){
    console.log("error");
  }



      $.ajax({
           type: "GET",
           contentType: "application/json",
           url: '/politicians/17/tweet_data',
           dataType: 'json',
           success: function(data) {
            // debugger
               draw(data);
           },
           error: function (result) {
               error();
           }
       });
    

//Tutorial code below:

// $.ajax({
//            type: "GET",
//            contentType: "application/json; charset=utf-8",
//            url: 'data',
//            dataType: 'json',
//            success: function (data) {
//                draw(data);
//            },
//            error: function (result) {
//                error();
//            }
//        });
 
// function draw(data) {
//     var color = d3.scale.category20b();
//     var width = 420,
//         barHeight = 20;
 
//     var x = d3.scale.linear()
//         .range([0, width])
//         .domain([0, d3.max(data)]);
 
//     var chart = d3.select("#graph")
//         .attr("width", width)
//         .attr("height", barHeight * data.length);
 
//     var bar = chart.selectAll("g")
//         .data(data)
//         .enter().append("g")
//         .attr("transform", function (d, i) {
//                   return "translate(0," + i * barHeight + ")";
//               });
 
//     bar.append("rect")
//         .attr("width", x)
//         .attr("height", barHeight - 1)
//         .style("fill", function (d) {
//                    return color(d)
//                })
 
//     bar.append("text")
//         .attr("x", function (d) {
//                   return x(d) - 10;
//               })
//         .attr("y", barHeight / 2)
//         .attr("dy", ".35em")
//         .style("fill", "white")
//         .text(function (d) {
//                   return d;
//               });
// }
 
// function error() {
//     console.log("error")
// }