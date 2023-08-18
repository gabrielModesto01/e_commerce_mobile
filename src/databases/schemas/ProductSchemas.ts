export const ProductSchemas = {
    name: 'Product',
    properties: {
        _id: "string",
        nome_do_produto: "string",
        calorias: "number",
        amount: "number",
        price: "number",
        imagepath: "string",
        value: "number",
        created_at: "date"
    },
    primaryKey: "_id",
}