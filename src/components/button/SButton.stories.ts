import SButton from "./SButton.vue";
import { type StoryFn, type Meta } from '@storybook/vue3';

export default {
    title: 'SButton',
    component: SButton,
    argTypes: {
        disabled: {
            control: { type: 'boolean' },
            defaultValue: false,
        },
        block: {
            control: { type: 'boolean' },
            defaultValue: false,
        },
        outlined: {
            control: { type: 'boolean' },
            defaultValue: false,
        },
        size: {
            control: { type: 'radio' },
            options: ['small', 'normal', 'large'],
            defaultValue: 'medium',
        },
        color: {
            control: { type: 'radio' },
            options: ['primary', 'red', 'green'],
        },
    },
}

const Template: StoryFn<typeof SButton> = (args) => ({
    components: { SButton },
    setup() {
        return { args };
    },
    template: `
    <div style="display: flex; flex-direction: row; gap: 12px;">
      <SButton v-bind="args" size="large" color="red">Button</SButton>
      <SButton v-bind="args" size="normal">Button</SButton>
      <SButton v-bind="args" size="small">Button</SButton>
    </div>
  `,
});

export const DefaultButton: StoryFn<typeof SButton> = (args) => ({
    components: { SButton },
    setup() {
        return { args };
    },
    template: '<SButton v-bind="args">Button</SButton>',
});

export const PrimaryButton = Template.bind({});
PrimaryButton.args = { color: 'red' };