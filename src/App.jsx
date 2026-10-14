import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import RoomList from './components/RoomList';
import StickyZalo from './components/StickyZalo';
import Footer from './components/Footer';

function App() {
  // Default Zalo link - có thể lấy từ config hoặc API
  const defaultZaloLink = 'https://zalo.me/0373971926';

  return (
    <div className="app">
      <Header />
      <Hero zaloLink={defaultZaloLink} />
      <RoomList />
      <StickyZalo zaloLink={defaultZaloLink} />
      <Footer />
    </div>
  );
}

export default App;
