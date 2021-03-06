import React, { useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const loginForm = [
  {
    id: 'userId',
    name: 'userId',
    label: '아이디',
  },
  {
    id: 'password',
    name: 'password',
    label: '비밀번호',
  },
];

function Login({ onClick }: any) {
  const [form, setForm] = useState({
    userId: '',
    password: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleClick = () => {
    onClick({ ...form });
  };

  return (
    <>
      {loginForm.map((input) => (
        <Box
          key={input.id}
          sx={{
            marginTop: '8px',
            marginBottom: '16px',
          }}
        >
          <TextField
            id={input.id}
            name={input.name}
            label={input.label}
            onChange={handleChange}
            size="small"
            fullWidth
          />
        </Box>
      ))}
      <Button variant="contained" onClick={handleClick} fullWidth>
        로그인
      </Button>
    </>
  );
}

export default Login;
