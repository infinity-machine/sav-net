import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
// import { useEffect } from 'react';
import { Bio, Test } from './modalContent';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ModalCore = (props) => {

    const handleClose = (e) => {
        e.preventDefault();
        props.setModalOpen(false);
    };
    // useEffect(() => {

    // }, [props.modalContent]);

    return (
        <div>
            <Modal
                open={props.modalOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {
                        props.modalContent === '1' ? (
                            < Test handleClose={handleClose}
                            title="1"
                            content="1" />
                        ) : <></>
                    }
                    {
                        props.modalContent === '2' ? (
                            < Test handleClose={handleClose}
                            title="2"
                            content="2" />
                        ) : <></>
                    }
                    {
                        props.modalContent === '3' ? (
                            < Test handleClose={handleClose}
                            title="3"
                            content="3" />
                        ) : <></>
                    }
                    {
                        props.modalContent === '4' ? (
                            < Test handleClose={handleClose}
                            title="4"
                            content="4" />
                        ) : <></>
                    }
                    {
                        props.modalContent === 'bio' ? (
                            < Bio handleClose={handleClose} />
                        ) : <></>
                    }
                    {
                        props.modalContent === '6' ? (
                            < Test handleClose={handleClose}
                            title="6"
                            content="6" />
                        ) : <></>
                    }
                </Box>
            </Modal>
        </div>
    );
};

export default ModalCore