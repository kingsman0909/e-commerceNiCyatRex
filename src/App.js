import logo from './components/logo.svg';
import Header from './components/header';
import Footer from './components/Footer';
import Profile from './components/Profile';
import React, {useState} from 'react';

function App() {

  const [page, setPage] = useState('');
  const showPage = (name) => {
    if(page === 'logout'){
      setPage('logout');
    }
    else{
      setPage(name);
    }
  }
  return (
    <>
      <Header showPage={setPage}/>
      <main>
        {page === 'Profile' ? <Profile /> : null}
      </main>
    </>
  );
}

export default App;
