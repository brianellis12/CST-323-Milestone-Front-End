export const gundamQueries = {
    // Get all models
    readModels: `
        SELECT
            id AS modelId, modelName, grade,
            origin, purchaseDate, price, image
        FROM gundam.models
    `,
    // Get models by matching name
    readModelsByName: `
        SELECT
            id AS modelId, modelName, grade,
            origin, purchaseDate, price, image
        FROM gundam.models
        WHERE gundam.models.modelName = ?
    `,
    // Get models by similar name
    readModelsByNameSearch: `
        SELECT
            id AS modelId, modelName, grade,
            origin, purchaseDate, price, image
        FROM gundam.models
        WHERE gundam.models.modelName LIKE ?
    `,
    // Get models by grade
    readModelsByGrade: `
        SELECT
            id AS modelId, modelName, grade,
            origin, purchaseDate, price, image
        FROM gundam.models
        WHERE gundam.models.grade = ?
    `,
    // Get models by similar grade
    readModelsByGradeSearch: `
        SELECT
            id AS modelId, modelName, grade,
            origin, purchaseDate, price, image
        FROM gundam.models
        WHERE gundam.models.grade LIKE ?
    `,
    // Get models by matching origin
    readModelsByOrigin: `
        SELECT
            id AS modelId, modelName, grade,
            origin, purchaseDate, price, image
        FROM gundam.models
        WHERE gundam.models.origin = ?
    `,
    // Get models by similar origin
    readModelsByOriginSearch: `
        SELECT
            id AS modelId, modelName, grade,
            origin, purchaseDate, price, image
        FROM gundam.models
        WHERE gundam.models.origin LIKE ?
    `,
    // Get models by matching ID
    readModelsById: `
        SELECT
            id AS modelId, modelName, grade,
            origin, purchaseDate, price, image
        FROM gundam.models
        WHERE gundam.models.id = ?
    `,
    // Create a new model
    createModel: `
        INSERT INTO MODELS (modelName, grade, origin, purchaseDate, price, image) VALUES (?,?,?,?,?,?)
    `,
    // Update a model with a matching ID
    updateModel: `
        UPDATE gundam.models
        SET modelName = ?, grade = ?, origin = ?, purchaseDate = ?, price = ?, image = ?
        WHERE id = ?
    `,
    // Delete a model with a matching ID
    deleteModel: `
        DELETE FROM gundam.models
        WHERE id = ?
    `,
}