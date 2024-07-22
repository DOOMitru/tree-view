<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'
import type { TreeNode } from './components/types'

const TreeView = defineAsyncComponent(() => {
    return import('./components/TreeView.vue')
})

const items = ref<Array<TreeNode>>([
    {
        id: 1,
        name: 'Root',
        open: true,
        type: 'folder',
        children: []
    }
])

const getRandExtension = (): string => {
    const extensions = [
        'css',
        'pdf',
        'vue',
        'zip',
        'html',
        'txt',
        'doc',
        'docx',
        'xls',
        'xlsx',
        'jpg',
        'jpeg',
        'png',
        'gif',
        'md',
        'js',
        'ppt',
        'pptx',
        'absurd'
    ]
    return extensions[Math.floor(Math.random() * extensions.length)]
}

const buildFolder = (): TreeNode => {
    const id = Math.floor(Math.random() * 1_000_000_000)
    return {
        id,
        name: `${id}`,
        open: false,
        type: 'folder',
        children: []
    }
}

const buildFile = (): TreeNode => {
    const id = Math.floor(Math.random() * 1_000_000_000)
    return {
        id,
        name: `${id}.${getRandExtension()}`,
        type: 'file'
    }
}

const add = (type: 'folder' | 'file', node: TreeNode) => {
    const item = type === 'folder' ? buildFolder() : buildFile()
    node.open = true
    node.children?.push(item)
}

const toggle = (node: TreeNode) => {
    node.open = !node.open
}
</script>

<template>
    <TreeView :items="items" @add="add" @toggle="toggle"></TreeView>
</template>

<style scoped></style>
