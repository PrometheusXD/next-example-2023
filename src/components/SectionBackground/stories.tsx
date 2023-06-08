import { Meta, StoryFn } from '@storybook/react';
import { SectionBackground, SectionBackgroundProps } from '.';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionBackground</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
          nesciunt cum necessitatibus, vitae quaerat saepe exercitationem
          voluptatibus a, sit corporis perspiciatis sed facilis consequuntur
          veritatis sapiente, minus dicta dignissimos qui!
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: 'symbol' },
  },
} as Meta;

export const Template: StoryFn<SectionBackgroundProps> = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
