<template>
  <div v-show="visible" :id="id" class="po-message" :style="customStyle">
    <slot>{{ message }}</slot>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'

const props = defineProps({
  id: { type: String },
  offset: { type: Number, default: 20 },
  zIndex: { type: Number, default: 0 },
  duration: { type: Number, default: 3000 },
  message: { type: [String] },
  onClose: { type: Function, default: () => {} },
})

const customStyle = computed(() => {
  return { top: props.offset + 'px', zIndex: props.zIndex }
})

const visible = ref(false)

let timer = null
const startTimer = () => {
  if (props.duration > 0) {
    timer = setTimeout(() => {
      if (visible.value === true) {
        close()
        props.onClose()
      }
    }, props.duration)
  }
}

const close = () => {
  visible.value = false
}

onMounted(() => {
  startTimer()
  visible.value = true
})
</script>
