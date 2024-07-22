<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'
import type { TreeNode, TreeNodePropType } from './types'

const TreeView = defineAsyncComponent(() => {
    return import('./TreeView.vue')
})
const FileAdd = defineAsyncComponent(() => {
    return import('./icons/FileAdd.vue')
})
const FolderAdd = defineAsyncComponent(() => {
    return import('./icons/FolderAdd.vue')
})
const MinusIcon = defineAsyncComponent(() => {
    return import('./icons/MinusIcon.vue')
})
const ArrowDown = defineAsyncComponent(() => {
    return import('./icons/ArrowDown.vue')
})
const ArrowRight = defineAsyncComponent(() => {
    return import('./icons/ArrowRight.vue')
})
const FolderOpen = defineAsyncComponent(() => {
    return import('./icons/FolderOpen.vue')
})
const CircleClose = defineAsyncComponent(() => {
    return import('./icons/CircleClose.vue')
})
const FolderClosed = defineAsyncComponent(() => {
    return import('./icons/FolderClosed.vue')
})

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
