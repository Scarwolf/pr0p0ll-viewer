import { Bar, mixins } from 'vue-chartjs';
const { reactiveProp } = mixins;

export default {
    extends: Bar,
    mixins: [reactiveProp],
    props: ['chartdata', 'options'],
    mounted () {
        this.renderChart(this.chartdata, this.options)
    }
}
