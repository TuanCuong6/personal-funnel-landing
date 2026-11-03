import Hero from '../components/Hero';
import RoomList from '../components/RoomList';

function HomePage() {
  // Default Zalo link - có thể lấy từ config hoặc API
  const defaultZaloLink = 'https://zalo.me/0373971926';

  return (
    <>
      <Hero zaloLink={defaultZaloLink} />
      <RoomList />
    </>
  );
}

export default HomePage;
