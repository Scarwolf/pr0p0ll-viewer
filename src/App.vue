<template>
  <div id="app">
      <div class="text-white bg-dark p-2 text-center">
          Fragen? Anregungen? Schreib mir: <a href="https://pr0gramm.com/user/PoTTii" target="_blank">@PoTTii</a>
          <div v-if="pollDataLoaded">
              <div class="row mt-4">
                  <div class="col-md-12 text-center">
                      <div class="btn-group">
                          <button class="btn btn-primary" @click="reset">Andere Umfrage auswerten</button>
                          <button class="btn btn-primary" @click="downloadScreenshot">Screenshot herunterladen</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div class="container">
          <div class="row mt-4" v-if="!pollDataLoaded">
              <div class="col-md-12">
                  <h1 class="text-center">Pr0p0ll Viewer</h1>
                  <h3>Howto: JSON-Code von pr0p0ll kopieren</h3>
                  <p>Um dieses Tool nutzen zu können musst du nachdem deine Umfrage beendet ist den JSON-Code kopieren.</p>
                  <p>Du findest diesen indem du bei pr0p0ll auf "Eigene" gehst und anschliessend bei der gewünschten Umfrage auf "Ergebnisse ansehen".</p>
                  <p>Klicke danach auf "Ergebnisse ansehen" und kopiere den ganzen Code den du siehst mit STRG + A und STRG + C.</p>
                  <p>Füge den Code im unteren Feld ein um deine Ergebnisse in Charts zu sehen.</p>
                  <hr>
                  <label for="jsonInput">Füge hier deinen JSON-Code von pr0p0ll ein:</label>
                  <textarea  id="jsonInput" cols="30" rows="10" class="form-control" v-model="pollDataString"></textarea>
                  <button class="btn btn-primary mt-4" @click="loadPollData">Laden</button>
              </div>
          </div>

          <div v-else>
              <div class="row mt-4" id="screenshotContainer">
                  <div class="col-md-12">
                      <poll-info :data="pollData.info" v-if="pollData.info"></poll-info>
                      <hr>
                      <question :data="question" v-for="question in questions" :key="question.id"></question>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
    import pollInfo from './components/pollinfo';
    import question from './components/question';
    import html2canvas from 'html2canvas';

    export default {
        name: 'app',
        components: {
            pollInfo, question
        },
        data() {
            return {
                pollData: {},
                pollDataString: "",
                pollDataLoaded: false,
            }
        },
        computed: {
            questions() {
                let obj = JSON.parse(JSON.stringify(this.pollData));
                delete obj.info;
                return obj;
            }
        },
        methods: {
            reset() {
                this.pollData = {};
                this.pollDataString = "";
                this.pollDataLoaded = false;
            },
            downloadScreenshot() {
                html2canvas(document.querySelector("#screenshotContainer"), {backgroundColor: '#161618'}).then(canvas => {
                    let link = document.createElement('a');
                    link.download = "auswertung.png";
                    link.href = canvas.toDataURL('image/png');
                    link.click();
                });
            },
            async checkPollData() {
                if(this.pollDataString.length < 1 || !this.isValidJson(this.pollDataString))
                    return false;

                this.pollData = JSON.parse(this.pollDataString);
                return true;
            },
            loadPollData() {
                const vm = this;
                return this.checkPollData().then(() => {
                    let obj = this.pollData;
                    if(typeof obj === 'object'){
                        this.pollDataLoaded = true;
                        return true;
                    }
                    throw 'error';
                }).catch(() => {
                    return vm.reportInvalidJson();
                });
            },
            reportInvalidJson() {
                this.pollDataString = "";
                this.pollDataLoaded = false;
                alert("Dein eingefügte JSON Code ist ungültig. Vergewissere dich dass du ALLES kopiert hast.");
                throw "error";
            },
            isValidJson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    this.reportInvalidJson();
                    return false;
                }
                return true;
            }
        }
    }
</script>
