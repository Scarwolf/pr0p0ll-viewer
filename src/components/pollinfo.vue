<template>
    <div class="text-center apply-font">
        <h1 :style="$parent.setTitleColor">pr0p0ll Umfragenauswertung</h1>

        <h2 :style="$parent.setTitleColor">
            <span class="text-white">Thema:</span>
            {{ decodeHTML(data.title) }}
        </h2>

        <p v-if="pollOptions.showPollDesc && hasDescription">
            {{ decodeHTML(data.description) }}
        </p>
    </div>
</template>

<script>
    export default {
        name: "pollinfo",
        props: [
            'data'
        ],
        computed: {
            pollOptions() {
                return this.$parent.options;
            },
            hasDescription() {
                return this.data.description !== null;
            },
        }
    }
</script>
