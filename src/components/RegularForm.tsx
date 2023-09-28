import { useForm } from 'react-hook-form';
import './RegularForm.css';

interface FormData {
  username: string;
  email: string;
  password: string;
}

function RegularForm() {
  const { register, handleSubmit, formState: {errors} } = useForm<FormData>();
  const onSubmit = (data: FormData) => alert(JSON.stringify(data));

  return (
    <form className='form' onSubmit={handleSubmit(onSubmit)}>
      <h1>I was made by React Hook Form</h1>
      <div className='form-field'>
        <input {...register("username", { required: "User name is required", minLength: {value: 2, message: "The user name must be at least 2 characters"}}) } type='name' placeholder="User name" />
        <p className='error-message'>{errors.username?.message}</p>
      </div>
      <div className='form-field'>
        <input {...register("email", { required: "Email is required", pattern: {value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "invalid email"}}) } type='email' placeholder="Email" />
        <p className='error-message'>{errors.email?.message}</p>
      </div>
      <div className='form-field'>
        <input {...register("password", { required: "Password is required", pattern: {value: /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[@#$%^&+=!]).*$/, message: "The password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"} , minLength: {value: 8, message: "Password must be at least 8 characters"}, maxLength: {value: 20, message: "Password can be at most 20 characters"} })} type='password' placeholder="Password" />
        <p className='error-message'>{errors.password?.message}</p>
      </div>
      <button className='submit-btn' type="submit">Submit</button>
    </form>
  );
}

export default RegularForm;
