// PROGRESSIVE CHART
const data = [];
const data2 = [];
let prev = 10;
let prev2 = 54.94;
for (let i = 0; i < 1000; i++) {
    prev += 5 - Math.random() * 10;
    data.push({x: i, y: prev});
    prev2 += 5 - Math.random() * 10;
    data2.push({x: i, y: prev2});
}

// 40000
const totalDuration = 40000;
const delayBetweenPoints = totalDuration / data.length;
const previousY = (ctx) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;

const ctx = document.getElementById('progressive');

new Chart(ctx, {
    type: 'line',
    data: {
      datasets: [{
        label: 'Mass of cassava',
        borderColor: 'red',
        borderWidth: 1,
        radius: 0,
        data: data,
      },
      {
        label: 'Moisture content of cassava',
        borderColor: 'blue',
        borderWidth: 1,
        radius: 0,
        data: data2,
      }]
    },
    options: {
      animation: {
        x: {
            type: 'number',
            easing: 'linear',
            duration: delayBetweenPoints,
            from: NaN, // the point is initially skipped
            delay(ctx) {
              if (ctx.type !== 'data' || ctx.xStarted) {
                return 0;
              }
              ctx.xStarted = true;
              return ctx.index * delayBetweenPoints;
            }
          },
          y: {
            type: 'number',
            easing: 'linear',
            duration: delayBetweenPoints,
            from: previousY,
            delay(ctx) {
              if (ctx.type !== 'data' || ctx.yStarted) {
                return 0;
              }
              ctx.yStarted = true;
              return ctx.index * delayBetweenPoints;
            }
          }
      },
      interaction: {
        intersect: false
      },
      plugins: {
        legend: false
      },
      scales: {
        x: {
          type: 'linear'
        }
      }
    }
  
  
});


// LOADING
const loading = document.getElementById('load')
const slope = document.getElementById('slope')
const removing = document.getElementById('removing');

$(document).ready(function() {
    let counter = 0;
    let c = 0;
    let i = setInterval(function(){
        $('.loading-page .counter h1').html(c + '%')
        $('.loading-page .counter hr').css('width', c + '%')
        counter++;
        c++;

        if(counter === 101) {
            clearInterval(i)
        }
    },400)
})

setInterval(() => {
    document.querySelector('.backages').style.display = 'none'
    removing.style.display = 'none';
}, 44000);

setInterval(() => {
    loading.style.display = 'none'

}, 42000);

// Appear chart
const showcase = document.getElementById('showcase');
const show_case = document.getElementById('show_case');
const showcase_1 = document.getElementById('showcase_1');
const showcase_2 = document.getElementById('showcase_2');
const scopee = document.querySelector('.scopee');
const btn_1 = document.querySelector('.btn_1');


setInterval(() => {
    show_case.style.display = 'block'
}, 45000);


setInterval(() => {
    showcase.style.display = 'block'
}, 47000);


setInterval(() => {
  showcase_1.style.display = 'block'
}, 53000);


setInterval(() => {
  showcase_2.style.display = 'block'
}, 58000);


setInterval(() => {
  scopee.style.display = 'block'
}, 65000);


setInterval(() => {
  btn_1.style.display = 'block'
}, 67000);


setInterval(() => {
    const ctx1 = document.getElementById('piiie');

new Chart(ctx1, {
  type: 'line',
  data: {
    labels: [0, 5, 10, 15, 20, 25],
    datasets: [
      {
      label: 'Temperature(degCencius)',
      data: [30, 85, 92, 110, 120, 126],
      backgroundColor : [
        'rgba(25, 199, 32, 0.4)',
        
      ],
      borderColor : [
        'rgba(25, 199, 32, 1)',
        
      ],
      borderWidth: 1
    },
    // {
    //   label: 'Heat[Kg]',
    //   data: [0, 536, 580, 693, 756, 796],
    //   backgroundColor : [
    //     'rgba(200, 201, 122, 0.4)',
        
    //   ],
    //   borderColor : [
    //     'rgba(200, 201, 122, 1)',
        
    //   ],
    //   borderWidth: 1
    // },
  ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        
      }
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Frying Time[minutes]'
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Temperature'
        }
      }
    }
  },
});
}, 49000);


// Effect mash moisture content on throughput capacity and the mass of gari obtained

setInterval(() => {
  const ctx5 = document.getElementById('pullover');

new Chart(ctx5, {
  type: 'bar',
  data: {
    labels: [1.17, 1.33 , 1.55, 1.77, 1.92, 2.17],
    datasets: [{
      label: 'Moisture Content(%)',
      data: [44.12, 45.00, 46.99, 48.99, 50.31, 54.94],
      backgroundColor : [
        // 'rgba(255, 206, 86, 0.1)',
        'rgba(83.14, 94.51, 97.65, 0.7)',
      ],
      borderColor : [
        'rgba(83.14, 94.51, 97.65, 1)',
        // 'rgba(255, 206, 86, 0.5)',
        
      ],
      borderWidth: 1,
    },
    {
      label: 'Throughput Capacity(kg/hr)',
      data: [6.6, 5.4, 4.2, 3.6, 3.0, 2.4],
      backgroundColor : [
        'rgba(255, 0, 0, 0.4)',
        
      ],
      borderColor : [
        'rgba(255, 0, 0, 1)',
        
      ],
      borderWidth: 1
    },
    {
      label: 'Mass Of Gari Obtained(kg)',
      data: [7.50, 7.00, 6.50, 6.00, 5.50, 5.00],
      backgroundColor : [
        // 'rgba(54, 162, 235, 0.6)',
        'rgba(100, 99.2, 81.6, 2)'
      ],
      borderColor : [
        'rgba(100, 99.2, 81.6, 2)'
        // 'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1
    }
  ]
  },
  options: {
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Time(hours)'
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'M.C(%), Capacity(kg/hr) and Mass(kg)'
        }
      }
    }
  }
});

}, 58000);


// Effect of mash moisture content on percentage material loss 

setInterval(() => {
  const ctx6 = document.getElementById('pull');

  new Chart(ctx6, {
    type: 'bar',
    data: {
      labels: [1.17, 1.33 , 1.55, 1.77, 1.92, 2.17],
      datasets: [{
        label: 'Material Loss(%)',
        data: [25, 30, 35, 40, 45, 50],
        backgroundColor : [
          'rgba(255, 155, 45, 0.4)',
        ],
        borderColor : [
          'rgba(255, 155, 45, 1)',
  
        ],
        borderWidth: 1,
      },
      {
        label: 'Moisture Content(%)',
        data: [44.12, 45.00, 46.99, 48.99, 50.31, 54.94],
        backgroundColor : [
          'rgba(255, 255, 255, 0.3)',
          
        ],
        borderColor : [
          'rgba(255, 255, 255, 1)',
          
        ],
        borderWidth: 1
      },
    ]
    },
    options: {
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: 'Time(hours)'
          },
          stacked : true
        },
        y: {
          display: true,
          title: {
            display: true,
            text: 'Material Loss(%) and Mositure Content(%)'
          },
          stacked : true
        }
      }
    }
  });
    
}, 61000)
