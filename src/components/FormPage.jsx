/*
"id": 52961,
    "dish": "Budino Di Ricotta",
    "category": "Dessert",
    "cuisine": "Italian",
    */
function FormPage() {
    return (
        <div className="home-page">
            <main className="main-content">
                <h1>Add a recipe</h1>
                <section>
                    <form>
                        <label htmlFor="dish-name">
                            <input
                                id="dish-name"
                                name="dish-name"
                                value={0}
                            />
                        </label>
                        <label htmlFor="dish-category">
                            <input
                                id="dish-category"
                                name="dish-category"
                                value={0}
                            />
                        </label>
                        <label htmlFor="dish-cuisine">
                            <input
                                id="dish-cuisine"
                                name="dish-cuisine"
                                value={0}
                            />
                        </label>
                    </form>
                </section>
            </main>
        </div>
    );
}

export default FormPage;
