'use strict';

var vue = require('vue');

var script = {
    name: 'Rating',
    emits: ['update:modelValue', 'change', 'focus', 'blur'],
    props: {
        modelValue: {
            type: Number,
            default: null
        },
        name: {
            type: String,
            default: null
        },
		disabled: {
            type: Boolean,
            default: false
        },
		readonly: {
            type: Boolean,
            default: false
        },
        stars: {
            type: Number,
            default: 5
        },
        cancel: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            focusIndex: null
        };
    },
    methods: {
        onStarClick(event, value) {
            if (!this.readonly && !this.disabled) {
                this.updateModel(event, value);
                this.focusIndex = value;
            }
        },
        onKeyDown(event, value) {
            if (event.code === 'Space') {
                this.updateModel(event, value);
            }
            if (event.code === 'Tab') {
                this.focusIndex = null;
            }
        },
        onFocus(event, index) {
            if (!this.readonly) {
                if (this.modelValue === null && this.focusIndex === null) {
                    this.cancel ? this.focusIndex = 0 : this.focusIndex = 1;
                }
                else if (this.modelValue !== null && this.focusIndex === null) {
                    this.focusIndex = this.modelValue;
                    this.updateModel(event, this.modelValue);
                }
                else {
                    this.focusIndex = index;
                    this.updateModel(event, index);
                }

                this.$emit('focus', event);
            }
        },
        onBlur(event) {
            this.$emit('blur', event);
        },
        onCancelClick(event) {
            if (!this.readonly && !this.disabled) {
                this.updateModel(event, null);
            }
        },
        updateModel(event, value) {
            this.$emit('update:modelValue', value);
            this.$emit('change', {
                originalEvent: event,
                value: value
            });
        },
        ariaLabelTemplate(index) {
            return index === 1 ? this.$primevue.config.locale.aria.star : this.$primevue.config.locale.aria.stars.replace(/{star}/g, index);
        }
    },
    computed: {
        containerClass() {
            return [
                'p-rating',
                {
                    'p-readonly': this.readonly,
                    'p-disabled': this.disabled
                }
            ];
        }
    }
};

const _hoisted_1 = {
  key: 0,
  class: "p-hidden-accessible"
};
const _hoisted_2 = ["name", "checked", "disabled", "readonly", "aria-label"];
const _hoisted_3 = ["onClick"];
const _hoisted_4 = { class: "p-hidden-accessible" };
const _hoisted_5 = ["value", "name", "checked", "disabled", "readonly", "aria-label", "onFocus", "onKeydown"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass($options.containerClass)
  }, [
    ($props.cancel)
      ? (vue.openBlock(), vue.createElementBlock("span", {
          key: 0,
          class: vue.normalizeClass(['p-rating-icon p-rating-cancel pi pi-ban', {'p-focus': $data.focusIndex === 0}]),
          onClick: _cache[3] || (_cache[3] = (...args) => ($options.onCancelClick && $options.onCancelClick(...args))),
          onKeydown: _cache[4] || (_cache[4] = (...args) => ($options.onKeyDown && $options.onKeyDown(...args)))
        }, [
          ($props.cancel)
            ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_1, [
                vue.createElementVNode("input", {
                  type: "radio",
                  value: "0",
                  name: $props.name,
                  checked: $props.modelValue === 0,
                  disabled: $props.disabled,
                  readonly: $props.readonly,
                  "aria-label": _ctx.$primevue.config.locale.clear,
                  onFocus: _cache[0] || (_cache[0] = $event => ($options.onFocus($event, 0))),
                  onBlur: _cache[1] || (_cache[1] = (...args) => ($options.onBlur && $options.onBlur(...args))),
                  onKeydown: _cache[2] || (_cache[2] = $event => ($options.onKeyDown($event, 0)))
                }, null, 40, _hoisted_2)
              ]))
            : vue.createCommentVNode("", true)
        ], 34))
      : vue.createCommentVNode("", true),
    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.stars, (i) => {
      return (vue.openBlock(), vue.createElementBlock("span", {
        key: i,
        class: vue.normalizeClass(['p-rating-icon', {'pi pi-star': (i > $props.modelValue), 'pi pi-star-fill': (i <= $props.modelValue), 'p-focus': i === $data.focusIndex}]),
        onClick: $event => ($options.onStarClick($event,i))
      }, [
        vue.createElementVNode("span", _hoisted_4, [
          vue.createElementVNode("input", {
            type: "radio",
            value: i,
            name: $props.name,
            checked: $props.modelValue === i,
            disabled: $props.disabled,
            readonly: $props.readonly,
            "aria-label": $options.ariaLabelTemplate(i),
            onFocus: $event => ($options.onFocus($event, i)),
            onBlur: _cache[5] || (_cache[5] = (...args) => ($options.onBlur && $options.onBlur(...args))),
            onKeydown: $event => ($options.onKeyDown($event,i))
          }, null, 40, _hoisted_5)
        ])
      ], 10, _hoisted_3))
    }), 128))
  ], 2))
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "\n.p-rating-icon {\n    cursor: pointer;\n}\n.p-rating.p-rating-readonly .p-rating-icon {\n    cursor: default;\n}\n.p-rating:not(.p-disabled) .p-rating-icon.p-focus {\n    outline: 0 none;\n    outline-offset: 0;\n    -webkit-box-shadow: 0 0 0 0.2rem #BFDBFE;\n            box-shadow: 0 0 0 0.2rem #BFDBFE;\n    border-color: #3B82F6;\n}\n";
styleInject(css_248z);

script.render = render;

module.exports = script;
