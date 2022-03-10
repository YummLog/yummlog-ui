import { Routes, Route, MemoryRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import AllFoodPosts from './allFoodPosts/AllFoodPosts';
import Container from './styles/Container';
import { ApiProvider } from './api/axiosInstance';
import theme from './styles/theme';
import { AllFoodPostsProvider } from './allFoodPosts/allFoodPostsContext';
import NavTabs from './common/NavTabs';
import CreateFoodPosts from './createFoodPosts/createFoodPosts';
import Heading from './common/Heading';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <ApiProvider>
          <Router>
            <Heading type="h3" text="Yumm Log" />
            <NavTabs />
            <AllFoodPostsProvider>
              <Routes>
                <Route path="/" element={<AllFoodPosts />} />
                <Route path="/create-food-posts" element={<CreateFoodPosts />} />
              </Routes>
            </AllFoodPostsProvider>
          </Router>
        </ApiProvider>
      </Container>
    </ThemeProvider>
  );
};
export default App;
