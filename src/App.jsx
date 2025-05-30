import './App.css';
import Modal from './components/Modal.jsx';
import Title from './components/Title.jsx';
import Todo from './components/Todo.jsx';
import React, {useState} from 'react';


function App() {

  const [showModal, setShowModal] = useState(false);

  function deleteTodo() {
    setShowModal(true);
  }

  function cancelModal() {
    setShowModal(false);
  }

  function confirmModal() {
    setShowModal(false);
  }
  
  return (
    <div>
      <Title />
      <div>
        <p>
        <input type="text" className="add-todo" onChange={(event) => {
          console.log(event.target.value)
        }} />
          <button>Add To-Do</button>
        </p>
      </div>
      <div className="todo__wrapper">
        <Todo 
          todoDelete={deleteTodo}
          title="Finish Frontend Simplified" 
          par="Code along with FES step-by-step."
        />
        <Todo 
          todoDelete={deleteTodo}
          title="Finish the interview section" 
          par="Answer every interview question correctly and confidently."
        />
        <Todo 
          todoDelete={deleteTodo}
          title="Land $100K job" 
          par="Apply to 100 jobs."
        />
      </div>
      {showModal && (
        <Modal 
        delCancel={cancelModal} 
        delConfirm={confirmModal} 
        confirmDel="Confirm Delete?" 
        />
      )}
    </div>
  );
}

export default App;
