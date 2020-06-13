<template>
  <div id="app">

      <!-- Screenshot Modal -->
      <modal id="screenModal" v-cloak>
          <template slot="title">
              Screenshot herunterladen
          </template>

          <div slot="body">
             <div class="text-center">

                 <div class="alert alert-info">
                     Rechtsklicke auf das Bild -> Speichern unter. Das Bild ist optimiert um auf Pr0 hochgeladen zu werden.<br>
                     <strong>Bitte überprüft vor dem Hochladen eure Ausgabe auf Fehler. Im Falle eines Fehlers in eurem Ausgabe-Bild hafte ich nicht für die verlorenen Blussis :(</strong>
                 </div>

                 <img :src="screenShotToDownload" alt="Canvas">
             </div>
          </div>
      </modal>

      <section id="header">
          <div class="text-white bg-secondary">
              <div class="container text-center">
                  <span class="badge badge-danger">FIX</span>
                  <span>&nbsp;Das Problem mit dem leeren Platz am Ende eines Bildes sollte nun behoben sein.</span>
                  <br>
                  <span class="badge badge-info">NEU</span>
                  <span>&nbsp;Es kann nun eine Schriftart ausgewählt werden. Probierts doch mal aus!</span>
              </div>
          </div>

          <div class="text-white bg-dark p-2 shadow rounded">
              <div class="container">
                  <div class="row">
                      <div class="col-md-6"><span>Fragen? Anregungen? Schreib mir: <a href="https://pr0gramm.com/user/PoTTii" target="_blank">@PoTTii</a></span></div>
                      <div class="col-md-6 text-right">
                          v1.10 &nbsp;
                          <a href="https://github.com/Scarwolf/pr0p0ll-viewer" target="_blank">
                              <img src="./assets/github/GitHub-Mark-Light-32px.png" alt="Repo auf GitHub">
                          </a>
                      </div>
                  </div>
              </div>
              <div v-if="pollDataLoaded">
                  <div class="container">

                      <div class="row mt-3">
                          <div class="col-md-12">
                              <div class="card bg-settings text-white h-100">
                                  <div class="card-body">
                                      <h5 class="card-title">
                                          Einstellungen
                                      </h5>

                                      <div class="row">
                                          <div class="col-md-6">
                                              <div class="form-check" v-if="pollData.info.description !== null">
                                                  <input class="form-check-input" type="checkbox" id="options-poll-description" v-model="options.showPollDesc">
                                                  <label class="form-check-label" for="options-poll-description">
                                                      Beschreibung der Umfrage anzeigen?
                                                  </label>
                                              </div>

                                              <div class="form-check">
                                                  <input class="form-check-input" type="checkbox" id="options-detail" v-model="options.details">
                                                  <label class="form-check-label" for="options-detail">
                                                      Antwort-Details anzeigen
                                                  </label>
                                              </div>

                                              <br>
                                              <label>Schriftart: &nbsp;</label>
                                              <font-picker :api-key="'AIzaSyDvuZYzEpWOWVuF1FqPIvFxRqhJBttcmdg'" :options="options" :active-font="activeFont" @change="updateFontPicker"></font-picker>
                                          </div>

                                          <div class="col-md-6 text-right">
                                              <button class="btn btn-dark" @click="downloadScreenshot">
                                                  <fa-icon icon="camera"></fa-icon>
                                                  Screenshot herunterladen
                                              </button>
                                              &nbsp;
                                              <button class="btn btn-dark" @click="reset">
                                                  <fa-icon icon="undo"></fa-icon>
                                                  Andere Umfrage auswerten
                                              </button>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>


                      <div class="row mt-3 text-center pb-2">
                          <div class="col-md-3">
                              <div class="card bg-settings text-white h-100">
                                  <div class="card-body">
                                      <h5 class="card-title">
                                          Farbe für Label
                                      </h5>
                                      <swatches v-model="options.labelFontColor" show-fallback background-color="#343A40" :row-length="6"></swatches>
                                  </div>
                                  <div class="card-footer">
                                      <button class="btn btn-sm btn-dark mouseHover" @click="options.labelFontColor = '#fff'">Auf Standard setzen</button>
                                  </div>
                              </div>
                          </div>
                          <div class="col-md-3">
                              <div class="card bg-settings text-white h-100">
                                  <div class="card-body">
                                      <h5 class="card-title">
                                          Balkenfarbe
                                      </h5>
                                      <swatches v-model="options.barColor" show-fallback background-color="#343A40" :row-length="6"></swatches>
                                      <span class="text-muted">Nur Balkendiagramm</span>
                                  </div>
                                  <div class="card-footer">
                                      <button class="btn btn-sm btn-dark mouseHover" @click="options.barColor = '#ee4d2e'">Auf Standard setzen</button>
                                  </div>
                              </div>
                          </div>
                          <div class="col-md-3">
                              <div class="card bg-settings text-white h-100">
                                  <div class="card-body">
                                      <h5 class="card-title">
                                          Hintergrundfarbe
                                      </h5>
                                      <swatches v-model="options.bgColor" show-fallback background-color="#343A40" :row-length="6"></swatches>
                                  </div>
                                  <div class="card-footer">
                                      <button class="btn btn-sm btn-dark mouseHover" @click="options.bgColor = '#161618'">Auf Standard setzen</button>
                                  </div>
                              </div>
                          </div>
                          <div class="col-md-3">
                              <div class="card bg-settings text-white h-100">
                                  <div class="card-body">
                                      <h5 class="card-title">
                                          Titelfarbe
                                      </h5>
                                      <swatches v-model="options.titleColor" show-fallback background-color="#343A40" :row-length="6"></swatches>
                                  </div>
                                  <div class="card-footer">
                                      <button class="btn btn-sm btn-dark mouseHover" @click="options.titleColor = '#ee4d2e'">Auf Standard setzen</button>
                                  </div>
                              </div>
                          </div>
                      </div>

                  </div>
              </div>
          </div>
      </section>

      <div class="container" v-if="!pollDataLoaded">
          <div class="row mt-4" >
              <div class="col-md-12 text-center">
                  <div class="row">
                      <div class="col-md-12">
                          <img src="./assets/logo.png" alt="pr0p0ll-Viewer Logo" class="img-fluid">
                          <h1>Pr0p0ll Viewer</h1>
                      </div>
                  </div>

                  <div class="row">
                      <div class="col-md-12">
                          <button class="btn btn-secondary" @click="showTutorial = !showTutorial">
                              Erklärungen / Turorial {{ showTutorial ? 'ausblenden' : 'einblenden' }}
                          </button>
                      </div>
                  </div>

                  <div class="row mt-4" v-if="showTutorial">
                      <div class="col-md-8 offset-md-2 text-center instructions">
                          <h3>Howto: JSON-Code von pr0p0ll kopieren</h3>
                          <div class="embed-responsive embed-responsive-16by9 mb-3">
                              <video controls="" class="embed-responsive-item">
                                  <source src="tutorial.mp4" type="video/mp4">
                              </video>
                          </div>
                          <p>Um dieses Tool nutzen zu können musst du nachdem deine Umfrage beendet ist den JSON-Code kopieren.</p>
                          <p>Du findest diesen indem du bei pr0p0ll auf "Eigene" gehst und anschliessend bei der gewünschten Umfrage auf "Ergebnisse ansehen".</p>
                          <p>Klicke danach auf "Ansehen" neben "Ergebnis-JSON" und kopiere den ganzen Code den du siehst mit STRG + A und STRG + C.</p>
                          <p>Füge den Code im unteren Feld ein um deine Ergebnisse in Charts zu sehen.</p>
                      </div>
                  </div>

                  <div class="row mt-4">
                      <div class="col-md-12">
                          <label for="jsonInput">Füge hier deinen JSON-Code von pr0p0ll ein:</label>
                          <textarea  id="jsonInput" cols="30" rows="10" class="form-control" v-model="pollDataString"></textarea>
                          <button class="btn btn-primary mt-4" @click="loadPollData">Laden</button>
                          <button class="btn btn-outline-dark mt-4 ml-2 text-white" @click="loadDemo">Demo laden</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div class="container widthLimit" v-else>
          <div class="row mt-4">
              <div class="col-12" id="screenshotContainer" :style="{ backgroundColor: options.bgColor}" v-if="rendered">
                  <poll-info :data="pollData.info" v-if="pollData.info"></poll-info>
                  <question :data="question" v-for="question in questions" :key="question.id"></question>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
    import pollInfo from './components/pollinfo';
    import question from './components/question';
    import html2canvas from 'html2canvas';
    import axios from 'axios';
    import Swatches from 'vue-swatches'
    import FontPicker from 'font-picker-vue';

    export default {
        name: 'app',
        components: {
            pollInfo, question, Swatches, FontPicker
        },
        data() {
            return {
                showTutorial: false,
                isScreenshotDrawing: false,
                activeFont: 'Open Sans',

                pollData: {},
                pollDataString: "",
                pollDataLoaded: false,
                options: {
                    showPollDesc: true,
                    details: false,
                    labelFontColor: '#fff',
                    bgColor: '#161618',
                    titleColor: '#ee4d2e',
                    barColor: '#ee4d2e'
                },
                screenShotToDownload: '',
                rendered: false
            }
        },
        computed: {
            questions() {
                let obj = JSON.parse(JSON.stringify(this.pollData));
                delete obj.info;
                return obj;
            },
            setTitleColor() {
                return 'color: ' + this.options.titleColor + ';';
            }
        },
        watch: {
            labelColorComputed() {
                this.rerender();
            },
            barColorComputed() {
                this.rerender();
            }
        },
        methods: {
            updateFontPicker(e) {
                this.activeFont = e.family;
            },

            loadDemo() {
                let vm = this;

                axios
                    .get('demo.json')
                    .then(function (response) {
                    vm.pollDataString = JSON.stringify(response.data);
                    vm.loadPollData();
                })
                    // eslint-disable-next-line
                    .catch(function (error) {
                        alert("Demo konnte nicht geladen werden. Sorry ¯\\_(ツ)_/¯");
                    })
            },
            rerender() {
                this.rendered = false;
                this.$nextTick(() => {
                    this.rendered = true;
                });
            },
            reset() {
                this.pollData = {};
                this.pollDataString = "";
                this.pollDataLoaded = false;
                this.rendered = false;

                this.screenShotToDownload = '';
            },
            downloadScreenshot() {
                this.isScreenshotDrawing = true;
                let vm = this;

                this.$nextTick(() => {
                    html2canvas(document.querySelector("#screenshotContainer"), {
                        backgroundColor: this.options.bgColor,
                        scrollX: 0,
                        scrollY: 0,
                    }).then(canvas => {
                        vm.screenShotToDownload = canvas.toDataURL('image/png');
                        vm.isScreenshotDrawing = false;
                        // eslint-disable-next-line
                        VoerroModal.show('screenModal');
                    });
                })
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
                        this.rendered = true;
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