
import './App.css';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddButton from './components/AddButton';
import "./style.css";
import Counter from './components/CounterComponent';


const App = () => {
  return (
    <div className='todo-container'>
      <Counter />
      <Header title = "Todo" /> 
      <TodoItem title = "Eat" completed = {true} />
      <TodoItem title = "Code" completed = {true} />
      <TodoItem title = "Sleep" />
      <TodoItem title = "Repeat" />
      <AddButton title = "Add Item" />
    </div>
  );
}

export default App;
