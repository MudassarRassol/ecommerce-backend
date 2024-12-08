import productmodel from "../../Model/product.js";
import uploadImage from "../../Helper/cloudniary.js";

const updateproduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const { name, description, price, quantity, totalsold, category } = req.body;

        let updateData = { name, description, price, quantity, totalsold, category };

        // Upload image if a new file is provided
        if (req.file?.path) {
            const imageUrl = await uploadImage(req.file.path, "Product");
            if (imageUrl) {
                updateData.image = imageUrl;
            }
        }

        // Update the product and return the new document
        const updatedProduct = await productmodel.findByIdAndUpdate(
            productId,
            { ...updateData },
            { new: true } // Return the updated document
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error updating product", error });
    }
};

export default updateproduct;
