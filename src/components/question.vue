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
        <div class="row mt-3" v-if="hasDescription">
            <div class="col-md-12 text-center" data-html2canvas-ignore>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" :id="'options-detail-' + data.id" v-model="questionOptions.showDescription">
                    <label class="form-check-label" :for="'options-detail-' + data.id">
                        <strong>Beschreibung dieser Frage anzeigen?</strong>
                    </label>
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
                <bar
                        :chart-data="chartData"
                        :labelFontColor="this.$parent.options.labelFontColor"
                        :height="500"
                        :width="1052"></bar>
            </div>
        </div>
    </div>
</template>

<script>
    import Bar from './charts/bar.js';

    export default {
        name: "question",
        props: ['data'],
        components: { Bar },
        data() {
            return {
                chartData: null,
                questionOptions: {
                    showDescription: true
                }
            }
        },
        mounted() {
            this.renderChart();
        },
        methods: {
            renderChart() {
                this.chartData =  {
                    labels: this.chartLabels,
                    datasets: [this.chartDataSets]
                };
            },
            getRandomColor() {
                let letters = '0123456789ABCDEF';
                let color = '#';
                for (let i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
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
            }
        },
    }
</script>

<style scoped>

</style>
