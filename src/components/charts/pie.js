import { Pie, mixins } from 'vue-chartjs';
const { reactiveProp } = mixins;

import labels from 'chartjs-plugin-labels';

export default {
    extends: Pie,
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
        let vm = this;
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
                        fontColor: this.labelFontColor,
                        generateLabels: function (chart) {
                            let data = chart.data;
                            if (data.labels.length && data.datasets.length) {
                                return data.labels.map((label, i) => {
                                    let meta = chart.getDatasetMeta(0);
                                    let arc = meta.data[i];
                                    var ds = data.datasets[0];
                                    var custom = arc && arc.custom || {};
                                    var getValueAtIndexOrDefault = Chart.helpers.getValueAtIndexOrDefault;
                                    var arcOpts = chart.options.elements.arc;
                                    var fill = custom.backgroundColor ? custom.backgroundColor : getValueAtIndexOrDefault(ds.backgroundColor, i, arcOpts.backgroundColor);
                                    var stroke = custom.borderColor ? custom.borderColor : getValueAtIndexOrDefault(ds.borderColor, i, arcOpts.borderColor);
                                    var bw = custom.borderWidth ? custom.borderWidth : getValueAtIndexOrDefault(ds.borderWidth, i, arcOpts.borderWidth);
                                    let value = chart.config.data
                                        .datasets[arc._datasetIndex]
                                        .data[arc._index];

                                    if(vm.valuesAsPercentage) {
                                        let max = chart.config.data.datasets[arc._datasetIndex].data.map((num) => {
                                            return parseInt(num);
                                        }).reduce((pv, cv) => pv + cv, 0);
                                        value = (parseInt(value) * 100 / max).toFixed(2) + '% -> ' + value + ' Stimmen';
                                    }

                                    return {
                                        text: label + " (" + value + ")",
                                        fillStyle: fill,
                                        strokeStyle: stroke,
                                        lineWidth: bw,
                                        index: i
                                    };
                                });
                            }
                            return '';
                        }
                    },
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
