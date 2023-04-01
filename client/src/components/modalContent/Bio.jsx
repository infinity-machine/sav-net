import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Bio = (props) => {
    return (
        <>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
            <Button onClick={props.handleClose}>CLOSE MODAL</Button>
        </>
    );
};

export default Bio;