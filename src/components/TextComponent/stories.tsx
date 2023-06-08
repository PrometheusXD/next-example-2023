import { Meta, StoryFn } from '@storybook/react';
import { TextComponent, TextComponentProps } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nulla reiciendis impedit excepturi fuga maiores obcaecati odio optio quibusdam officia. Quia vero eveniet eos nihil tempora quas nam explicabo voluptates.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
} as Meta;

export const Template: StoryFn<TextComponentProps> = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
