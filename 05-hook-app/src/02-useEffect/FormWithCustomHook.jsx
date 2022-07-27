import { useForm } from '../hooks/';

export const FormWithCustomHook = () => {

    const { formState, onInputChange, onResetForm, username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    });
    
    return (
        <>
            <h1>Formulario con Custom Hook</h1>
            <hr />
        
            <input 
                type="text" 
                placeholder="Usuario" 
                className="form-control" 
                name="username"
                value={ username } 
                onChange={ onInputChange }
            />

            <input 
                type="email" 
                placeholder="Correo electronico" 
                className="form-control mt-2" 
                name="email" 
                value={ email }
                onChange={ onInputChange }
            />

            <input 
                type="password" 
                placeholder="Contraseña" 
                className="form-control mt-2" 
                name="password" 
                value={ password }
                onChange={ onInputChange }
            />

            <button onClick={ onResetForm } className="btn btn-primary mt-2">Borrar</button>
        </>
    )
}
