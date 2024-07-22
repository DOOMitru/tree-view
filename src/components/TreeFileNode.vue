<script setup lang="ts">
import { computed } from 'vue'
import type { TreeNode, TreeNodePropType } from './types'

import CircleClose from './icons/CircleClose.vue'
import DocumentFile from './icons/documents/DocumentFile.vue'
import DocumentCss from './icons/documents/DocumentCss.vue'
import DocumentPdf from './icons/documents/DocumentPdf.vue'
import DocumentVue from './icons/documents/DocumentVue.vue'
import DocumentZip from './icons/documents/DocumentZip.vue'
import DocumentHtml from './icons/documents/DocumentHtml.vue'
import DocumentText from './icons/documents/DocumentText.vue'
import DocumentWord from './icons/documents/DocumentWord.vue'
import DocumentExcel from './icons/documents/DocumentExcel.vue'
import DocumentImage from './icons/documents/DocumentImage.vue'
import DocumentMarkdown from './icons/documents/DocumentMarkdown.vue'
import DocumentJavaScript from './icons/documents/DocumentJavaScript.vue'
import DocumentPowerPoint from './icons/documents/DocumentPowerPoint.vue'

const props = defineProps<TreeNodePropType>()

defineEmits<{
    (e: 'toggle', node: TreeNode): void
    (e: 'add', type: 'folder' | 'file', node: TreeNode): void
}>()

const ExtensionsMap: { [key: string]: any } = {
    css: DocumentCss,
    pdf: DocumentPdf,
    vue: DocumentVue,
    zip: DocumentZip,
    html: DocumentHtml,
    txt: DocumentText,
    doc: DocumentWord,
    docx: DocumentWord,
    xls: DocumentExcel,
    xlsx: DocumentExcel,
    jpg: DocumentImage,
    jpeg: DocumentImage,
    png: DocumentImage,
    gif: DocumentImage,
    md: DocumentMarkdown,
    js: DocumentJavaScript,
    ppt: DocumentPowerPoint,
    pptx: DocumentPowerPoint
}

const style = computed(() => {
    return `margin-left: ${30 * props.level}px;`
})

const fileIcon = computed(() => {
    const index = props.item.name.lastIndexOf('.')
    const extension = index >= 0 ? props.item.name.substring(index + 1).toLowerCase() : ''
    return Object.keys(ExtensionsMap).includes(extension) ? ExtensionsMap[extension] : DocumentFile
})

const filename = computed(() => {
    const index = props.item.name.lastIndexOf('.')
    const extension = index >= 0 ? props.item.name.substring(index + 1).toLowerCase() : ''

    return Object.keys(ExtensionsMap).includes(extension)
        ? props.item.name.substring(0, index)
        : props.item.name
})
</script>

<template>
    <div class="row" :style="style">
        <div class="icon">
            <component :is="fileIcon"></component>
        </div>
        <div class="name">
            {{ filename }}
        </div>
        <div class="remove hoverable">
            <CircleClose></CircleClose>
        </div>
    </div>
</template>

<style scoped>
.hoverable:hover {
    cursor: pointer;
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
    padding: 0px 5px;
    grid-area: b;
    display: grid;
    gap: 0px 8px;
    align-items: center;
    font-family: monospace;
    grid-template-areas:
        'x x x'
        'b b b';
    grid-template-columns: 24px auto 24px;
}
</style>
