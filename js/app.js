document.addEventListener('DOMContentLoaded', () => {
    const alerty = document.querySelector(".alert");
    console.log(alerty);

    alerty.addEventListener('click', (e) => {
        const close = e.target.textContent;
        if (close === "x") {
            alerty.className = 'hidden';
        }
    });
    let line = document.getElementById('myLineChart').getContext('2d');
    let massPopChart = new Chart(line, {
        type: 'line', //bar, horizontalBar, pie, line, doughnut, radar, polarArea
        data: {

            labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
            datasets: [{
                label: 'Hourly',
                data: [
                    800,
                    1250,
                    1000,
                    2000,
                    1500,
                    1750,
                    1250,
                    1900,
                    2250,
                    1500,
                    2500
                ],
                tension: .5,
                backgroundColor: 'rgba(156, 139, 158, 0.5)',
                fill: 'origin'

            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    const bar = document.getElementById('myBarChart');
    const myChart2 = new Chart(bar, {
        type: 'bar',
        data: {
            labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
            datasets: [{
                label: '# of Votes',
                data: [75, 110, 175, 125, 225, 200, 100],
                backgroundColor: 'rgb(122, 138, 212)',

                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    const doughnut = document.getElementById('myDoughnutChart');
    const myChart3 = new Chart(doughnut, {
        type: 'doughnut',
        data: {
            labels: ['Red', 'Blue', 'Yellow'],
            datasets: [{
                label: '# of Votes',
                data: [3, 3, 12],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgb(122, 138, 212, 1)',
                ],

            }]
        },
        options: {
            plugins: {
                legend: {
                    display: true,
                    position: 'right'
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });




})
