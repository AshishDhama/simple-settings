import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import InputField from '../../../shared-resources/components/InputField';

interface LoginFormProps {
  onSubmit: (values: any) => void;
}

const LoginForm: React.FC<LoginFormProps> = function (props: LoginFormProps) {
  const { onSubmit } = props;
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Valid email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className='flex flex-col space-y-5'>
      <InputField
        id='email'
        type='email'
        placeholder='Email'
        required
        errors={formik.errors.email}
        touched={formik.touched.email}
        {...formik.getFieldProps('email')}
      />
      <InputField
        id='password'
        type='password'
        placeholder='Password'
        required
        errors={formik.errors.password}
        touched={formik.touched.password}
        {...formik.getFieldProps('password')}
      />
      <button className='cursor-pointer focus:outline-none' type='submit'>
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
