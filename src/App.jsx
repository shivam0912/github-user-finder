
import { useState } from 'react'

import './App.css'
import Profile from './components/Profile'
import Repository from './components/Repository'

function App() {

  const [user,setUser] = useState('')
  const [userData,setUserData] = useState(null);
  const [repos,setRepos] = useState([]);


  
  const handleSearch = async () =>{
    try{
      const userResponse = await fetch(`https://api.github.com/users/${user}`);
      const userRepos = await fetch(`https://api.github.com/users/${user}/repos`);

      if(userResponse.ok && userRepos.ok){
        const data = await userResponse.json();
        const reposData = await userRepos.json();

        setUserData(data);
        setRepos(reposData)
        console.log("data successfully set")
      }else{
        setUserData(null);
        setRepos([]);
        console.log("data not set")

      }
    }catch (error){
        console.log('Error Fetching user data: ',error)
        setUserData(null);
        setRepos([]);

      }

    };

  return (
    <>
      <input type='text' 
      placeholder='Search User' 
      className="mt-1 p-2 w-[700px] border rounded "
      value={user}
      onChange={(e)=> setUser(e.target.value)}
      
      />
      <button onClick={handleSearch} className='bg-red-400 border rounded p-2  m-3 w-[100px]'>Search</button>
     
     <div className='flex mt-20 border rounded border-black'>
     <div className=' mt-20 mb-10'>
      <Profile userData={userData}/>
      </div>

      <div className="p-6 border border-black w-full">
          <h2 className="bg-red-400 font-bold text-2xl mb-[50px] p-3 border rounded">
            Your Repositories
          </h2>
          <div className="repos-list" style={{ maxHeight: "400px", overflowY: "auto" }}>
            {repos.map((repo) => (
              
                <Repository repo={repo} key={repo.id}/>
              
            ))}
          </div>
        </div>
     </div>
    </>
  )
}

export default App
