import { Pie, mixins } from 'vue-chartjs';
const { reactiveProp } = mixins;

export default {
    extends: Pie,
    mixins: [reactiveProp],
    props: ['chartdata', 'labelFontColor'],
    data() {
        return {
            options: {
                legend: {
                    labels: {
                        fontColor: this.labelFontColor
                    }
                },
                scales: {},
                maintainAspectRatio: true,
                responsive: true,
            }
        }
    },
    mounted () {
        this.renderChart(this.chartdata, this.options)
    }
}
