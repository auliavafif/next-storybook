import React from "react";
import hexToRgba from 'hex-to-rgba';
import { TagProps } from "../types";
import styles from './tag.module.scss';

/**
 * Tag component
 */
const Tags = (props: TagProps) => {
  const tagStyles = {
    backgroundColor: hexToRgba(props.color, 0.4),
    border: `1px solid ${hexToRgba(props.color, 0.9)}`,
  }
  return (
    <div className={styles['tag']} style={tagStyles}>
      {props.title}
      <span className={styles['tag__close']} onClick={() => props.handleRemoveTag(props.uuid)}>×</span>
    </div>
  );
};

export default Tags;