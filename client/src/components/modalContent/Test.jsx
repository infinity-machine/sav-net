import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Test = (props) => {
    return (
        <>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                {props.title}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {props.content}
            </Typography>
            <Button onClick={props.handleClose}>CLOSE MODAL</Button>
        </>
    );
};

export default Test;