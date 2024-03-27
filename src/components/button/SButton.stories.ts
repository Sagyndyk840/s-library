import SButton from './SButton.vue';
import { StoryFn, Meta } from '@storybook/vue3';


export default {
    title: 'SButton',
    component: SButton,
    argTypes: {
        disabled: {
            control: {type: 'boolean'},
            defaultValue: false,
        },
    }
}

const Template: StoryFn<typeof SButton> = (args) => ({
    components: { SButton },
    setup() {
        return { args };
    },
    template: `
    <div style="display: flex; flex-direction: row; gap: 12px;">
      <SButton outlined  color="red" text-color="black"/>
      <SButton outlined  color="red" text-color="black"/>
      <SButton outlined  color="red" text-color="black"/>
    </div>
  `,
});

export const DefaultButton: StoryFn<typeof SButton> = (args) => ({
    components: { SButton },
    setup() {
        return { args };
    },
    template: '<SButton outlined  color="red" text-color="black"/>',
});

export const PrimaryButton = Template.bind({});
PrimaryButton.args = { color: 'red' };

export const SecondaryButton = Template.bind({});
SecondaryButton.args = { color: 'red' };