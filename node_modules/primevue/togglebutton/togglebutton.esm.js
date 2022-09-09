import Ripple from 'primevue/ripple';
import { resolveDirective, withDirectives, openBlock, createElementBlock, normalizeClass, createElementVNode, mergeProps, createCommentVNode, toDisplayString } from 'vue';

var script = {
    name: 'ToggleButton',
    emits: ['update:modelValue', 'change', 'click', 'focus', 'blur'],
    props: {
        modelValue: Boolean,
		onIcon: String,
		offIcon: String,
        onLabel: {
            type: String,
            default: 'Yes'
        },
        offLabel: {
            type: String,
            default: 'No'
        },
        iconPos: {
            type: String,
            default: 'left'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        tabindex: {
            type: Number,
            default: null
        },
        inputId: null,
        inputClass: null,
        inputStyle: null,
        inputProps: null,
        'aria-labelledby': {
            type: String,
			default: null
        },
        'aria-label': {
            type: String,
            default: null
        }
    },
    methods: {
        onClick(event) {
            if (!this.disabled) {
                this.$emit('update:modelValue', !this.modelValue);
                this.$emit('change', event);
                this.$emit('click', event);
            }
        },
        onFocus(event) {
            this.$emit('focus', event);
        },
        onBlur(event) {
            this.$emit('blur', event);
        }
    },
    computed: {
        buttonClass() {
            return {
                'p-button p-togglebutton p-component': true,
                'p-button-icon-only': this.hasIcon && !this.hasLabel,
                'p-disabled': this.disabled,
                'p-highlight': this.modelValue === true
            }
        },
        iconClass() {
            return [
                this.modelValue ? this.onIcon: this.offIcon,
                'p-button-icon',
                {
                    'p-button-icon-left': this.iconPos === 'left' && this.label,
                    'p-button-icon-right': this.iconPos === 'right' && this.label
                }
            ]
        },
        hasLabel() {
            return this.onLabel && this.onLabel.length > 0 && this.offLabel && this.offLabel.length > 0;
        },
        hasIcon() {
            return this.onIcon && this.onIcon.length > 0 && this.offIcon && this.offIcon.length > 0;
        },
        label() {
            return this.hasLabel ? (this.modelValue ? this.onLabel : this.offLabel): '&nbsp;';
        }
    },
    directives: {
        'ripple': Ripple
    }
};

const _hoisted_1 = { class: "p-hidden-accessible" };
const _hoisted_2 = ["id", "checked", "value", "aria-labelledby", "aria-label"];
const _hoisted_3 = { class: "p-button-label" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_ripple = resolveDirective("ripple");

  return withDirectives((openBlock(), createElementBlock("div", {
    class: normalizeClass($options.buttonClass),
    onClick: _cache[2] || (_cache[2] = $event => ($options.onClick($event)))
  }, [
    createElementVNode("span", _hoisted_1, [
      createElementVNode("input", mergeProps({
        type: "checkbox",
        role: "switch",
        id: $props.inputId,
        class: $props.inputClass,
        style: $props.inputStyle,
        checked: $props.modelValue,
        value: $props.modelValue,
        "aria-labelledby": _ctx.ariaLabelledby,
        "aria-label": _ctx.ariaLabel,
        onFocus: _cache[0] || (_cache[0] = $event => ($options.onFocus($event))),
        onBlur: _cache[1] || (_cache[1] = $event => ($options.onBlur($event)))
      }, $props.inputProps), null, 16, _hoisted_2)
    ]),
    ($options.hasIcon)
      ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass($options.iconClass)
        }, null, 2))
      : createCommentVNode("", true),
    createElementVNode("span", _hoisted_3, toDisplayString($options.label), 1)
  ], 2)), [
    [_directive_ripple]
  ])
}

script.render = render;

export { script as default };
