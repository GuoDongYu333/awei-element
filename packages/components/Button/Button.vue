<script setup lang="ts">
import { ref, computed, inject } from "vue";
import type { ButtonProps, ButtonEmits, ButtonInStance } from "./type";
import { throttle } from "lodash-es";
import { buttonGroupContextKey } from "./contants";
import EzIcon from "../Icon/Icon.vue";

defineOptions({
  name: "EzButton",
});
const props = withDefaults(defineProps<ButtonProps>(), {
  tag: "button",
  nativeType: "button",
  useThrottle: true,
  throttleDuration: 500,
});
const ctx = inject(buttonGroupContextKey, void 0);
const slots = defineSlots();
const _ref = ref<HTMLButtonElement>();
const size = computed(() => ctx?.size ?? props?.size ?? "");
const type = computed(() => ctx?.type ?? props?.type ?? "");
const disabled = computed(() => props?.disabled || ctx?.disabled || false);
const emits = defineEmits<ButtonEmits>();
defineExpose<ButtonInStance>({
  ref: _ref,
});
const iconStyle = computed(() => ({
  marginRight: slots.default ? "6px" : "0px",
}));
const handleBtnClick = (e: MouseEvent) => emits("click", e);
const handleBtnClickThrottle = throttle(handleBtnClick, props.throttleDuration);
</script>
<template>
  <component
    ref="_ref"
    class="ez-button"
    :autofocus="autofocus"
    :is="tag"
    :type="tag === 'button' ? nativeType : void 0"
    :disabled="disabled || loading ? true : void 0"
    :class="{
      [`ez-button--${type}`]: type,
      [`ez-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading,
    }"
    @click="(e:MouseEvent) => useThrottle ? handleBtnClickThrottle(e) : handleBtnClick(e)"
  >
    <template v-if="loading">
      <slot name="loading">
        <ez-icon
          class="loading-icon"
          size="1x"
          :icon="loadingIcon ?? 'spinner'"
          :style="iconStyle"
          spin
        ></ez-icon>
      </slot>
    </template>
    <ez-icon
      v-if="icon && !loading"
      :icon="icon"
      size="1x"
      :style="iconStyle"
    />
    <slot></slot>
  </component>
</template>

<style scoped>
@import "./style.css";
</style>
