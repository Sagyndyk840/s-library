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

console.log(props.color)

</script>

<template>
  <div>
    <button :type="props.type" :class="[
      props.color,
      props.align,
      props.size,
      props.rounded,
      {
        'outlined': props.outlined,
      }
    ]">
      <slot :class="props.textColor">{{ props.label }}</slot>
    </button>
  </div>
</template>

