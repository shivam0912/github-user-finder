/* eslint-disable react/prop-types */
import React from 'react';

function Profile({userData}) {

    if (!userData) {
        // Handle the case when userData is null
        return (
          <div className='bg-white relative mt-[100px] h-[500px] w-[400px] rounded-md'>
            <p>Loading user data...</p>
          </div>
        );
      }
    const { name, login, followers, following,avatar_url } = userData;
   
  return (
    <div className='bg-black relative m-5 h-[380px] w-[450px] rounded-md flex justify-between items-center'>
      <img
        src={avatar_url}
         alt="AirMax Pro"
        className="z-0 h-[220px] w-[220px] p-5 rounded-md"
      />
      <div className='text-white ml-5'>
        <div className='mb-1'>
          <h2 className='font-bold text-3xl pr-3'>{name}</h2>
          <p className='p-5'>@{login}</p>
        </div>
        <div className='flex'>
          <p>{followers} followers</p>
          <p className='mr-5 ml-4'>{following} following</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
