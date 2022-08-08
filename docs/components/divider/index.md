# 分割线 Divider

- 对不同章节的文本段落进行分割。
- 对行内文字/链接进行分割，例如表格的操作列。

## 基础使用

默认为水平分割线，可在中间加入文字。

<demo src='./demos/basic.vue' />

## 位置

<demo src='./demos/position.vue' />

## 垂直分割线

<demo src='./demos/vertical.vue' />

## 虚线

<demo src='./demos/custom.vue' />

### Button Props

| 名称      | 类型                          | 默认值         | 说明             |
| --------- | ----------------------------- | -------------- | ---------------- |
| direction | `'vertical' \| 'horizontal'`  | `'horizontal'` | 水平还是垂直类型 |
| dashed    | `boolean`                     | `false`        | 是否虚线         |
| position  | `'left' \| 'center'\|'right'` | `center`       | 分割线标题的位置 |

#### Reference

- [看 hr 标签实现分隔线如何玩出花](https://www.zhangxinxu.com/wordpress/2021/05/css-html-hr/)