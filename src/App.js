// import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm';

function App() {
  return (
    <div className="container">
      <h1 className="text-center mt-5">User Registration</h1>
      <div className="row">
        <div className="col-6 offset-3">
          <UserForm />
        </div>
      </div>
    </div>
  );
}

export default App;
