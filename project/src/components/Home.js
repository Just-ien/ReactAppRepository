import React from 'react';
import Pic from './pfp.png';

function Home() {
  return (
    <div className="page-container3">
      {/* Profile Picture Placeholder */}
      <div className="profile-pic-container">
        <div className="profile-pic-placeholder">
           <span><img src = {Pic} className = "pfp" alt = "pfp"></img></span>
        </div>
      </div>

      <h1>Welcome to My Profile!</h1>
      <p>
        I am Justine Carlo F. Brillantes, a passionate aspiring developer 
        dedicated to building clean, functional, and user-friendly web 
        applications. My career goal is to bridge the gap between complex 
        backend logic and intuitive frontend design.
      </p>
    </div>
  );
}

export default Home;