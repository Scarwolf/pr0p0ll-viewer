<template>
    <div class="text-center">
        <h1>Pr0p0ll Umfragenauswertung</h1>

        <h2>
            <span class="text-white">Thema:</span>
            {{ decodeHTML(data.title) }}
        </h2>

        <p>
            {{ decodeHTML(data.description) }}
        </p>
    </div>
</template>

<script>
    export default {
        name: "pollinfo",
        props: [
            'data'
        ]
    }
</script>

<style scoped>

</style>
