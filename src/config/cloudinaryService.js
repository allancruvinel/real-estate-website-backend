const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDNARY_API_KEY,
    api_secret: process.env.CLOUDNARY_API_SECRET
})

module.exports = {
    uploadImages(images){
        images.map(async image=>{
            return await cloudinary.uploader.upload(image.path,{use_filename: true, unique_filename: false },function(err,result){
                console.log("error "+err);
                console.log("result "+{result});
            })
        })
    }
}