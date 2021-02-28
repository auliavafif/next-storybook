import * as React from "react";
import { UserProps, TagProps } from "types";
import {
    fetchTags,
    createTag,
    fetchUser,
    fetchUserTags,
    assignUserTag,
    removeUserTag
  } from "../api";
  import Tags from '../components/Tags'

const Home = () => {
  const [ user , setUser ] = React.useState<UserProps>()
  const [ userTags , setUserTags ] = React.useState<string[]>([])
  const [ tags , setTags ] = React.useState<TagProps[]>([])
  const [isCreating, setIsCreating] = React.useState<boolean>(false)
  const [isAssigning, setIsAssigning] = React.useState<boolean>(false)
  const [newTag, setNewTag] = React.useState<any>()

  React.useEffect(()=>{
    const getInitialData = async () => {
        const userResponse = await fetchUser("1111-2222-3333-4444");
        const userTagsResponse = await fetchUserTags("1111-2222-3333-4444");
        const tagsResponse = await fetchTags();
        setUser(userResponse);
        setUserTags(userTagsResponse);
        setTags(tagsResponse);
      };

      getInitialData();
  },[])

  const handleAssignTag = React.useCallback(async (tagUuid) => {
    if (isAssigning) return
    setIsAssigning(true)
    if(user){
    await assignUserTag(user.uuid, tagUuid)
    const userTagsResponse = await fetchUserTags(user.uuid);
    console.log(userTagsResponse)
    setUserTags(userTagsResponse)
    console.log(userTags)
    setIsAssigning(false)
    }
  }, [isAssigning, tags, user])

  const handleCreateTag = React.useCallback(async (title) => {
    if (isCreating) return
    setIsCreating(true)
    const response = await createTag({title})
    setNewTag(response)
    const tagsResponse = await fetchTags();
    setTags(tagsResponse)
    setIsCreating(false)
  }, [isCreating])

  const handleRemoveTag = React.useCallback(async (tagUuid) => {
    if (isAssigning) return
    setIsAssigning(true)
    const userUuid = user ? user.uuid : ''
    await removeUserTag(userUuid, tagUuid)
    const userTagsResponse = await fetchUserTags(userUuid);
    setUserTags(userTagsResponse)
    setIsAssigning(false)
  }, [isAssigning, tags, user])

  React.useEffect(()=>{
    if(newTag && newTag.uuid){
        console.log(newTag.uuid)
        handleAssignTag(newTag.uuid)
        setNewTag(undefined)
    }
  },[newTag])


  return <div className={`container-card container${(isCreating || isAssigning) ? '--isLoading' : ''}`}>
            <Tags handleCreateTag={handleCreateTag} handleAssignTag={handleAssignTag} handleRemoveTag={handleRemoveTag} tags={tags} selectedTagUuids={userTags} title={'Tags'} />
      </div>;
};

export default Home;