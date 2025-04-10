import TextForm from '../components/TextForm';
import Alert from '../components/Alert';
import {useState} from 'react';

let name = "Asfund";
function Home() {
  const [alert, setAlert] = useState(null);
  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  return (
    <>
    <div className='container'>

      <Alert customClass="mt-2" alert={alert} />

      <div className='row mt-5'>
        <div className='col-6'>
          <TextForm showAlert={showAlert} />
        </div>
        <div className='col-6'>{name}</div>
      </div>

      <div className='row mt-5'>
        <div className='col-6'>
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
          </button>
        </div>
      </div>
    </div>

    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            ...
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;