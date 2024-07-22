<script setup lang="ts">
import type { IconPropType } from '../types.ts'

withDefaults(defineProps<IconPropType>(), {
    color: () => 'grey'
})
</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
        <path :fill="color" d="M5 11v2h14v-2z" />
    </svg>
</template>
