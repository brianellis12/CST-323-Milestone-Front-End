import { Router } from "express";
import * as GundamController from './gundam.controller';
import { readModelsById } from "./gundam.dao";

// Create a router for the controller methods
const router = Router();
// Route to readModels controller method
router.
    route("/models").
    get(GundamController.readModels);
// Route to readModels controller method with id
router.
    route("/models/:modelId").
    get(GundamController.readModels);
// Route to readModelsByName controller method
router.
    route("/models/:modelName").
    get(GundamController.readModelsByName);
// Route to readModelsByNameSearch controller method
router.
    route("/models/search/name/:search").
    get(GundamController.readModelsByNameSearch);
// Route to readModelsByGrade controller method
router.
    route("/models/:grade").
    get(GundamController.readModelsByGrade);
// Route to readModelsByGradeSearch controller method
router.
    route("/models/search/grade/:search").
    get(GundamController.readModelsByGradeSearch);
// Route to readModelsByOrigin controller method
router.
    route("/models/:origin").
    get(GundamController.readModelsByOrigin);
// Route to readModelsByOriginSearch controller method
router.
    route("/models/search/origin/:search").
    get(GundamController.readModelsByOriginSearch);
// Route to createModel controller method
router.
    route("/models").
    post(GundamController.createModel);
// Route to updateModel controller method
router.
    route("/models").
    put(GundamController.updateModel);
// Route to deleteModel controller method
router.
    route("/models/:modelId").
    delete(GundamController.deleteModel);
// Export router
export default router;