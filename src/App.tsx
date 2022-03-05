import { Routes, Route, MemoryRouter as Router } from 'react-router-dom';
import AllFoodLogs from './allFoodLogs/AllFoodLogs';
import Header from './common/header';
import Providers from './context';
import Container from './styles/Container';

const App = () => {
  return (
    <Providers>
      <Container>
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<AllFoodLogs />} />
          </Routes>
        </Router>
      </Container>
    </Providers>
  );
};
export default App;
