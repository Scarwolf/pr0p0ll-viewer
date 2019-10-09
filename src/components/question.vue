<template>
    <div class="mt-5">
        <h3 class="text-center" :style="$parent.setTitleColor">Frage: {{ this.decodeHTML(data.title) }}</h3>
        <div class="row mt-3">
            <div class="col-md-12 text-center">
                <h6>
                    Zu dieser Frage wurden {{ totalParticipants }} Stimmen abgegeben.
                    <span v-if="isSingleChoice">(Eine Stimme pro User)</span>
                    <span v-if="isMultipleChoice">(Mehrere Stimmen pro User)</span>
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
                            Kuchendiagramm nur verfügbar bei Single-Choice Fragen mit maximal 8 Antwortmöglichkeiten.
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
                hiddenAnswers: [],
            }
        },
        mounted() {
            this.renderChart();
        },
        methods: {
            /**
             * Toggles Answers. Either disables or enables.
             *
             * @returns void
             */
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

            /**
             * Determines if the given answer is Hidden.
             *
             * @returns {boolean}
             */
            isAnswerHidden(answer) {
                  return this.hiddenAnswers.indexOf(answer) !== -1;
            },

            /**
             * Returns the class of the toggle button for the given answer.
             *
             * @returns string
             */
            getHideAnswerButtonClass(answer) {
                if(this.isAnswerHidden(answer))
                    return 'btn-dark';

                return 'btn-primary';
            },

            /**
             * Returns the class of the chart type buttons for the given type.
             *
             * @returns string
             */
            getButtonClassForChartType(type) {
                if(type === 'pie'){
                    if(this.isPieChartDisabled) {
                        return 'btn-outline-primary disabled';
                    }
                }

                return this.getChartType() === type ? 'btn-primary' : 'btn-outline-primary';
            },

            /**
             * Sets the chart type for the current question.
             *
             * @returns void
             */
            setChartType(type) {
                this.questionOptions.chartType = type;
            },

            /**
             * Returns the current chart type.
             *
             * @returns string
             */
            getChartType() {
                return this.questionOptions.chartType;
            },

            /**
             *  Renders the chart.
             *
             *  @returns void
             */
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

            /**
             *  Returns the chart labels used to render.
             *
             *  @returns array
             */
            chartLabels(chartType = 'bar') {
                let vm = this;
                return this.answers.filter(answer => {
                    if(!vm.isAnswerHidden(answer))
                        return answer;
                }).map(answer => {
                    if(chartType !== 'bar')
                        return this.decodeHTML(answer[1].title);

                    return this.formatLabel(this.decodeHTML(answer[1].title), 15);
                });
            },
        },
        computed: {
            /**
             * Returns whether the question is a multiple choice question.
             *
             * @returns {boolean}
             */
            isMultipleChoice() {
                return this.data.answertype === 'multi';
            },

            /**
             * Returns whether the question is a single choice question.
             *
             * @returns {boolean}
             */
            isSingleChoice() {
                return this.data.answertype === 'single';
            },

            /**
             * Determines whether the Pie Chart should be selectable.
             *
             * @returns {boolean}
             */
            isPieChartDisabled() {
                return this.answers.length > 8 || this.isMultipleChoice;
            },

            /**
             * Determines whether the question has a description.
             *
             * @returns {boolean}
             */
            hasDescription() {
                return this.data.description !== null;
            },

            /**
             * Returns the description
             *
             * @returns {string|null}
             */
            getDescription() {
                return this.data.description;
            },

            /**
             *  Returns the Option Object.
             *
             *  @returns {object}
             */
            options() {
                return this.$parent.options;
            },

            /**
             * Returns the amount of participants to substract based on hidden Answers.
             *
             * @returns {number}
             */
            participantsToSubstract() {
                return this.hiddenAnswers.map(answer => answer[1].result.total).reduce((total, value) => total + value, 0);
            },

            /**
             * Returns the total number of participants for the question.
             *
             * @returns {number}
             */
            totalParticipants() {
                let participants = this.answers.map(answer => {
                    return answer[1].result.total;
                }).reduce((a,b) => a + b, 0);

                return participants - this.participantsToSubstract;
            },

            /**
             * Returns only Answers that are enabled.
             *
             * @returns {*}
             */
            enabledAnswers() {
                return this.answers.filter(i => !this.hiddenAnswers.includes(i));
            },

            /**
             *  Returns the amount of votes, grouped by Age groups.
             *
             *  @returns {number}
             */
            participantsByAge() {
                return this.enabledAnswers.map(answer => {
                    return answer[1].result.age;
                }).reduce((acc, next) => {
                    Object.entries(next).forEach(([k, v]) => acc[k] = v + (acc[k] || 0));
                    return acc;
                }, {});
            },

            /**
             *  Returns the amount of votes, grouped by countries.
             *
             *  @returns {number}
             */
            participantsByCountry() {
                return this.enabledAnswers.map(answer => {
                    return answer[1].result.country;
                }).reduce((acc, next) => {
                    Object.entries(next).forEach(([k, v]) => acc[k] = v + (acc[k] || 0));
                    return acc;
                }, {});
            },

            /**
             *  Returns the amount of votes, grouped by genders.
             *
             *  @returns {number}
             */
            participantsByGender() {
                return this.enabledAnswers.map(answer => {
                    return answer[1].result.gender;
                }).reduce((acc, next) => {
                    Object.entries(next).forEach(([k, v]) => acc[k] = v + (acc[k] || 0));
                    return acc;
                }, {});
            },
            /**
             * Returns all answers.
             *
             * @returns {[string, *][]}
             */
            answers() {
                let obj = JSON.parse(JSON.stringify(this.data));
                let remove = ['answertype', 'description', 'id', 'index', 'title'];
                remove.forEach(item => {
                    delete obj[item];
                });
                return Object.keys(obj).map(v => [v, obj[v]]);
            },

            /**
             * Returns the dataset for the default bar chart.
             *
             * @returns {{backgroundColor: (string), data: *, label: string}}
             */
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

            /**
             * Returns the Dataset for the Pie chart.
             *
             * @returns {{backgroundColor: *[], data: *, label: string}}
             */
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
