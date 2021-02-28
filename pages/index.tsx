import * as React from "react";
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
  const [ userTags , setUserTags ] = React.useState<string[]>([])

  React.useEffect(()=>{
    const getUsers = async () => {
        const userTagsResponse = await fetchUserTags("1111-2222-3333-4444");
        const tagsResponse = await fetchTags("1111-2222-3333-4444");
        setUserTags(userTagsResponse);
      };

    getUsers();
  },[])

  return <>
   <Tags title={'halo'} />
      {JSON.stringify(userTags)}
      <h2>Start editing to see some magic happen!</h2>
      <p>
        For convenience I've just added in some buttons that will excute the
        mocked API functions and log their results to the console. Feel free to
        play around and remove these
      </p>
      <button onClick={() => fetchTags().then(console.log)}>Get Tags</button>
      <button
        onClick={() => fetchUser("1111-2222-3333-4444").then(console.log)}
      >
        Get User
      </button>
      <button
        onClick={() => fetchUserTags("1111-2222-3333-4444").then(console.log)}
      >
        Get User Tags
      </button>
      <button
        onClick={() =>
          createTag({ title: "My tag " + Math.random() }).then(console.log)
        }
      >
        Create new tag
      </button>
      {/* <button
        onClick={() =>
          assignUserTag("1111-2222-3333-4444", prompt("Enter a Tag UUID")).then(
            console.log
          )
        }
      >
        Assign Tag
      </button>
      <button
        onClick={() =>
          removeUserTag("1111-2222-3333-4444", prompt("Enter a Tag UUID")).then(
            console.log
          )
        }
      >
        Remove Tag
      </button> */}
  </>;
};

export default Home;