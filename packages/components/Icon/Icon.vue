<script setup lang="ts">
import type { IconProps } from "./type";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { omit } from "lodash-es";
import { computed } from "vue";
defineOptions({
  name: "EzIcon",
  inheritAttrs: false,
});
const props = defineProps<IconProps>();
const filterProps = computed(() => omit(props, ["type", "color"]));
const customStyles = computed(() => ({
  color: props.color || "",
}));
</script>
<template>
  <i
    class="ez-icon"
    :class="[`ez-icon-${props.type}`]"
    :style="customStyles"
    v-bind="$attrs"
  >
    <font-awesome-icon v-bind="filterProps" />
  </i>
</template>

<style scoped>
@import "./style.css";
</style>
