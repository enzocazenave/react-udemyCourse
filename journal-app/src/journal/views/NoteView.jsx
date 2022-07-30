import { DeleteOutline, SaveOutlined, UploadOutlined } from '@mui/icons-material';
import { Typography, Grid, Button, TextField, IconButton } from '@mui/material';
import { ImageGallery } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { useEffect, useMemo, useRef } from 'react';
import { setActiveNote, startDeletingNote, startSaveNote, startUploadingFiles } from '../../store/journal';
import Swal from 'sweetalert2';
import { fileCheck } from '../../helpers';



export const NoteView = () => {

    const dispatch = useDispatch();
    const { active: note, messageSaved, isSaving } = useSelector(state => state.journal);
    
    const { body, title, date, onInputChange, formState } = useForm(note);

    const dateString = useMemo(() => {
        const newDate = new Date(date);
        
        return newDate.toLocaleTimeString('es-AR', {weekday: "long", year:
        "numeric", month: "long", day: "numeric"});
    }, [date]);

    const fileInputRef = useRef();
    
    useEffect(() => {
        dispatch(setActiveNote(formState));
    }, [formState])

    useEffect(() => {
        if (messageSaved.length > 0) {
            Swal.fire('Nota actualizada', messageSaved, 'success');
        }
    }, [messageSaved])
    
    const onSaveNote = () => {
        dispatch(startSaveNote());
    }

    const onFileInputChange = ({ target }) => {
        const checkedFiles = fileCheck(target);
        if (checkedFiles.length == 0) return;
        
        dispatch(startUploadingFiles(checkedFiles));
    }

    const onDelete = () => {
        dispatch(startDeletingNote());
    }

    return (
        <Grid 
            container 
            direction='row' 
            justifyContent='space-between' 
            alignItems='center' 
            sx={{ mb: 1 }}
            className='animate__animated animate__fadeIn animate__faster'
        >
            <Grid item>
                <Typography fontSize={ 39 } fontWeight='light'> { dateString }</Typography>
            </Grid>
            <Grid item>

                <input 
                    style={{ display: 'none' }}
                    type="file"
                    multiple
                    onChange={ onFileInputChange }
                    ref={ fileInputRef }
                    accept="image/*"
                />

                <IconButton
                    color="primary"
                    disabled={ isSaving }
                    onClick={ () => fileInputRef.current.click() }
                >
                    <UploadOutlined/>
                </IconButton>

                <Button 
                    disabled={ isSaving }
                    onClick={ onSaveNote }
                    color="primary" 
                    sx={{ padding: 2 }}
                >
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }}/>
                    Guardar
                </Button>
            </Grid>
            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Ingrese un título"
                    label="Título"
                    sx={{ border: 'none', mb: 1 }}
                    name="title"
                    value={ title }
                    onChange={ onInputChange }
                />

                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="¿Qué sucedió en el día de hoy?"
                    minRows={ 5 }
                    name="body"
                    value={ body }
                    onChange={ onInputChange }
                />
            </Grid>

            <Grid container justifyContent="end">
                <Button
                    onClick={ onDelete }
                    sx={{ mt: 2 }}
                    color="error"
                >
                    <DeleteOutline/>
                    Borrar
                </Button>
            </Grid>

            <ImageGallery images={ note.imageUrls } />
        </Grid>
    )
}
