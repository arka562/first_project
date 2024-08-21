










//fisrt method

// const asnchandler=(fn)=>async(req,res,next)=>{
//    try{
//      await fn(req,res,next)
//    }
//    catch(error){
//     res.status(err.code || 500).json({success:false,message:err.message})
//    }
// }

//second method by promise

const asynchandler=(requestHandler)=>{
    (req,res,next)=>{
      Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
}

export {asynchandler}