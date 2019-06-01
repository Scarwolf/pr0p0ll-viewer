import { Bar, mixins } from 'vue-chartjs';
const { reactiveProp } = mixins;

import labels from 'chartjs-plugin-labels';

export default {
    extends: Bar,
    mixins: [reactiveProp],
    props: ['chartdata', 'labelFontColor'],
    data() {
        return {
            options: {
                plugins: {
                    labels: {
                        render: 'value',
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
