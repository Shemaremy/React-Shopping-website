import React, {useState, useEffect} from "react";
import Avatar from 'react-avatar';
import { useNavigate } from 'react-router-dom';
import {handleLinkClickMobile} from './Components/Header'



function Mobilepanel () {
    const navigate = useNavigate();

    const handleGotoAccounts = () => {
      if (switchAcc !== 'Log out') {
        navigate('/accounts');
      }
    };

    const handleGotoLogout = () => {
      if (switchAcc === 'Log out') {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        window.location.reload();
      } else {
        navigate('/accounts');
      }
    };

    const [username, setUsername] = useState('Create account');
    const [switchAcc, setSwitchAcc] = useState('Sign in');

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        const changeIcon = document.querySelector('.account-icon-mobile');
        const changeShadow = document.querySelector('.user-profile-container');
        if (storedUsername) {
        setUsername(storedUsername);
        setSwitchAcc('Log out');        
        changeIcon.classList.add('is-active');
        changeShadow.classList.add('is-active');
        }
    }, []);

    return (
        <div className="big-nav-panel-mobile">
            <div className='main-nav-panel'>
              <div className='list-container'>
                <div className='main_lists'>
                  <div className='sect-1'>
                    <div className='user-profile-container'>
                    {switchAcc === 'Log out' ? (
                      <Avatar name={username} size="70" round={true} className="avatar" />
                    ) : (
                      <i className="fa-solid fa-user account-icon-mobile"></i>
                    )}
                    </div>
                    <div className='sign-in-container'>
                      <h3 className='create-account-header' onClick={handleGotoAccounts}>{username}</h3>
                      <h3 className='sign-in-header' onClick={handleGotoLogout}>
                        {switchAcc === 'Log out' ? <> Log out <i className="fa-solid fa-arrow-right-from-bracket logout-ico"></i></> : (switchAcc)}
                      </h3>
                    </div>
                  </div>
                  <div className='sect-2'>
                    <h4 onClick={(e) => handleLinkClickMobile('B', e)}>Our products <i className="fa-solid fa-chevron-right"></i></h4>
                  </div>
                  <div className='sect-3'>
                    <h4 onClick={(e) => handleLinkClickMobile('Our_picks_container', e)}>Our picks <i className="fa-solid fa-chevron-right"></i></h4>
                  </div>
                  <div className='sect-4'>
                    <h4 onClick={(e) => handleLinkClickMobile('Upper-part-trend', e)}>Trending items <i className="fa-solid fa-chevron-right"></i></h4>
                  </div>
                  <div className='sect-5'>
                    <h4 onClick={(e) => handleLinkClickMobile('C', e)}>About us <i className="fa-solid fa-chevron-right"></i></h4>
                  </div>
                  <div className='sect-6'>
                    <h4 onClick={(e) => handleLinkClickMobile('C', e)}>Contact us <i className="fa-solid fa-chevron-right"></i></h4>
                  </div>
                </div>
              </div>
            </div>
        </div>
    );
}


export default Mobilepanel;
