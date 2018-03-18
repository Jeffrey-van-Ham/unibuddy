import axios from "axios";
import { processData } from "../serializer/data-serializer";

export const fetchData = () => {
    return axios.get('./data.txt')
        .then(txt => {
            return processData(txt.data);
        });
};