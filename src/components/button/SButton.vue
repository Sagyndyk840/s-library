<script setup lang="ts">
import type SkyButtonProps from "@/types/components/button";
import SIcon from "@/components/icon/SIcon.vue";

const emit = defineEmits(['click'])

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
  block: false
})

const click = () => {
  emit('click')
}

</script>

<template>
  <div>
    <button :disabled="props.disabled" @click="click" :type="props.type" class="btn" :class="[
      props.outlined ? `text-${props.color}` : `text-${props.textColor}`,
      props.outlined ? `outlined-${props.color}` : `bg-${props.color}`,
      !props.icon ? `btn-size-${props.size}` : `icon-${props.size}`,
      props.block ? 'btn-align-center' :`btn-align-${props.align}`,
      !props.icon ? `btn-density-${props.density}` : '',
      `rounded-${props.rounded}`,
      props.block ? 'block' : '',
      props.icon ? 'icon' : '',
      {
        'outlined': props.outlined,
        'disabled': props.disabled
      }
    ]">
      <div>
        <slot name="loader"></slot>
      </div>
      <div>
        <div v-if="props.icon">
          <slot name="icon">
            <SIcon :color="props.outlined ? props.color : props.textColor" v-if="props.iconLeft" :icon="props.iconLeft" :size="props.size" />
          </slot>
        </div>
       <div v-else>
         <div v-if="!icon || !$slots['icon-left']" class="flex align-center justify-center">
           <div style="padding-right: 8px;" v-if="$slots['icon-left'] || props.iconLeft" class="flex align-center justify-center">
             <slot name="icon-left" >
               <SIcon :color="props.outlined ? props.color : props.textColor" v-if="props.iconLeft" :icon="props.iconLeft" :size="props.size" />
             </slot>
           </div>
           <slot :class="props.textColor">{{ props.label }}</slot>
           <div style="padding-left: 8px;" v-if="$slots['icon-right'] || props.iconRight" class="flex align-center justify-center">
             <slot name="icon-right" >
               <SIcon :color="props.outlined ? props.color : props.textColor" v-if="props.iconRight" :icon="props.iconRight" :size="props.size" />
             </slot>
           </div>
         </div>
       </div>
      </div>
    </button>

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
        padding: 4px 8px !important;
      }
      &-small {
        padding: 7px 12px !important;;
      }
      &-large {
        padding: 14px 20px !important;;
      }
      &-x-large {
        padding: 16px 23px !important;;
      }
      &-normal {
        padding: 10px 16px !important;;
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

  .block {
    width: 100%;
  }

  .icon {
    border-radius: 100px;

    &-x-small {
      padding: 7px !important;
    }
    &-small {
      padding: 8px !important;;
    }
    &-large {
      padding: 20px !important;;
    }
    &-x-large {
      padding: 24px !important;;
    }
    &-normal {
      padding: 16px !important;;
    }

  }
</style>