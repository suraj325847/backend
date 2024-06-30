const cloudinary = require('cloudinary');
const fs = require ("fs")


// 
cloudinary.v2.config({
    cloud_name: 'dobw3njni',
    api_key: '733328717479427',
    api_secret: '26U23M3WLSeJERmmO7g0cx9c2V8',
    secure: true,
  });

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // file has been uploaded successfull
        console.log("file is uploaded on cloudinary ", response.url);
        // fs.unlinkSync(localFilePath)
        return response;

    } catch (error) {
        // fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        return null;
    }
}

module.exports =  uploadOnCloudinary;