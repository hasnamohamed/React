import './register.css';
import Alert from 'react-bootstrap/Alert';
import { useForm } from 'react-hook-form';
function Register() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="Registercontainer">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="mb-3">
                    <label class="form-label" htmlFor="">User Name</label>
                    <input class="form-control" type="text" name="" id="" {...register('username', { required: true, minLength: 3 })} />
                    {errors?.username?.type === 'required' && <Alert variant="danger">This field is required</Alert>}
                    {errors?.username?.type === 'minLength' && <Alert variant="danger">must be at least 3</Alert>}
                </div>
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
                <div class="mb-3">
                    <label class="form-label" htmlFor="">Confirm Password</label>
                    <input class="form-control" type="password" name="" id="" {...register('confirmpassword', { required: true })} />
                    {
                        watch("confirmpassword") !== watch("password") &&
                        <Alert variant="danger">password not match</Alert>
                    }
                    {errors?.confirmpassword?.type === 'required' && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div class="mb-3">
                    <input class="form-check-input" type="checkbox" name="" id="" {...register('confirm', { required: true })} />
                    <label class="form-check-label" htmlFor="">terms and conditions</label>
                    {errors?.confirm?.type === 'required' && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div class="mb-3">
                    <label class="form-label" htmlFor="">Gender</label>
                    <select class="form-select" name="" id="" {...register('gender', { required: true })} >
                        <option value="" disabled selected>Choose One</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                    </select>
                    {errors?.gender?.type === 'required' && <Alert variant="danger">This field is required</Alert>}
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}
export default Register;