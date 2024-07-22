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
            d="m10.414 3l2 2H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM18 18h-4v-3h2v-2h-2v-2h2V9h-2V7h-2.414l-2-2H4v14h16V7h-4v2h2v2h-2v2h2z"
        />
    </svg>
</template>
