import { GifItem } from "./";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category, onDeleteCategory }) => {

    const {images, isLoading} = useFetchGifs(category);

    const deleteCategory = () => onDeleteCategory(category);

    return (
        <>
            <h3>{ category } <button onClick={ deleteCategory } className="delete-button">Eliminar</button></h3>
            
            { 
                isLoading && (<h2>Cargando...</h2>) 
            }
            
            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifItem 
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}
