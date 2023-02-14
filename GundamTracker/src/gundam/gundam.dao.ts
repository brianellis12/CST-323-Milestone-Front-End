import  { OkPacket } from 'mysql';
import { execute } from '../services/mysql.connector';
import { Gundam } from './gundam.model';
import { gundamQueries } from './gundam.queries';

// Get all models using query
export const readModels = async () => {
    return execute<Gundam[]>(gundamQueries.readModels, []);
};
// Get models by name using query
export const readModelsByName = async (modelName: string) => {
    return execute<Gundam[]>(gundamQueries.readModelsByName, [modelName]);
};
// Get models with a similar name using query
export const readModelsByNameSearch = async (search: string) => {
    console.log('Search param: ', search);
    return execute<Gundam[]>(gundamQueries.readModelsByNameSearch, [search]);
};
// Get models by grade using query
export const readModelsByGrade = async (grade: string) => {
    return execute<Gundam[]>(gundamQueries.readModelsByGrade, [grade]);
};
// Get models with a similar grade using query
export const readModelsByGradeSearch = async (search: string) => {
    console.log('Search param: ', search);
    return execute<Gundam[]>(gundamQueries.readModelsByGradeSearch, [search]);
};
// Get models by origin using query
export const readModelsByOrigin = async (origin: string) => {
    return execute<Gundam[]>(gundamQueries.readModelsByOrigin, [origin]);
};
// Get models with a similar origin using query
export const readModelsByOriginSearch = async (search: string) => {
    console.log('Search param: ', search);
    return execute<Gundam[]>(gundamQueries.readModelsByOriginSearch, [search]);
};
// Get models by ID using query
export const readModelsById = async (modelId: number) => {
    return execute<Gundam[]>(gundamQueries.readModelsById, [modelId]);
};
// Create a new model using query
export const createModel = async (gundam: Gundam) => {
    return execute<OkPacket>(gundamQueries.createModel, [gundam.modelName, gundam.grade, gundam.origin, gundam.purchaseDate, gundam.price, gundam.image]);
};
// Update a model with a matching ID using query
export const updateModel = async (gundam: Gundam) => {
    return execute<OkPacket>(gundamQueries.updateModel, [gundam.modelName, gundam.grade, gundam.origin, gundam.purchaseDate, gundam.price, gundam.image, gundam.modelId]);
};
// Delete a model with a matching ID using query
export const deleteModel = async (modelId: number) => {
    return execute<OkPacket>(gundamQueries.deleteModel, [modelId]);
};