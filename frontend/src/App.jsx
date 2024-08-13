import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import { Box, Container } from "@chakra-ui/react";
import UserPage from "./pages/UserPage.jsx";
import PostPage from "./pages/PostPage.jsx";

function App() {
  const { pathname } = useLocation();
  return (
    <Box position={"relative"} w="full">
      <Container
        maxW={{ base: "620px", md: "900px" }}
        // maxW={pathname === "/" ? { base: "620px", md: "900px" } : "620px"}
      >
        <Header />
        <Routes>
          <Route>
            <Route path="/:username" element={<UserPage />} />
            <Route path="/:username/post/:pid" element={<PostPage />} />
          </Route>
        </Routes>
      </Container>
    </Box>
  );
}

export default App;
