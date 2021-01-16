import { Bar, mixins } from 'vue-chartjs';
const { reactiveProp } = mixins;

import labels from 'chartjs-plugin-labels';

export default {
    extends: Bar,
    mixins: [reactiveProp],
    props: ['chartdata', 'labelFontColor', 'valuesAsPercentage'],
    watch: {
        valuesAsPercentage(val) {
            this.options.plugins.labels.render = 'value';
            if(val) {
                this.options.plugins.labels.render = function (args) {
                    let max = 0;
                    max = args.dataset.data.map((num) => {
                        return parseInt(num);
                    }).reduce((pv, cv) => pv + cv, 0);
                    return (args.value * 100 / max).toFixed(2) + '%';
                }
            }

            this.renderChart(this.chartData, this.options);
        }
    },
    data() {
        return {
            options: {
                plugins: {
                    labels: {
                        render: 'value',
                        showActualPercentages: true,
                        precision: 2,
                        fontColor: this.labelFontColor,
                    }
                },
                legend: {
                    labels: {
                        fontColor: this.labelFontColor
                    }
                },
                scales: {
                    xAxes: [{
                        ticks: {
                            autoSkip: false,
                            maxTicksLimit: 26,
                            fontColor: this.labelFontColor
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            fontColor: this.labelFontColor,
                            suggestedMin: 0,
                        }
                    }]
                },
                maintainAspectRatio: true,
                responsive: true
            }
        }
    },
    mounted () {
        this.renderChart(this.chartdata, this.options)
    }
}
