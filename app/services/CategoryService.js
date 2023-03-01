import axios from "axios";
class CategoryService{
    constructor(realtimeDb,accessTokent){
        this.collectionName = 'categories.json';
        this.realtimeDb = realtimeDb;
        this.accessTokent = accessTokent;
    };
    insertCategory = async (entity)=>{
        
        const response = await axios.post(
        this.realtimeDb + this.collectionName, entity 
        );
        const insertedId = await response.data.name;
        return insertedId;
    };
    updateCategory = async (id,entity)=>{
        const response = await axios.put(
            `${this.realtimeDb}categories/${id}.json`,entity
        );
        return response.data;
    };
    deleteCategory = async (id)=>{
        const response = await axios.delete(
            `${this.realtimeDb}categories/${id}.json`
        );
        return response.data;
    };
    findById = async (id) => {
        const response = await axios.get(
            `${this.realtimeDb}categories/${id}.json`);
        return response.data;
    };
    findAllCategories = async (entity)=>{
        const response = await axios.get(
            this.realtimeDb + this.collectionName
        );
        return response.data;
    };
};
export default CategoryService;