
import './Modal.css';

function Modal({confirmDel, delCancel, delConfirm}) {
    return (
        <>
            <div className="modal">
                <p className="modal__title">{confirmDel}</p>
                <div className="modal__buttons">
                    <button 
                        onClick={delCancel}
                        className="btn btn__cancel"
                    >
                        Cancel
                    </button>
                    <button 
                        onClick={delConfirm} 
                        className="btn"
                    >
                        Confirm
                    </button>
                </div>
            </div>
            <div className="backdrop" />
        </>
    );
}

export default Modal;