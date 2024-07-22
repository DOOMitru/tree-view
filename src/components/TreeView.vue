<script setup lang="ts">
import type { TreeNode, TreeViewPropType } from './types'

import TreeFileNode from './TreeFileNode.vue'
import TreeFolderNode from './TreeFolderNode.vue'

withDefaults(defineProps<TreeViewPropType>(), {
    level: () => 0
})

const emit = defineEmits<{
    (e: 'toggle', node: TreeNode): void
    (e: 'add', type: 'folder' | 'file', node: TreeNode): void
}>()

const components = {
    file: TreeFileNode,
    folder: TreeFolderNode
}
</script>

<template>
    <div>
        <component
            v-for="item in items"
            :is="components[item.type]"
            :key="item.id"
            :item="item"
            :level="level"
            @toggle="(node) => emit('toggle', node)"
            @add="(type, node) => emit('add', type, node)"
        ></component>
    </div>
</template>
