import { Bar, mixins } from 'vue-chartjs';
const { reactiveProp } = mixins;

export default {
    extends: Bar,
    mixins: [reactiveProp],
    props: ['chartdata'],
    data() {
        return {
            options: {
                scales: {
                    xAxes: [{
                        ticks: {
                            autoSkip: false,
                            maxTicksLimit: 26
                        }
                    }]
                },
                maintainAspectRatio: false,
                responsive: true
            }
        }
    },
    mounted () {
        this.renderChart(this.chartdata, this.options)
    }
}
