import { Box, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';

const TextFieldSx = {
  backgroundColor: 'primary.light',
  borderRadius: '1em',
  fieldset: {
    border: '0px',
  },
};

export default function CreateFoodPosts() {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="firstName"
        control={control}
        render={({ field }) => <TextField {...field} sx={TextFieldSx} />}
      />
    </Box>
  );
}
