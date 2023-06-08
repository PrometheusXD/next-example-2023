import { Meta, StoryFn } from '@storybook/react';
import { SectionContainer, SectionContainerProps } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
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

export const Template: StoryFn<SectionContainerProps> = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
