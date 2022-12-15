import React, {useState} from 'react';
import './App.css';

import { useGetAllPostQuery, useGetAllPostByIdQuery, useGetPostByLimintQuery, useDeletePostByIdMutation, useCreatePostMutation} from './Services/Post';

function App() {
  // get data

  // let responseInfo = useGetAllPostQuery();
  // let GetResByid = useGetAllPostByIdQuery(5)
  // let GetDataLimited = useGetPostByLimintQuery(12)

  //delete data
  // let [DeleteData, responeInfo] = useDeletePostByIdMutation();


  //create Post
  let [createData, responeInfo] = useCreatePostMutation();

  const [newPost, setnewPost] = useState({
    title:'',
    body:'',
    userId:''
  });

  const inputValue = (e) =>{
    e.preventDefault()
      const {value, name} = e.target;

      setnewPost((PreV)=>{
        return{
          ...PreV,
          [name]:value
        }
      })
  }


  if(responeInfo.isSuccess){
    // console.log('');
    console.log('create : ', responeInfo.isSuccess);
  }
  console.log('create Post', responeInfo);

  return (
    <div className="App">
      <h1>hello redux</h1>
      <input name='title' value={newPost.title} onChange={inputValue} />
      <input name='body' value={newPost.body} onChange={inputValue} />
      <input name='userId' value={newPost.userId} onChange={inputValue} />

      {/* delete data */}
      {/* <button onClick={()=>DeleteData(2)}>Delete</button> */}

      {/* create data */}
      <button onClick={()=>{createData(newPost)}}>Create Post</button>

    </div>
  );
}

export default App;
