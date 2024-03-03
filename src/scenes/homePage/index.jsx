import { Box } from "@mui/material";
import Navbar from "../navbar";
import Book from "../components/showAllBooks"
import AddBook from "../components/CreateBooks";
const HomePage = () => {
    // const { _id, picturePath } = useSelector((state) => state.user);

    return (
        <Box>
            <Navbar />
            <Book/>
            <AddBook/>
        </Box>
    );
};

export default HomePage;
