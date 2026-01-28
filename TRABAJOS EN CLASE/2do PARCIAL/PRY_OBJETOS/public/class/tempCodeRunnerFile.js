const BASE_URL3 = 'https://api.escuelajs.co/api/v1';


async function createCategory(name, image) {
    try {

        const newCategory = {
            name: name,
            image: image
        };

        const response = await fetch(`${BASE_URL3}/categories/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCategory)
        });

        if (!response.ok) {
            throw new Error(`HTTP Error status: ${response.status}`);
        }

        const createdCategory = await response.json();
        console.log('Categoría creada exitosamente:', createdCategory);
        return createdCategory;

    } catch (error) {
        console.error('Fetch error:', error.message);
    }
}
createCategory('BASES', 'https://placeimg.com/640/480/any');