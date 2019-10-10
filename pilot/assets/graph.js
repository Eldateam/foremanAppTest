
  window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer", {

      theme: "light2",
            
      title:{
          text: "Anual Material budget"              
      },

      data: [  //array of dataSeries     
      { //dataSeries - first quarter
 /*** Change type "column" to "bar", "area", "line" or "pie"***/        
       type: "column",
       name: "First Quarter",
       showInLegend: true,
       dataPoints: [
           { label: "Labour", y: 58 },
           { label: "Electrical", y: 69 },
           { label: "Pipe", y: 80 },                                    
           { label: "Mechanical", y: 74 },
           { label: "Shift Extra", y: 64 }
       ]
     }, 
     { //dataSeries - second quarter

      type: "column",
      name: "Second Quarter", 
      showInLegend: true,               
      dataPoints: [
        { label: "Labour", y: 70 },
        { label: "Electrical", y: 40 },
        { label: "Pipe", y: 10 },
        { label: "Mechanical", y: 100 },
        { label: "Shift Extra", y: 30 }
      ]
    }
    ],
 /** Set axisY properties here*/
    axisY:{
      prefix: "$",
      suffix: "K",
      includeZero: false
    }    
  });

chart.render();
} 


 