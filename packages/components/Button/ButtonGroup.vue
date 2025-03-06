<script setup lang="ts">
import type { ButtonGroupProps } from "./type";
import { buttonGroupContextKey } from "./contants";
import { provide, reactive, toRef } from "vue";

defineOptions({
  name: "EzButtonGroup",
});
const props = defineProps<ButtonGroupProps>();

provide(
  buttonGroupContextKey,
  reactive({
    size: toRef(props, "size"),
    type: toRef(props, "type"),
    disabled: toRef(props, "disabled"),
  })
);
</script>
<template>
  <div class="ez-button-group">
    <slot></slot>
  </div>
</template>
<style scoped>
@import "./style.css";
</style>
