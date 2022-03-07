import { Routes, Route, MemoryRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import AllFoodPosts from './allFoodPosts/AllFoodPosts';
import Container from './styles/Container';
import { ApiProvider } from './api/axiosInstance';
import theme from './styles/theme';
import { AllFoodPostsProvider } from './allFoodPosts/allFoodPostsContext';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <ApiProvider>
          <Router>
            <AllFoodPostsProvider>
              <Routes>
                <Route path="/" element={<AllFoodPosts />} />
              </Routes>
            </AllFoodPostsProvider>
          </Router>
        </ApiProvider>
      </Container>
    </ThemeProvider>
  );
};
export default App;
