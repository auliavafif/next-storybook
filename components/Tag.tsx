import React from "react";
import { TagProps } from "types";
import styles from './tag.module.scss';

/**
 * Tag component
 */
const Tags = (props: TagProps) => {

  return (
    <div className={styles['tag']} style={{backgroundColor: props.color}}>
      {props.title}
      <span className={styles['tag__close']} onClick={() => props.handleRemoveTag(props.uuid)}>×</span>
    </div>
  );
};

export default Tags;