import axios from "axios";
export default axios.create({
    // Type command 'npm run api' in another terminal to run json file for Axios
    baseURL:"http://localhost:8000"
}  
);