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
                <div class="card bg-settings text-white">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6">
                                <h5 class="card-title">Einstellungen</h5>
                                <div class="form-check" v-if="hasDescription">
                                    <input class="form-check-input" type="checkbox" :id="'options-detail-' + data.id" v-model="questionOptions.showDescription">
                                    <label class="form-check-label" :for="'options-detail-' + data.id">
                                        Beschreibung dieser Frage anzeigen?
                                    </label>
                                </div>
                                <i v-else>Keine besonderen Einstellungen verfügbar.</i>
                            </div>

                            <div class="col-md-6 text-right">
                                <h5 class="card-title">Diagramm-Typ</h5>
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

                        <div class="row mt-2">
                            <div class="col-md-12 text-center">
                                <h5>Antwortmöglichkeiten anzeigen/ausblenden</h5>
                                <button class="btn btn-sm mr-1 mt-1"
                                        :class="getHideAnswerButtonClass(answer)"
                                        v-for="answer in answers"
                                        @click="toggleShowAnswer(answer)">
                                    {{ answer[1].title }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row" v-if="questionOptions.showDescription">
            <div class="col-md-12 text-center">
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
                },
                hiddenAnswers: []
            }
        },
        mounted() {
            this.renderChart();
        },
        methods: {
            toggleShowAnswer(answer) {
                let found = this.hiddenAnswers.indexOf(answer);
                // Not in array
                if(found === -1) {
                    this.hiddenAnswers.push(answer);
                } else {
                    this.hiddenAnswers = this.hiddenAnswers.filter(a => a !== answer);
                }

                this.$nextTick(function() {
                    this.renderChart();
                });
            },
            isAnswerHidden(answer) {
                  return this.hiddenAnswers.indexOf(answer) !== -1;
            },
            getHideAnswerButtonClass(answer) {
                if(this.isAnswerHidden(answer))
                    return 'btn-dark';

                return 'btn-primary';
            },
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
                    labels: this.chartLabels(),
                    datasets: [this.chartDataSets]
                };

                this.chartDataPie =  {
                    labels: this.chartLabels('pie'),
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
            },
            chartLabels(chartType = 'bar') {
                let vm = this;
                return this.answers.filter(answer => {
                    if(!vm.isAnswerHidden(answer))
                        return answer;
                }).map(answer => {
                    if(chartType !== 'bar')
                        return this.decodeHTML(answer[1].title);

                    return vm.formatLabel(this.decodeHTML(answer[1].title), 15);
                });
            },
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
            chartDataSets() {
                let vm = this;
                let results = this.answers.filter(answer => {
                    if(!vm.isAnswerHidden(answer))
                        return answer;
                }).map(answer => {
                    return this.decodeHTML(answer[1].result.total);
                });

                return {
                    label: "Stimmen",
                    backgroundColor: this.options.barColor,
                    data: results
                };
            },
            chartDataSetsForPieChart() {
                let vm = this;
                let results = this.answers.filter(answer => {
                    if(!vm.isAnswerHidden(answer))
                        return answer;
                }).map(answer => {
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
