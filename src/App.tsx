import MapView from './components/MapView';
import { dummyPosts } from './data/dummyPosts';

const App = () => {
  return (
    <div>
      <MapView posts={dummyPosts} />
    </div>
  );
};

export default App;