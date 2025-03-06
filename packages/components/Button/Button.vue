<script setup lang="ts">
import { ref } from "vue";
import type { ButtonProps } from "./type";

defineOptions({
  name: "EzButton",
});
const props = withDefaults(defineProps<ButtonProps>(), {
  tag: "button",
  nativeType: "button",
});
const slot = defineSlots();
const _ref = ref<HTMLButtonElement>();
</script>
<template>
  <component
    :is="props.tag"
    ref="_ref"
    :type="tag === 'button' ? nativeType : void 0"
    :disable="disabled || loading ? true : void 0"
    class="ez-button"
    :class="{
      [`ez-button--${type}`]: type,
      [`ez-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading,
    }"
  >
    <slot></slot>
  </component>
</template>

<style scoped>
@import "./style.css";
</style>
