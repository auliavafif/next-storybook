import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Tags, { TagsProps } from "./Tags";

export default {
  title: "Components/Tag",
  component: Tags,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<TagsProps> = (args) => <Tags {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { title: "Primary 😃"};
