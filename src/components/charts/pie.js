import { Pie, mixins } from 'vue-chartjs';
const { reactiveProp } = mixins;

import labels from 'chartjs-plugin-labels';

export default {
    extends: Pie,
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
