import React from "react";
import "./tags.module.scss";

export interface TagsProps  {
  /**
   * Is this the principal call to action on the page?
   */
  title?: string;
};

/**
 * Tag component
 */
const Tags = ({
  title
}: TagsProps) => {

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default Tags;