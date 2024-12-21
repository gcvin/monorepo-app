---
map:
  path: /component/editable-tsx
---

# EditableTsx

组件描述组件描述组件描述组件描述组件描述组件描述。

## 基础用法

基础用法基础用法基础用法基础用法基础用法基础用法。

<demo src="./__demos__/basic.vue"></demo>

## 组件配置

### EditableTsx Props

| 属性 | 说明     | 类型   | 默认值 |
| ---- | -------- | ------ | ------ |
| type | 参数类型 | string | -      |

### EditableTsx Events

| 事件名 | 说明           | 参数                          |
| ------ | -------------- | ----------------------------- |
| click  | 点击触发的事件 | `(event: MouseEvent) => void` |

### EditableTsx Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

## 类型定义

组件导出以下类型定义

```ts
import type { EditableTsxProps } from '@gcvin/ui'
```

## 样式变量

组件提供了下列 CSS 变量，可用于自定义样式。

| 名称                          | 默认值  |
| ----------------------------- | ------- |
| --gcvin-editable-tsx-color       | #67c23a |
