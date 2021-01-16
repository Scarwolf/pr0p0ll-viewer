<template>
    <span class="current-color" :style="'background-color: ' + colorValue" @click="togglePicker()">
            <chrome-picker :value="colors" @input="updateFromPicker" v-if="displayPicker" />
    </span>
</template>

<script>
    import ChromePicker from 'vue-color/src/components/Chrome';

    export default {
        name: "ColorPicker",
        components: {ChromePicker},
        props: ['color'],
        data() {
            return {
                colors: {
                    hex: '#000000',
                },
                colorValue: '',
                displayPicker: false,
            }
        },
        mounted() {
            this.setColor(this.color || '#ffffff');
        },
        methods: {
            setColor(color) {
                this.updateColors(color);
                this.colorValue = color;
            },
            updateColors(color) {
                if(color.slice(0, 1) === '#') {
                    this.colors = {
                        hex: color
                    };
                }
                else if(color.slice(0, 4) === 'rgba') {
                    var rgba = color.replace(/^rgba?\(|\s+|\)$/g,'').split(','),
                        hex = '#' + ((1 << 24) + (parseInt(rgba[0]) << 16) + (parseInt(rgba[1]) << 8) + parseInt(rgba[2])).toString(16).slice(1);
                    this.colors = {
                        hex: hex,
                        a: rgba[3],
                    }
                }
            },
            showPicker() {
                document.addEventListener('click', this.documentClick);
                this.displayPicker = true;
            },
            hidePicker() {
                document.removeEventListener('click', this.documentClick);
                this.displayPicker = false;
            },
            togglePicker() {
                this.displayPicker ? this.hidePicker() : this.showPicker();
            },
            updateFromPicker(color) {
                this.colors = color;
                if(color.rgba.a === 1) {
                    this.colorValue = color.hex;
                }
                else {
                    this.colorValue = 'rgba(' + color.rgba.r + ', ' + color.rgba.g + ', ' + color.rgba.b + ', ' + color.rgba.a + ')';
                }
                //this.$parent.rerender();
            },
            documentClick(e) {
                let el = this.$refs.colorpicker,
                    target = e.target;
                if(el !== target && !el.contains(target)) {
                    this.hidePicker()
                }
            }
        },
        watch: {
            colorValue(val) {
                if(val) {
                    this.updateColors(val);
                    this.$emit('input', val);
                }
            }
        },
    }
</script>

<style scoped>
    .current-color {
        display: inline-block;
        width: 16px;
        height: 16px;
        background-color: #000;
        cursor: pointer;
    }

    .input-group-append {
        padding: 5px;
        background-color: lightgray;
    }
</style>
