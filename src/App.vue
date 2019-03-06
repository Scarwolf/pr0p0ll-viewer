<template>
  <div id="app" >
      <!-- <div class="row mt-4">
          <div class="col-md-12">
              <h1>URL eingeben:</h1>
              <input type="text" class="form-control" v-model="url">
              <button class="btn btn-primary mt-2" @click="fetchPollData">Ergenisse laden</button>
          </div>
      </div> -->

      <div class="row mt4">
          <div class="col-md-12">
              <poll-info :data="pollData.info" v-if="pollData.info"></poll-info>
              <hr>
              <question :data="question" v-for="question in questions" :key="question.id"></question>
          </div>
      </div>
  </div>
</template>

<script>
    import axios from 'axios';
    import pollInfo from './components/pollinfo';
    import question from './components/question';

    export default {
        name: 'app',
        components: {
            pollInfo, question
        },
        data() {
            return {
                pollData: {},
                url: ""
            }
        },
        mounted(){
          this.fetchPollData();
        },
        computed: {
            questions() {
                let obj = JSON.parse(JSON.stringify(this.pollData));
                delete obj.info;
                return obj;
            }
        },
        methods: {
            fetchPollData() {
                //if(!this.url || !this.url.includes("pr0p0ll.com"))
                   // return false;

                let vm = this;
                axios.get('polls/poll2.json')
                    .then(function (response) {
                        console.log(response.data);
                        vm.pollData = response.data;
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        }
    }
</script>

<style>

</style>
