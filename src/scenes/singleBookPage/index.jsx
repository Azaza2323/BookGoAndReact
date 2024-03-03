import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Navbar from "../navbar";
import { useParams } from "react-router-dom";

const SingleBookPage = () => {
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const { bookId } = useParams();

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await fetch(`http://localhost:1111/${bookId}`, {
                    method: "GET",
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log("Book details:", data);
                    setBook(data);
                } else {
                    console.error("Failed to fetch book details:", response.statusText);
                }
            } catch (error) {
                console.error("Network error:", error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBook();
    }, [bookId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!book) {
        return <div>Failed to fetch book details</div>;
    }

    return (
        <Box>
            <Navbar />
            <div>
                {book.map((book) => (
                    <div key={book.id}>
                        <p><strong>Name:</strong> {book.name}</p>
                        <p><strong>Author:</strong> {book.author}</p>
                        <p><strong>Description:</strong> {book.description}</p>
                        <p><strong>Category:</strong> {book.category}</p>
                        <p><strong>Image:</strong> <img src={book.image} alt={book.name}/></p>
                    </div>
                ))}
            </div>

        </Box>
    );
};

export default SingleBookPage;
