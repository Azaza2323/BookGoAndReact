    import React, { useState, useEffect } from "react";

    const Book = () => {
        const [books, setBooks] = useState([]);

        useEffect(() => {
            fetchAllBooks();
        }, []);

        const fetchAllBooks = async () => {
            try {
                const response = await fetch("http://localhost:1111/", {
                    method: "GET",
                });
                if (response.ok) {
                    const data = await response.json();
                    console.log("All books:", data);
                    setBooks(data); // Set the fetched books into state
                } else {
                    console.error("Failed to fetch all books");
                }
            } catch (error) {
                console.error("Network error:", error);
            }
        };

        return (
            <div>
                <h1>Books</h1>
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Author</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Image</th>
                    </tr>
                    </thead>
                    <tbody>
                    {books.map((book) => (
                        <tr key={book.id}>
                            <td>{book.name}</td>
                            <td>{book.author}</td>
                            <td>{book.description}</td>
                            <td>{book.category}</td>
                            <td><img src={book.image} alt={book.name} /></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    };

    export default Book;
