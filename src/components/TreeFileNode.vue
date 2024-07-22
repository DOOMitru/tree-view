<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'
import type { TreeNode, TreeNodePropType } from './types'

const CircleClose = defineAsyncComponent(() => {
    return import('./icons/CircleClose.vue')
})
const DocumentFile = defineAsyncComponent(() => {
    return import('./icons/documents/DocumentFile.vue')
})
const DocumentCss = defineAsyncComponent(() => {
    return import('./icons/documents/DocumentCss.vue')
})
const DocumentPdf = defineAsyncComponent(() => {
    return import('./icons/documents/DocumentPdf.vue')
})
const DocumentVue = defineAsyncComponent(() => {
    return import('./icons/documents/DocumentVue.vue')
})
const DocumentZip = defineAsyncComponent(() => {
    return import('./icons/documents/DocumentZip.vue')
})
const DocumentHtml = defineAsyncComponent(() => {
    return import('./icons/documents/DocumentHtml.vue')
})
const DocumentText = defineAsyncComponent(() => {
    return import('./icons/documents/DocumentText.vue')
})
const DocumentWord = defineAsyncComponent(() => {
    return import('./icons/documents/DocumentWord.vue')
})
const DocumentExcel = defineAsyncComponent(() => {
    return import('./icons/documents/DocumentExcel.vue')
})
const DocumentImage = defineAsyncComponent(() => {
    return import('./icons/documents/DocumentImage.vue')
})
const DocumentMarkdown = defineAsyncComponent(() => {
    return import('./icons/documents/DocumentMarkdown.vue')
})
const DocumentJavaScript = defineAsyncComponent(() => {
    return import('./icons/documents/DocumentJavaScript.vue')
})
const DocumentPowerPoint = defineAsyncComponent(() => {
    return import('./icons/documents/DocumentPowerPoint.vue')
})

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
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 14 14">
                <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 13.5h-12a1 1 0 0 1-1-1V.5"
                />
            </svg>
        </div>
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
    grid-template-columns: 24px 24px auto 24px;
}
</style>
