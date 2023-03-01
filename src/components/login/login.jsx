import './login.css';
import Alert from 'react-bootstrap/Alert';
import { useForm } from 'react-hook-form';
function Login() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <form className='Registercontainer' onSubmit={handleSubmit(onSubmit)}>
            <div class="mb-3">
                <label class="form-label" htmlFor="">Email</label>
                <input class="form-control" type="email" name="" id="" {...register('email', { required: true, pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" })} />
                {errors?.email?.type === 'required' && <Alert variant="danger">This field is required</Alert>}
                {errors?.email?.type === 'pattern' && <Alert variant="danger">must be valid email</Alert>}
            </div>
            <div class="mb-3">
                <label class="form-label" htmlFor="">Password</label>
                <input class="form-control" type="password" name="" id="" {...register('password', { required: true })} />
                {errors?.password?.type === 'required' && <Alert variant="danger">This field is required</Alert>}
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    );
}
export default Login;