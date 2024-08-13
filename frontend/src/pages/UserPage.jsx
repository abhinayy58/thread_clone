import React from 'react'
import UserHeader from '../components/UserHeader.jsx';
import UserPost from '../components/UserPost.jsx';

const UserPage = () => {
  return (
   <>
   <UserHeader />
   <UserPost postImg="/post1.png" postTitle="this is my first post" likes={1213} replies={400} />
   <UserPost postImg="/post2.png" postTitle="this is my second post" likes={543} replies={83} />
   <UserPost postImg="/post3.png" postTitle="this is my third post" likes={323} replies={238} />
   </>
  )
}

export default UserPage