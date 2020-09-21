import React, { useState ,useEffect} from 'react'
import './feed.css';
import TweetBox from './TweetBox'
import Post from './Post'
import FlipMove from 'react-flip-move';
import db from './firebase'
function Feed() {

  const [posts,setpost] =useState([]);

  useEffect(()=>{
  
    db.collection('posts').onSnapshot(snapchot=>(

      setpost(snapchot.docs.map(doc=>doc.data()))
    ))


  },[]);

    return (
        <div className ="feed">
           <div className="feed__header"> 
         {/* Header */}
           <h2> Home </h2>
       
        </div>
        <TweetBox/>

        <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
        </div>
    )
}

export default Feed
