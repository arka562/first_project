import {v2} from "cloudinary"
import fs from 'fs'

cloudinary.config({ 
  cloud_name: process.env.CLOUDINATY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});


const uploadOnCloudinary= async function(localFilePath) {
  try{
    if(!localFilePath) return null
    const response=cloudinary.uploader.upload(localFilePath,{resource_type:'auto'})
    console.log("the file get connected to cloudinary",response.url)
    return response
  }
  catch(error){
    fs.unlinkSync(localFilePath) //remove the locally saved temporary file as file failed to get uploaded

  }
  
}

     const uploadResult = await cloudinary.uploader
       .upload(
           'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
               public_id: 'shoes',
           }
       )
       .catch((error) => {
           console.log(error);
       });
    
    console.log(uploadResult);

    export {uploadOnCloudinary}