<script setup lang="ts">
import type { IconPropType } from '../../types.ts'

withDefaults(defineProps<IconPropType>(), {
    color: () => 'black'
})
</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
        <path
            :fill="color"
            d="M2.8 14h2.04l-.545 2.724l5.744 2.155l7.228-2.41L18.36 11H3.4l.4-2h14.96l.8-4H4.6L5 3h17l-3 15l-9 3l-8-3z"
        />
    </svg>
</template>
