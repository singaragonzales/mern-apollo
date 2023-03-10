import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client"
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import ProjectDetails from "./pages/ProjectDetails"
import Projects from "./pages/Projects"


const client = new ApolloClient({
  uri: import.meta.env.VITE_URL_BK,
  cache: new InMemoryCache(),
  credentials: 'same-origin',
})

function App() {
  console.log(import.meta.env)
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
      <div className="container m-auto h-screen flex items-center justify-center">
        <Routes>
          <Route path="/" element={<Navigate to="/projects" />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </div>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
