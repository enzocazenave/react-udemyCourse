import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Enzo',
        email: 'encaze@hotmail.com'
    })

    const { username, email } = formState;
    
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value,
        });
    }

    useEffect(() => {
        //console.log('useEffect called!');
    }, []); 

    // LA LISTA VACIA INDICA QUE SE VA A EJECUTAR CUANDO SE RENDERIZA EL COMPONENTE POR PRIMERA VEZ, SI SE SACA SE EJECUTARA
    // SIEMPRE QUE SE VUELVA A RENDERIZAR EL COMPONENTE

    useEffect(() => {
        //console.log('formState changed!');
    }, [formState]); 
    
    // SIEMPRE QUE CAMBIE formState SE EJECUTA EL useEffect    

    useEffect(() => {
        //console.log('email changed!');
    }, [email]); 

    // SIEMPRE QUE CAMBIE email SE EJECUTA EL useEffect  
    
    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />
        
            <input 
                type="text" 
                placeholder="Username" 
                className="form-control" 
                name="username"
                value={username} 
                onChange={ onInputChange }
            />

            <input 
                type="email" 
                placeholder="email@hotmail.com" 
                className="form-control mt-2" 
                name="email" 
                value={email}
                onChange={ onInputChange }
            />

            {
                (username == 'Enzo') && <Message/>
            }
        </>
    )
}
