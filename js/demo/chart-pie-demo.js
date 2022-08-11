// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';


// Pie Chart Example
var ctx = document.getElementById("logpie");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Logtime"],
    datasets: [{
      data: [100],
      backgroundColor: ['green'],
      // hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
      // hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 70,
    rotation: 0.85 * Math.PI,
    circumference: 1.3 * Math.PI
  },
});
var ctx = document.getElementById("eventpie");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Logtime", ""],
    datasets: [{
      data: [1/4, 3/4],
      backgroundColor: ['red', 'gray'],
      //hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
      //hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 70,
    rotation: 0.85 * Math.PI,
    circumference: 1.3 * Math.PI
  },
});
var ctx = document.getElementById("corrpie");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Correction"],
    datasets: [{
      data: [2/4, 2/4],
      backgroundColor: ['orange', 'gray'],
      // hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
      // hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 70,
    rotation: 0.85 * Math.PI,
    circumference: 1.3 * Math.PI
  },
});
var ctx = document.getElementById("pairpie");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Logtime"],
    datasets: [{
      data: [100],
      backgroundColor: ['green'],
      // hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
      // hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 70,
    rotation: 0.85 * Math.PI,
    circumference: 1.3 * Math.PI
  },
});
