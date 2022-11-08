import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  username: yup
    .string()
    .required('Vui lòng nhập username')
    .min(5, 'Username phải từ 5 ký tự trở lên'),
  password: yup
    .string()
    .required('Vui lòng nhập password')
    .min(5, 'Password ít nhất 5 ký tự')
    .max(20, 'Password nhiều nhất 20 ký tự')
});

export const forgetPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .email('Email không hợp lệ')
    .required('Vui lòng nhập email')
});
