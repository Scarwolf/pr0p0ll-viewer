<template>
    <div>
        <h2>{{ data.title }}</h2>
        <p class="text-white">
            {{ data.description }}
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
