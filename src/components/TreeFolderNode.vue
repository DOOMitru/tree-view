<script setup lang="ts">
import { computed } from 'vue'
import type { TreeNode, TreeNodePropType } from './types'

import TreeView from './TreeView.vue'
import FileAdd from './icons/FileAdd.vue'
import FolderAdd from './icons/FolderAdd.vue'
import MinusIcon from './icons/MinusIcon.vue'
import ArrowDown from './icons/ArrowDown.vue'
import ArrowRight from './icons/ArrowRight.vue'
import FolderOpen from './icons/FolderOpen.vue'
import CircleClose from './icons/CircleClose.vue'
import FolderClosed from './icons/FolderClosed.vue'

const props = defineProps<TreeNodePropType>()

const emit = defineEmits<{
    (e: 'toggle', node: TreeNode): void
    (e: 'add', type: 'folder' | 'file', node: TreeNode): void
}>()

const hasChildren = computed(() => {
    const len = props.item?.children?.length ?? 0
    return len > 0
})
const isOpen = computed(() => {
    return props.item.open
})
const name = computed(() => {
    return props.item.name
})
const style = computed(() => {
    return `margin-left: ${30 * props.level}px;`
})
const add = (type: 'folder' | 'file', node: TreeNode) => {
    emit('add', type, node)
}
const toggle = (node: TreeNode) => {
    emit('toggle', node)
}
</script>

<template>
    <div class="row" :style="style">
        <div class="arrow hoverable" @click="emit('toggle', item)" v-if="hasChildren">
            <ArrowDown v-if="isOpen"></ArrowDown>
            <ArrowRight v-else></ArrowRight>
        </div>
        <div class="arrow" v-else>
            <MinusIcon></MinusIcon>
        </div>
        <div class="icon">
            <FolderOpen v-if="hasChildren && isOpen"></FolderOpen>
            <FolderClosed v-else></FolderClosed>
        </div>
        <div class="name">
            {{ name }}
        </div>
        <div class="add hoverable" @click="emit('add', 'file', item)">
            <FileAdd></FileAdd>
        </div>
        <div class="add hoverable" @click="emit('add', 'folder', item)">
            <FolderAdd></FolderAdd>
        </div>
        <div class="remove hoverable">
            <CircleClose></CircleClose>
        </div>
    </div>
    <TreeView
        v-if="hasChildren && isOpen"
        :items="item.children"
        :level="level + 1"
        @add="add"
        @toggle="toggle"
    ></TreeView>
</template>

<style scoped>
.hoverable:hover {
    cursor: pointer;
}
.arrow {
    display: flex;
    align-items: center;
}
.add {
    display: flex;
    align-items: center;
}
.remove {
    display: flex;
    align-items: center;
}
.icon {
    display: flex;
    align-items: center;
}
.row {
    padding: 5px;
    grid-area: b;
    display: grid;
    gap: 0px 8px;
    align-items: center;
    font-family: monospace;
    grid-template-areas:
        'x x x x x x'
        'b b b b b b';
    grid-template-columns: 24px 24px auto 24px 24px 24px;
}
</style>
