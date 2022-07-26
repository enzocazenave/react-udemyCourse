//0OSTnayfHwX9GNdv9MbC9K4LlHTFG5nv
import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Messi'])
    
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;

        setCategories([newCategory,...categories])
    }

    const onDeleteCategory = (category) => {
        const categoryIndex = categories.indexOf(category);
        categories.splice(categoryIndex, 1)
        setCategories([...categories])
    }

    return (
        <>
            <p>Created by Chiki Cazenave</p>
            <h1>GifExpertApp</h1>

            <AddCategory 
                onNewCategory={value => onAddCategory(value)} 
            />

            {   
                categories.map(category => (
                    <GifGrid key={ category } category={ category } onDeleteCategory={value => onDeleteCategory(value)} />
                ))
            }
        </>
    )
}
