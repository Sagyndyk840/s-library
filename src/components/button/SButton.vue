<script setup lang="ts">
import type {SkyButtonProps} from "@/types/components/button";

const props = withDefaults(defineProps<SkyButtonProps>(), {
  type: "button",
  density: "default",
  size: "regular",
  rounded: "0",
  outlined: false,
  label: "label",
  align: "center",
  loading: false
})



</script>

<template>
  <div>
    <button @click="$emit('click')" :type="props.type" class="s-btn" :class="[
      props.color,
      props.align,
      props.size,
      props.rounded,
      {
        'outlined': props.outlined,
      }
    ]">
      <slot :class="props.textColor">{{ props.label }}</slot>
      <slot></slot>
      <span class="material-icons">pie_chart</span>          <!-- Filled -->
<!--      <span class="material-icons-outlined">pie_chart</span> &lt;!&ndash; Outlined &ndash;&gt;-->
<!--      <span class="material-icons-round">pie_chart</span>    &lt;!&ndash; Round &ndash;&gt;-->
<!--      <span class="material-icons-sharp">pie_chart</span>    &lt;!&ndash; Sharp &ndash;&gt;-->
<!--      <span class="material-icons-two-tone">pie_chart</span>-->
    </button>
  </div>
</template>

<style scoped lang="scss">
.s {
  &-btn {
    cursor: pointer;
    outline: none;
    border: 1px solid transparent;
  }
}
</style>

