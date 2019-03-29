<template>
    <div>
        <h3 class="text-center">Frage: {{ data.title }}</h3>
        <div class="row">
            <div class="col-md-12">
                <bar :chart-data="chartData"></bar>
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
                chartData: null
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
            formatLabel(str, maxwidth){
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
                    return vm.formatLabel(answer[1].title, 15);
                });
            },
            chartDataSets() {
                let results = this.answers.map(answer => {
                    return answer[1].result.total;
                });

                return {
                    label: "Stimmen",
                    backgroundColor: '#f87979',
                    data: results
                };
            }
        },
    }
</script>

<style scoped>

</style>
