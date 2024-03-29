import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Bio = (props) => {
    return (
        <>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                BIO TITLE
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                This is the modal triggered by the front side of the cube!
            </Typography>
            <Button onClick={props.handleClose}>CLOSE MODAL</Button>
        </>
    );
};

export default Bio;