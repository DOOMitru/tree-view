<script setup lang="ts">
import type { IconPropType } from '../../types.ts'

withDefaults(defineProps<IconPropType>(), {
    color: () => 'green'
})
</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
        <path
            :fill="color"
            d="M3.317 3L12 18l8.684-15H23L12 22L1 3zm4.342 0L12 10.5L16.343 3h2.316L12 14.5L5.343 3z"
        />
    </svg>
</template>
