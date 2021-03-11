import { Provider } from 'react-redux';
import { store } from '../state';
import PatientsList from './PatientsList';



const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Patients List</h1>
        <PatientsList />
      </div>
    </Provider>
  )
};

export default App;