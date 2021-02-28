export interface UserProps {
    fullName: string
    tags: string[]
    uuid: string
}

export interface TagProps {
    color: string
    title: string
    uuid: string,
    handleRemoveTag?: Function
}


export interface TagsProps  {
  title?: string;
  tags: TagProps[],
  selectedTagUuids: string[],
  handleAssignTag: Function,
  handleRemoveTag: Function,
  handleCreateTag: Function
};
