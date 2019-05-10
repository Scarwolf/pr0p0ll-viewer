import Chart from 'chart.js'
import { Bar, mixins } from 'vue-chartjs';
const { reactiveProp, reactiveData } = mixins;

/*
    Global import
 */
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.helpers.merge(Chart.defaults.global.plugins.datalabels, {
    color: '#fff',
    align: 'start',
    offset: -30
});

export default {
    extends: Bar,
    mixins: [reactiveProp, reactiveData],
    props: {
        chartData: {
            type: Object
        },
        inBarLabel: {
            type: Boolean,
            default: false
        },
        plugins: {
            type: Array
        },
        width: {
            type: Number
        },
    },
    data() {
        return {
            options: {
                maintainAspectRatio: false
            }
        }
    },
    watch: {
        inBarLabel(value) {
            Chart.defaults.global.plugins.datalabels.display = value;
            this.reRenderBarChart();
        },
    },
    mounted () {
        if(!this.inBarLabel)
            Chart.defaults.global.plugins.datalabels.display = false;

        this.renderChart(this.chartData, this.options);
    },
    methods: {
        reRenderBarChart() {
            this._data._chart.destroy();
            this.renderChart(this.chartData, this.options);
        }
    }
}
