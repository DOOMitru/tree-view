<script setup lang="ts">
import type { IconPropType } from '../types.ts'

withDefaults(defineProps<IconPropType>(), {
    color: () => 'grey'
})
</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
        <path :fill="color" d="m12 13.171l4.95-4.95l1.414 1.415L12 16L5.636 9.636L7.05 8.222z" />
    </svg>
</template>
