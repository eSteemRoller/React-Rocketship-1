import './App.css';
import Modal from './components/Modal.jsx';
import Title from './components/Title.jsx';
import Todo from './components/Todo.jsx';


function App() {
  return (
    <div>
      <Title />
      <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value)
        }} />
        <button>Add To-do</button>
      </div>
      <div className="todo__wrapper">
        <Todo 
          title="Finish Frontend Simplified" 
          par="Code along with FES step-by-step."
        />
        <Todo 
          title="Finish the interview section" 
          par="Answer correctly and confidently every interview question."
        />
        <Todo title="Land $100K job" 
          par="Apply to 100 jobs."
        />
      </div>
      <Modal confirmDel="Are you sure?" /> 
    </div>
  );
}

export default App;
