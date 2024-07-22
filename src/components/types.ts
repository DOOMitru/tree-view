export type TreeNode = {
    id: number
    name: string
    open?: boolean
    type: 'folder' | 'file'
    children?: TreeNode[]
}

export type TreeViewPropType = {
    items?: TreeNode[]
    level?: number
}

export type TreeNodePropType = {
    item: TreeNode
    level: number
}

export type IconPropType = {
    color?: string
}
