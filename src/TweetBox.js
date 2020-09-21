import React ,{useState} from 'react'
import './TweetBox.css';
import { Avatar ,Button } from '@material-ui/core';
import db from './firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");


    const sendTweet=(e)=>{
     
        e.preventDefault();

        db.collection('posts').add({
      
            displayName: "Shyan Khanal",
            username: "Sithu Htet",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar:"https://cdn.vox-cdn.com/thumbor/wlcZ-wYlPy5uijdXNTzYfblvuAw=/0x0:6720x4480/1200x800/filters:focal(2929x1639:4003x2713)/cdn.vox-cdn.com/uploads/chorus_image/image/66528420/1206292069.jpg.0.jpg"
            
        })
    setTweetImage("");
    setTweetMessage("");
    };
  
    return (
        <div className="tweetBox"> 
            <form>
                 
            <div className="tweetBox__input">
     <Avatar src="https://compote.slate.com/images/8e3c6314-1fc2-4205-a177-8de0d9299a1a.jpeg?width=780&height=520&rect=1560x1040&offset=0x0"/>
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
                 </form>
        </div>
    )
}
export default TweetBox;
