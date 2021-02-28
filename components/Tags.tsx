import React from "react";
import Select, { components } from 'react-select';
import { TagsProps } from "../types";
import Tag from "./Tag"
import styles from './tags.module.scss';


/**
 * Tags component
 */
const Tags = (props: TagsProps) => {
  const [newTag, setNewTag] = React.useState()
  const [isAdding, setIsAdding] = React.useState(false)

  const handleChange = (newValue: any, actionMeta: any) => {
    if(newValue && newValue.value){
      props.handleAssignTag(newValue.value)
      setIsAdding(false)
    }
  };

  const handleRemoveTag = (uuid: any) => {
    if (window.confirm('Are you sure you wish to delete this tag?'))
    {
      props.handleRemoveTag(uuid)
    }

  };

  const handleCreateTag = () => {
      if(newTag){
        props.handleCreateTag(newTag)
        setIsAdding(false)
      }
  };

  const handleInputChange = (inputValue: any, actionMeta: any) => {
      setNewTag(inputValue)
};


  const selectedTags =  props.tags.filter((item) => {
    return props.selectedTagUuids.includes(item.uuid)
  })

  const notSelectedTags =  props.tags.filter((item) => {
    return !props.selectedTagUuids.includes(item.uuid)
  })

  const options = notSelectedTags.map(item => ({ value: item.uuid, label: item.title }))


  const customStyles = {

    control: (provided) => {


      return { ...provided, borderRadius: '30px', border: '2px solid #7E7FA3' };
    },
    placeholder: () => {
      return {display: 'none'}
    },
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isFocused? '#F7F3FF' : 'white' ,
        borderRadius: '15px',
        marginBottom: '2px',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        color: isFocused ? '#676495' : '#ACACC1'
      }
    }
  }

  const CustomMenu = ({ innerRef, innerProps, isDisabled, children }) =>
        !isDisabled ? (
            <div ref={innerRef} {...innerProps} className={styles['tags__input']}>
                {children}
                <button
                    className={styles['tags__add-input-button']}
                    onClick={handleCreateTag}
                ><span>+</span>CREATE TAG</button>
            </div>
        ) : null;


  const CustomOption = props => {
    return (
      <div style={{backgroundColor:'white'}}>
        <components.Option {...props} />
      </div>
    );
  };

  return (
    <div>
      <h2>{props.title}</h2>
      <div className={styles['tags']}>
        {(selectedTags).map(tag=>{
          return <Tag key={tag.uuid} {...tag} handleRemoveTag={handleRemoveTag}/>
        })}
        <div className={'flex--center'}>
        {!isAdding ? <button className={styles['tags__add-button']} onClick={()=> setIsAdding(true)}>
          + <span className={styles['tags__add-button-label']}>ADD</span>
        </button> : null}
        </div>
        {isAdding ? <div style={{width:'200px'}}>
          <Select
            styles={customStyles}
            components={{ IndicatorsContainer: () => null, Menu: CustomMenu, Option: CustomOption }}
            onChange={handleChange}
            options={options}
            onInputChange={handleInputChange}
          />
        </div> : null}
      </div>
    </div>
  );
};

export default Tags;