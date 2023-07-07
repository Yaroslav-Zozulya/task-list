import { Layout } from './components/Layout/Layout';
import { AppBar } from './components/AppBar/AppBar';
import { TaskForm } from './components/TaskForm/TaskForm';
import { TaskList } from './components/TaskList/TaskList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchTasks } from 'redux/tasks/operations';
import { selectIsLoading, selectError } from 'redux/tasks/selectors';
import { PacmanLoader } from 'react-spinners';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <Layout>
      <AppBar />
      <TaskForm />
      {isLoading && !error && <PacmanLoader />}
      <TaskList />
    </Layout>
  );
};