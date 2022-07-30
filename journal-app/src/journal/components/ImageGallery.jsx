import { Button, ImageList, ImageListItem, Typography } from '@mui/material';
import { DeleteOutline } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { startDeletingImage } from '../../store/journal';

export const ImageGallery = ({ images }) => {

    const dispatch = useDispatch();

    const onDeleteImage = (image) => {
        dispatch(startDeletingImage(image));
    }

    return (
        <ImageList cols={ 5 } sx={{ width: "100%" }}>
            {
                (images?.length > 0)
                    ? images.map((image) => (
                        <ImageListItem
                            className="" 
                            key={image}
                        >
                            <img 
                                style={{ 
                                    borderTopLeftRadius: 10,
                                    borderTopRightRadius: 10,
                                }}
                                src={ image }
                                alt="Imagen de la nota"
                                loading="lazy"
                            />

                            <Button 
                                fullWidth
                                sx={{
                                    backgroundColor: 'primary.main',
                                    borderRadius: 0,
                                    borderBottomLeftRadius: 10,
                                    borderBottomRightRadius: 10,
                                    ":hover": { backgroundColor: 'primary.main' }
                                }}
                                onClick={ () => onDeleteImage(image) }
                            >
                                <DeleteOutline color="error" />
                            </Button>
                        </ImageListItem>
                    ))
                    : <Typography>No hay imágenes cargadas</Typography>
            }
        </ImageList>
    );
}