<script setup lang="ts">
import type { IconPropType } from '../types.ts'

withDefaults(defineProps<IconPropType>(), {
    color: () => '#000'
})
</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
        <path
            :fill="color"
            d="m13.172 12l-4.95-4.95l1.414-1.413L16 12l-6.364 6.364l-1.414-1.415z"
        />
    </svg>
</template>
