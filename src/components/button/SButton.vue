<script setup lang="ts">
import type SkyButtonProps from "@/types/components/button";
import SIcon from "@/components/icon/SIcon.vue";

const props = withDefaults(defineProps<SkyButtonProps>(), {
  type: "button",
  density: "default",
  size: "normal",
  rounded: "normal",
  outlined: false,
  label: "label",
  align: "center",
  loading: false,
  color: "red",
  textColor: "white",
  disabled: false,
})

const emit = defineEmits(['click'])


const click = () => {
  emit('click')
}

</script>

<template>
  <div>
    <button :disabled="props.disabled" @click="click" :type="props.type" class="btn" :class="[
      props.outlined ? `text-${props.color}` : `text-${props.textColor}`,
      props.outlined ? `outlined-${props.color}` : `bg-${props.color}`,
      props.align,
      `btn-size-${props.size}`,
      `btn-align-${props.align}`,
      `btn-density-${props.density}`,
      `rounded-${props.rounded}`,
      {
        'outlined': props.outlined,
        'disabled': props.disabled
      }
    ]">
      <slot name="loader"></slot>
      <slot name="icon"></slot>
      <slot name="icon-left"></slot>
      <slot :class="props.textColor">{{ props.label }}</slot>
      <slot name="icon-right"></slot>
    </button>
    <SIcon />

  </div>

</template>

<style scoped lang="scss">
  .btn {
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;
    display: flex;
    align-items: center;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    &-size {
      &-x-small {
        padding: 4px 8px;
      }
      &-small {
        padding: 7px 12px;
      }
      &-large {
        padding: 14px 20px;
      }
      &-x-large {
        padding: 16px 23px;
      }
      &-normal {
        padding: 10px 16px;
      }
    }

    &-align {
      &-center {
        justify-content: center;
      }
      &-left {
        justify-content: left;
      }
      &-right {
        justify-content: right;
      }
    }

    &-density {
      &-default {
        padding: 10px 16px;
      }
      &-compact {
        padding: 7px 12px;
      }
      &-comfortable {
        padding: 7px 12px;
      }
    }
  }

  .outlined {
    background-color: transparent;
  }
</style>