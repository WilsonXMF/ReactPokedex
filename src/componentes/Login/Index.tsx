import { Box, Button, ButtonGroup, TextField } from '@mui/material';
import React, { useState } from 'react';


// import { Container } from './styles';

export const Login: React.FC = () => {
    const [email, setEmail] = useState<string>("")
    const [senha, setsenha] = useState<string>("")


    const clicouNoLogin = () => {
        console.log("ClicouNoEmail", email)
        console.log("Clicou na senha", senha)

    }
    return (
        <><div style={{ display: "flex", flexDirection: "column" }}>
            <TextField id="outlined-basic" label="Nome" variant="outlined" onChange={(e) => setEmail(e.target.value)} />
            <TextField id="outlined-password-input" label="SobreNome" type="string" autoComplete="" sx={{ marginTop: "20px", marginY: "20px" }}
                onChange={(gradizinha) => setsenha(gradizinha.target.value)} />

        </div>
        
        </>
    );
   
}