// Earning Insight
const ctx = document.getElementById('barchart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [2017, 2018, 2019, 2020, 2021, 2022],
    datasets: [{
      label: 'GreenTech Industries Limited',
      data: [0, 0, 2, 4, 16, 10],
      backgroundColor : [
        'rgba(255, 99, 132, 0.4)',
        'rgba(132, 255, 99, 0.4)',
        'rgba(99, 255, 26, 0.4)',
        'rgba(200, 269, 209, 0.4)',
        'rgba(120, 200, 132, 0.4)',
        'rgba(255, 110, 55, 0.4)',
      ],
      borderColor : [
        'rgba(255, 99, 132, 1)',
        'rgba(132, 255, 99, 1)',
        'rgba(99, 255, 26, 1)',
        'rgba(200, 269, 209, 1)',
        'rgba(120, 200, 132, 1)',
        'rgba(255, 110, 55, 1)',
      ],
      borderWidth: 1
    },
    {
      label: 'Nigerian Starch Mills Limited',
      data: [0, 4, 10, 9, 5, 7],
      backgroundColor : [
        'rgba(20, 21, 12, 0.4)',
        'rgba(122, 25, 103, 0.4)',
        'rgba(99, 205, 269, 0.4)',
        'rgba(20, 219, 199, 0.4)',
        'rgba(380, 10, 342, 0.4)',
        'rgba(255, 10, 108, 0.4)',
      ],
      borderColor : [
        'rgba(20, 21, 12, 1)',
        'rgba(122, 25, 103, 1)',
        'rgba(99, 205, 269, 1)',
        'rgba(20, 219, 199, 1)',
        'rgba(380, 10, 342, 1)',
        'rgba(255, 10, 108, 1)',
      ],
      borderWidth: 1
    },
    {
      label: 'Matna Foods Company Limited',
      data: [0, 0, 4, 3, 5, 6],
      backgroundColor : [
        'rgba(267, 182, 210, 0.4)',
        'rgba(59, 21, 2, 0.4)',
        'rgba(183, 11, 301, 0.4)',
        'rgba(34, 192, 21, 0.4)',
        'rgba(24, 75, 231, 0.4)',
        'rgba(211, 222, 182, 0.4)',
      ],
      borderColor : [
        'rgba(267, 182, 210, 1)',
        'rgba(59, 21, 2, 1)',
        'rgba(183, 11, 301, 1)',
        'rgba(34, 192, 21, 1)',
        'rgba(24, 75, 231, 1)',
        'rgba(211, 222, 182, 1)',
      ],
      borderWidth: 1
    },
    {
      label: 'Plstary international Limited',
      data: [10, 8, 5, 6, 13, 10],
      backgroundColor : [
        'rgba(211, 42, 102, 0.4)',
        'rgba(25, 121, 34, 0.4)',
        'rgba(25, 12, 42, 0.4)',
        'rgba(142, 263, 255, 0.4)',
        'rgba(132, 26, 84, 0.4)',
        'rgba(93, 53, 97, 0.4)',
      ],
      borderColor : [
        'rgba(211, 42, 102, 1)',
        'rgba(25, 121, 34, 1)',
        'rgba(25, 12, 42, 1)',
        'rgba(142, 263, 255, 1)',
        'rgba(132, 26, 84, 1)',
        'rgba(93, 53, 97, 1)',
      ],
      borderWidth: 1
    },
    {
      label: 'Thai Farm International',
      data: [0, 7.6, 8.1, 9.1, 10.2, 0],
      backgroundColor : [
        'rgba(192, 142, 12, 0.4)',
        'rgba(251, 11, 24, 0.4)',
        'rgba(250, 112, 22, 0.4)',
        'rgba(192, 163, 25, 0.4)',
        'rgba(112, 216, 54, 0.4)',
        'rgba(193, 23, 91, 0.4)',
      ],
      borderColor : [
        'rgba(192, 142, 12, 1)',
        'rgba(251, 11, 24, 1)',
        'rgba(250, 112, 22, 1)',
        'rgba(192, 163, 25, 1)',
        'rgba(112, 216, 54, 1)',
        'rgba(193, 23, 91, 1)',
      ],
      borderWidth: 1
    }]
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
          text: 'Year'
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Revenue'
        }
      }
    }
  },
  
  
});

// Plstary international Limited of Farmer annual net income against cassava price 

const ctx1 = document.getElementById('doughnut');

new Chart(ctx1, {
  type: 'line',
  data: {
    labels: [5, 10, 15, 20, 25],
    datasets: [{
      label: 'SDM',
      data: [200, 400, 600, 800, 1000],
      backgroundColor : [
        'rgba(255, 99, 132, 0.4)',
        
      ],
      borderColor : [
        'rgba(255, 99, 132, 1)',
        
      ],
      borderWidth: 1
    },
    {
      label: 'Baseline',
      data: [100, 300, 500, 700, 900],
      backgroundColor : [
        'rgba(20, 21, 12, 0.4)',
        
      ],
      borderColor : [
        'rgba(20, 21, 12, 1)',
        
      ],
      borderWidth: 1
    },
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
          text: 'Cassava Price(NGN/month)'
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Net Income(NGN/year)'
        }
      }
    }
  },
});


// Thai Farm International for Farm income forecast by source of growth

Chart.register(ChartjsPluginStacked100.default);

// SETUP
const data = {
  labels: ['Fruits', 'Rubber', 'Cassava', 'Corn', 'Sugarcane', 'Rice', 'Oil Palm', 'Livestock', 'farm Income'],
  datasets: [{
          label: 'Agricultural Price',
          data: [-1, 0.4, 0.7, 0.5, 0.7, 1.2, 2.3, 4.1, 9.2],
          backgroundColor : [
            'rgba(20, 111, 160, 0.6)',
            
          ],
          borderColor : [
            'rgba(20, 111, 160, 1)',
            
          ],
          borderWidth: 1
        },
        {
          label: 'Agricultural Output',
          data: [-2, -0.1, -0.5, 0.8, 1.5, 2.3, 2.6, -1.2,-0.2],
          backgroundColor : [
            'rgba(234, 132, 12, 0.6)',

            
          ],
          borderColor : [
            'rgba(234, 132, 12, 1)',

            
          ],
          borderWidth: 1
        },
        ]
  
};

const config = {
  type: 'bar',
  data,
  options: {
    plugins : {
      stacked100 : {
        enable: true,
        precision: 3
      }
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Agricultural Economics'
        }
      },
      y: {
        beginAtZero : true,
        display: true,
        title: {
          display: true,
          text: '%YoY'
        }
      },
      // y: {
        
      // }
    }
  }
}

// RENDER INIT BLOCK
const myChart = new Chart(
  document.getElementById('springchart'),
  config
)