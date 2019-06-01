<template>
    <div class="mt-5">
        <h3 class="text-center" :style="$parent.setTitleColor">Frage: {{ this.decodeHTML(data.title) }}</h3>
        <div class="row mt-3">
            <div class="col-md-12 text-center">
                <h6>
                    Zu dieser Frage wurden {{ totalParticipants }} Stimmen abgegeben.
                    <span v-if="data.answertype === 'single'">(Eine Stimme pro User)</span>
                    <span v-if="data.answertype === 'multi'">(Mehrere Stimmen pro User)</span>
                </h6>
            </div>
        </div>
        <div class="row mt-3" data-html2canvas-ignore>
            <div class="col-md-12 mb-4">
                <div class="row question-settings">

                    <div class="col-md-6">
                        <h5>Einstellungen</h5>
                        <div class="form-check" v-if="hasDescription">
                            <input class="form-check-input" type="checkbox" :id="'options-detail-' + data.id" v-model="questionOptions.showDescription">
                            <label class="form-check-label" :for="'options-detail-' + data.id">
                                Beschreibung dieser Frage anzeigen?
                            </label>
                        </div>
                        <i v-else>Keine besonderen Einstellungen verfügbar.</i>
                    </div>

                    <div class="col-md-6 text-right">
                        <h5>Diagramm-Typ</h5>
                        <div class="btn-group">
                            <button class="btn btn-sm"
                                    :disabled="isPieChartDisabled"
                                    :class="getButtonClassForChartType('pie')"
                                    @click="setChartType('pie')"
                                    title="Kuchendiagramm">
                                <fa-icon icon="chart-pie"></fa-icon>
                            </button>
                            <button class="btn btn-sm"
                                    :class="getButtonClassForChartType('bar')"
                                    @click="setChartType('bar')"
                                    title="Balkendiagramm">
                                <fa-icon icon="chart-bar"></fa-icon>
                            </button>
                        </div>
                        <span v-if="isPieChartDisabled" class="text-muted">
                            <br>
                            Kuchendiagramm nur verfügbar bei maximal 8 Antwortmöglichkeiten.
                        </span>
                    </div>

                </div>


            </div>
           <div class="col-md-12 text-center" v-if="questionOptions.showDescription">
               {{ getDescription }}
           </div>
        </div>
        <div class="row mt-3" v-show="options.details">
            <div class="col-md-12">
                <div class="detailBox">
                    <div class="row">
                        <div class="col-md-12 text-center">
                            <h4>Abgegebene Stimmen</h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-2 offset-md-3">
                            <strong class="text-primary">Nach Geschlecht:</strong><br>
                            <dl v-for="(value, key) in participantsByGender" class="row mt-0 mb-0" :key="key">
                                <dt class="col-md-6">
                                    {{ key.toUpperCase() }}:
                                </dt>
                                <dd class="col-md-6 text-right mt-0 mb-0">
                                    <span class="col-sm-6">{{ value }}</span>
                                </dd>
                            </dl>
                        </div>
                        <div class="col-md-2">
                            <strong class="text-primary">Nach Altersgruppe:</strong><br>
                            <dl v-for="(value, key) in participantsByAge" class="row mt-0 mb-0" :key="key">
                                <dt class="col-md-6">
                                    {{ decodeHTML(key) }}:
                                </dt>
                                <dd class="col-md-6 text-right mt-0 mb-0">
                                    <span class="col-sm-6">{{ value }}</span>
                                </dd>
                            </dl>
                        </div>
                        <div class="col-md-2">
                            <strong class="text-primary">Nach Land:</strong><br>
                            <dl v-for="(value, key) in participantsByCountry" class="row mt-0 mb-0" :key="key">
                                <dt class="col-md-6">
                                    {{ key.toUpperCase() }}:
                                </dt>
                                <dd class="col-md-6 text-right mt-0 mb-0">
                                    <span class="col-sm-6">{{ value }}</span>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-md-12">
                <div  v-show="getChartType() === 'bar'">
                    <bar
                            :chart-data="chartData"
                            :labelFontColor="this.$parent.options.labelFontColor"
                            :height="500"
                            :width="1052"></bar>
                </div>

                <div v-show="getChartType() === 'pie' && !isPieChartDisabled">
                    <pie
                            :chart-data="chartDataPie"
                            :labelFontColor="this.$parent.options.labelFontColor"
                            :height="500"
                            :width="1052"></pie>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Bar from './charts/bar.js';
    import Pie from './charts/pie.js';

    export default {
        name: "question",
        props: ['data'],
        components: { Bar, Pie },
        data() {
            return {
                chartData: null,
                chartDataPie: null,
                questionOptions: {
                    showDescription: true,
                    chartType: 'bar'
                }
            }
        },
        mounted() {
            this.renderChart();
        },
        methods: {
            getButtonClassForChartType(type) {
                if(type === 'pie'){
                    if(this.isPieChartDisabled) {
                        return 'btn-outline-primary disabled';
                    }
                }

                return this.getChartType() === type ? 'btn-primary' : 'btn-outline-primary';
            },
            setChartType(type) {
                this.questionOptions.chartType = type;
            },
            getChartType() {
                return this.questionOptions.chartType;
            },
            renderChart() {
                this.chartData =  {
                    labels: this.chartLabels,
                    datasets: [this.chartDataSets]
                };

                this.chartDataPie =  {
                    labels: this.chartLabels,
                    datasets: [this.chartDataSetsForPieChart]
                };
            },
            formatLabel(str, maxwidth){
                str = this.decodeHTML(str);
                var sections = [];
                var words = str.split(" ");
                var temp = "";

                words.forEach(function(item, index){
                    if(temp.length > 0)
                    {
                        var concat = temp + ' ' + item;

                        if(concat.length > maxwidth){
                            sections.push(temp);
                            temp = "";
                        }
                        else{
                            if(index == (words.length-1))
                            {
                                sections.push(concat);
                                return;
                            }
                            else{
                                temp = concat;
                                return;
                            }
                        }
                    }

                    if(index == (words.length-1))
                    {
                        sections.push(item);
                        return;
                    }

                    if(item.length < maxwidth) {
                        temp = item;
                    }
                    else {
                        sections.push(item);
                    }

                });

                return sections;
            }
        },
        computed: {
            isPieChartDisabled() {
                return this.answers.length > 8;
            },
            hasDescription() {
                return this.data.description !== null;
            },
            getDescription() {
                return this.data.description;
            },
            options() {
                return this.$parent.options;
            },
            totalParticipants() {
                return this.answers.map(answer => {
                    return answer[1].result.total;
                }).reduce((a,b) => a + b, 0);
            },
            participantsByAge() {
                return this.answers.map(answer => {
                    return answer[1].result.age;
                }).reduce((acc, next) => {
                    Object.entries(next).forEach(([k, v]) => acc[k] = v + (acc[k] || 0));
                    return acc;
                }, {});
            },
            participantsByCountry() {
                return this.answers.map(answer => {
                    return answer[1].result.country;
                }).reduce((acc, next) => {
                    Object.entries(next).forEach(([k, v]) => acc[k] = v + (acc[k] || 0));
                    return acc;
                }, {});
            },
            participantsByGender() {
                return this.answers.map(answer => {
                    return answer[1].result.gender;
                }).reduce((acc, next) => {
                    Object.entries(next).forEach(([k, v]) => acc[k] = v + (acc[k] || 0));
                    return acc;
                }, {});
            },
            answers() {
                let obj = JSON.parse(JSON.stringify(this.data));
                let remove = ['answertype', 'description', 'id', 'index', 'title'];
                remove.forEach(item => {
                    delete obj[item];
                });
                return Object.keys(obj).map(v => [v, obj[v]]);
            },
            chartLabels() {
                let vm = this;
                return this.answers.map(answer => {
                    return vm.formatLabel(this.decodeHTML(answer[1].title), 15);
                });
            },
            chartDataSets() {
                let results = this.answers.map(answer => {
                    return this.decodeHTML(answer[1].result.total);
                });

                return {
                    label: "Stimmen",
                    backgroundColor: this.options.barColor,
                    data: results
                };
            },
            chartDataSetsForPieChart() {
                let results = this.answers.map(answer => {
                    return this.decodeHTML(answer[1].result.total);
                });

                return {
                    label: "Stimmen",
                    backgroundColor: [
                        '#ee4d2e',
                        '#10366f',
                        '#bfbc06',
                        '#008fff',
                        '#ff0082',
                        '#1db992',
                        '#c52b2f',
                        '#addc8d'
                    ],
                    data: results
                };
            }
        },
    }
</script>

<style scoped>

</style>
