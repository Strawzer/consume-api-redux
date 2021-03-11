import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypeSelector';


const PatientsList: React.FC = () => {
  const { getPatients } = useActions();
  const state = useTypedSelector(
    (state) => state.patients.data
  );
  console.log(state);
  const onSubmit = (event : React.FormEvent<HTMLFormElement> ) => {
    event.preventDefault();
    getPatients();
  };
  
  return (
    <div>
    <form onSubmit={onSubmit}>
      <input />
      <button>Get</button>
    </form>
  );
  </div>
  )
};

export default PatientsList;