const { Product } = require('../models/Model');

const createAPI = async (req, res) => {
    try {
        const { name, email, image } = req.body;

        // Validation
        if (!name || !email) {
            return res.status(400).json({
                success: false,
                message: "Name and Email are required"
            });
        }

        const createProduct = await Product.create({ name, email, image });

        res.status(201).json(createProduct);

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


const getAPI = async(req,res)=>{
    try{
         const getProducts = await Product.find()
         res.status(201).json(getProducts)

    }
    catch(error){
        res.status(505).json({message  : error})
    }
}


const updateAPI = async(req,res)=>{
    try{
         const {id} = req.params

         const updateProducts = await Product.findByIdAndUpdate(id, req.body)
         res.status(201).json(updateProducts)

    }
    catch(error){
        res.status(505).json({message  : error})
    }
}


const deleteAPI = async(req,res)=>{
    try{
         const {id} = req.params

         const deleteProduct = await Product.findByIdAndDelete(id)
         res.status(201).json({success : "Product deleted successfully"})

    }
    catch(error){
        res.status(505).json({message  : error})
    }
}
module.exports = { createAPI,getAPI,updateAPI,deleteAPI };
