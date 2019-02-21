<template>
  <div class="z-input-swrap">
    <span
      v-if="iconName"
      :class="{'z-input-icon': true, 'z-input-icon-before': (iconPosition=='before'), 'z-input-icon-after': (iconPosition=='after')}"
    >
      <z-icon :name="iconName"/>
    </span>
    <input
      :class="{'z-input': true, [`z-input-${size}`]: true, 'z-input-disabled': disabled}"
      :name="name"
      :type="type"
      :value="value"
      :disabled="disabled"
      :readonly="readOnly"
      @input="$emit('input', $event.target.value)"
      @change="$emit('change', $event.target.value)"
      @blur="$emit('blur', $event)"
      @focus="$emit('focus', $event)"
    >
  </div>
</template>
<script>
import Icon from "../icon/icon.vue";
export default {
  props: {
    type: {
      type: String,
      default: "text",
      validator(value) {
        const types = ["hidden", "password", "text"];

        const result = types.includes(value);
        if (!result) {
          console.error(
            `input属性type不支持${value}类型。它应属于[${types}]中之一`
          );
        }
        return result;
      }
    },
    size: {
      type: String,
      default: "middle",
      validator(value) {
        const sizes = ["small", "middle", "large"];
        const result = sizes.includes(value);
        if (!result) {
          console.error(
            `input属性size不支持${value}类型。它应属于[${sizes}]中之一`
          );
        }
        return result;
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readOnly: {
      type: Boolean,
      default: false
    },
    name: {
      type: String
    },
    value: {
      type: [String, Number]
    },
    iconName: {
      type: String
    },
    iconPosition: {
      type: String,
      default: "before",
      validator(value) {
        const positions = ["before", "after"];
        const result = positions.includes(value);
        if (!result) {
          console.error(
            `Input属性iconName不支持${value}类型。它应属于[${positions}]中之一`
          );
        }
        return result;
      }
    }
  },
  components: {
    "z-icon": Icon
  }
};
</script>
<style lang="scss" scoped>
$input-height-middle: 32px;
$input-height-small: 24px;
$input-height-large: 40px;
$input-disabled-bg-color: #f5f5f5;

$input-border-color: #d9d9d9;

.z-input-swrap {
  position: relative;
  display: inline-flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  vertical-align: middle;

  .z-input {
    height: $input-height-middle;
    outline: none;
    border: 1px;
    border-style: solid;
    border-color: $input-border-color;
    border-radius: 4px;

    flex: 1;
    padding: 0 1em;
    &:focus{
      box-shadow: inset 0px 0px 0px 1px #c1c0c0;
    }
  }

  .z-input-middle {
    font-size: 14px;
    height: $input-height-middle;
  }

  .z-input-small {
    font-size: 14px;
    height: $input-height-small;
  }

  .z-input-large {
    font-size: 18px;
    height: $input-height-large;
  }

  .z-input-disabled{
      background-color: $input-disabled-bg-color;
      cursor: not-allowed;
  }

  .z-input-icon {
    display: inline-flex;
    position: absolute;
  }

  .z-input-icon-before {
    order: 0;
    left: 0.5em;
  }

  .z-input-icon-after {
    order: 1;
    right: 0.5em;
  }
  .z-input-icon-after +.z-input{
      padding-right: 2em;
  }
  .z-input-icon-before +.z-input{
      padding-left: 2em;
  }

}
</style>
