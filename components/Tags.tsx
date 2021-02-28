import React from "react";
import CreatableSelect from 'react-select/creatable';
import { TagsProps } from "types";
import Tag from "./Tag"
import styles from './tags.module.scss';


/**
 * Tags component
 */
const Tags = (props: TagsProps) => {
  const [newTagValue, setNewTagValue ] = React.useState<string>('')

  const handleChange = (newValue: any, actionMeta: any) => {
    if(newTagValue===''){
      props.handleAssignTag(newValue.value)
    }
  };

  const handleRemoveTag = (uuid: any) => {
    props.handleRemoveTag(uuid)
  };

  const handleCreateTag = (inputValue: any, actionMeta: any) => {
    if(actionMeta.action==='set-value'){
      if(newTagValue!==''){
        props.handleCreateTag(newTagValue)
        setNewTagValue('')
      }
    } else if(inputValue){
      setNewTagValue(inputValue)
    }
  };


  const selectedTags =  props.tags.filter((item) => {
    return props.selectedTagUuids.includes(item.uuid)
  })

  const notSelectedTags =  props.tags.filter((item) => {
    return !props.selectedTagUuids.includes(item.uuid)
  })

  const options = notSelectedTags.map(item => ({ value: item.uuid, label: item.title }))

  return (
    <div>
      <h1>{props.title}</h1>
      <div className={styles['tags']}>
        {(selectedTags).map(tag=>{
          return <Tag key={tag.uuid} {...tag} handleRemoveTag={handleRemoveTag}/>
        })}
        <div style={{width:'200px'}}>
          <CreatableSelect
            onChange={handleChange}
            options={options}
            onInputChange={handleCreateTag}
          />
        </div>
      </div>
    </div>
  );
};

export default Tags;