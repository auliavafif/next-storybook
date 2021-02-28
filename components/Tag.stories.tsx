import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Tag from "./Tag";
import { TagProps } from "types";



const userTags = ["aaaa-bbbb-cccc-dddd", "eeee-ffff-gggg-hhhh"]

const tag = {
  uuid: "eeee-ffff-gggg-hhhh",
  title: "Fundraiser",
  color: "#0000FF"
}

export default {
  title: "Components/Tag",
  component: Tag,
} as Meta;


export const Primary = () => <Tag  {...tag} handleRemoveTag={() => {}}/>
