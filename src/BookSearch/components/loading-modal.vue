<template>
    <div id="loading-modal" :class="['modal', {'is-active': isLoading}]">
        <div class="modal-background"></div>

        <div class="modal-content">
            <div class="box has-text-centered">
                <p><i class="fa fa-4x fa-spinner fa-pulse"></i></p>
                <p>loading...</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'loading-modal',
        props: ['isLoading'],
    };
</script>

<style scoped>
</style>
