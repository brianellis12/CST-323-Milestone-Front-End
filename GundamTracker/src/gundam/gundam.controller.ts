import { json, Request, RequestHandler, Response } from "express";
import { Gundam } from './gundam.model';
import * as GundamDAO from './gundam.dao';
import { OkPacket } from "mysql";

// Controller method for reading all models using DAO readModels method
export const readModels: RequestHandler = async (req: Request, res: Response) => {
    try {
        let gundam;
        let modelId = parseInt(req.params.modelId as string);

        console.log('modelId', modelId);
        // Check if modelId is a number
        if (Number.isNaN(modelId)) {
            // Get all models if true
            gundam = await GundamDAO.readModels();
        } else {
            // Get model by ID if true
            gundam = await GundamDAO.readModelsById(modelId);
        }

        res.status(200).json(
            gundam
        );
    } catch (error) {
        console.error('[gundam.controller][readModels][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching models'
        });
    }
};

// Get model with matching name using DAO readModelsByName method
export const readModelsByName: RequestHandler = async (req: Request, res: Response) => {
    try {
        const gundam = await GundamDAO.readModelsByName(req.params.modelName);

        res.status(200).json(
            gundam
        );
    } catch (error) {
        console.error('[gundam.controller][readModels][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching models'
        });
    }
};

// Get model with similar name using DAO readModelsByNameSearch method
export const readModelsByNameSearch: RequestHandler = async (req: Request, res: Response) => {
    try {
        console.log('search', req.params.search);
        const gundam = await GundamDAO.readModelsByNameSearch('%' + req.params.search + '%');

        res.status(200).json(
            gundam
        );
    } catch (error) {
        console.error('[gundam.controller][readModels][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching models'
        });
    }
};

// Get model by grade using DAO readModelsByGrade method
export const readModelsByGrade: RequestHandler = async (req: Request, res: Response) => {
    try {
        const gundam = await GundamDAO.readModelsByGrade(req.params.grade);

        res.status(200).json(
            gundam
        );
    } catch (error) {
        console.error('[gundam.controller][readModels][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching models'
        });
    }
};

// Get model by similar origin using DAO readModelsByOriginSearch method
export const readModelsByGradeSearch: RequestHandler = async (req: Request, res: Response) => {
    try {
        console.log('search', req.params.search);
        const gundam = await GundamDAO.readModelsByGradeSearch('%' + req.params.search + '%');

        res.status(200).json(
            gundam
        );
    } catch (error) {
        console.error('[gundam.controller][readModels][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching models'
        });
    }
};

// Get model by matching origin using DAO readModelsByOrigin method
export const readModelsByOrigin: RequestHandler = async (req: Request, res: Response) => {
    try {
        const gundam = await GundamDAO.readModelsByOrigin(req.params.origin);

        res.status(200).json(
            gundam
        );
    } catch (error) {
        console.error('[gundam.controller][readModels][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching models'
        });
    }
};

// Get model by similar origin using DAO readModelsByOriginSearch method
export const readModelsByOriginSearch: RequestHandler = async (req: Request, res: Response) => {
    try {
        console.log('search', req.params.search);
        const gundam = await GundamDAO.readModelsByOriginSearch('%' + req.params.search + '%');

        res.status(200).json(
            gundam
        );
    } catch (error) {
        console.error('[gundam.controller][readModels][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching models'
        });
    }
};

// Create a new model using DAO createModel method
export const createModel: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await GundamDAO.createModel(req.body);

        console.log('req.body', req.body);

        console.log('gundam', okPacket);

        res.status(200).json(
            okPacket
        );
    } catch (error) {
        console.error('[gundam.controller][createModel][Error] ', error);
        res.status(500).json({
            message: 'There was an error when writing models'
        });
    }
};

// Update a model with a matching ID using DAO updateModel method
export const updateModel: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await GundamDAO.updateModel(req.body);

        console.log('req.body', req.body);

        console.log('gundam', okPacket);

        res.status(200).json(
            okPacket
        );
    } catch (error) {
        console.error('[gundam.controller][updateModel][Error] ', error);
        res.status(500).json({
            message: 'There was an error when updating models'
        });
    }
};

// Delete a model with a matching ID using DAO deleteModel method
export const deleteModel: RequestHandler = async (req: Request, res: Response) => {
    try {
        let modelId = parseInt(req.params.modelId as string);

        console.log('modelId', modelId);
        if (!Number.isNaN(modelId)) {
            const response = await GundamDAO.deleteModel(modelId);

            res.status(200).json(
                response
            );
        } else {
            throw new Error("Integer expected for modelId");
        }
    } catch (error) {
        console.error('[gundam.controller][deleteModel][Error] ', error);
        res.status(500).json({
            message: 'There was an error when deleting models'
        });
    }
};