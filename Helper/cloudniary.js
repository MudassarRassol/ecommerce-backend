import cloudinary from 'cloudinary';
import fs from 'fs';

cloudinary.config({ 
    cloud_name: 'dmz8vzkbf', 
    api_key: '159116632923625', 
    api_secret: 'jnkERKJvUG0buUoa5mm6tJB-sGc' // Click 'View API Keys' above to copy your API secret
});


const uploadImage = async (filepath, foldername) => {
    try {
        const result = await cloudinary.uploader.upload(filepath, {
            folder: foldername,
        });
        // Delete the file after uploading
        try {
            fs.unlinkSync(filepath);
        } catch (err) {
            console.error("Error deleting local file:", err);
            throw new Error('Error deleting local file');
        }

        console.log(`Image uploaded successfully to Cloudinary: ${result.secure_url}`);
        return result.secure_url;

    } catch (err) {
        console.error("Error uploading image to Cloudinary:", err);
        throw new Error('Error uploading image to Cloudinary');
    }
};

export default uploadImage;