<script setup>
const props = defineProps({ height: { type: String } })
</script>

<template>
    <div class="m-8 flex justify-center items-center overflow-hidden" :style="{ height: props.height }">
        <slot />
    </div>
</template>