import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import CloseIcon from '@mui/icons-material/Close';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useState } from "react"

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
  borderRadius: "10px"
};

export default function BasicModal() {

  const [responses, setResponses] = useState([])
  const [contador, setContador] = useState(0)

  const Get = () => {
    setResponses(JSON.parse(sessionStorage.getItem('cart')))
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
        <LocalMallIcon sx={{
          fontSize: 30,
          color: "rgb(89, 55, 28)"
        }} />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CloseIcon
            onClick={handleClose}
            className='closeIcon'
            style={{
              top: 0,
              position: "absolute",
              display: "flex",
              left: 366,
              marginTop: 3,
              cursor: "pointer"
            }} />
          <Typography id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Este é seu carrinho de compras
          </Typography>
          <Typography id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            Os produtos vão ficar aki, em forma de cards <br /> <br />

            {contador}

            <DeleteForeverIcon onClick={() => {
              sessionStorage.removeItem("cart")
              setContador(0)
            }} style={{
              fontSize: "30px",
              cursor: "pointer"
            }} />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}