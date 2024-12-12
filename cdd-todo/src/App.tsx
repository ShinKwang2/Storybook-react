import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TodoListContextProvider } from './contexts/TodoList-context';
import Header from './components/organisms/Header';
import TodoListPage from './pages/TodoListPage';
import TodoInputPage from './pages/TodoInputPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <TodoListContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<TodoListPage />} />
          <Route path="/add" element={<TodoInputPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TodoListContextProvider>
    </BrowserRouter>
  );
}

export default App;
