import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Tags from "./Tags";
import { TagProps, TagsProps } from "../types";

const tags: TagProps[] = [
  {
    uuid: "aaaa-bbbb-cccc-dddd",
    title: "Donor",
    color: "#ff0000",
    handleRemoveTag: () => {}
  },
  {
    uuid: "eeee-ffff-gggg-hhhh",
    title: "Fundraiser",
    color: "#0000FF",
    handleRemoveTag: () => {}
  }
];

const userTags = ["aaaa-bbbb-cccc-dddd"]

export default {
  title: "Components/Tags",
  component: Tags,
} as Meta;


const Template: Story<TagsProps> = (args) => <Tags {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { handleCreateTag:() => {}, handleAssignTag:() => {}, handleRemoveTag:() => {}, tags:tags, selectedTagUuids:userTags, title:'Tags' };
Primary.decorators = [
  (Story) => <div className={`container-card container`} style={{width: '400px'}}><Story /></div>
]
// export const Primary = () => <Tags handleCreateTag={() => {}} handleAssignTag={() => {}} handleRemoveTag={() => {}} tags={tags} selectedTagUuids={userTags} title={'Tags'} />;
// Primary.decorators = [
//   (Story) => <div className={`container-card container`} style={{width: '400px'}}><Story /></div>
// ]