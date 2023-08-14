import './App.css';
import Task from './components/Task';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <TaskList
        tasks={['Погладить кота', 'Покормить кота']}
        name='Задачи'
      />
    </div>
  );
}

export default App;
