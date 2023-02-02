const router=require("express").Router();
const Capital=require("../models/Capital");


router.post("/add",async (req,res)=>{try{
    const {id,country,capital}=await req.body;

const newCapital=await Capital.create({
    id,country,capital
});
const saveCapital=await newCapital.save();
res.status(200).json(saveCapital);
}
catch(err)
{console.log(err);
    res.status(500).json(err);}
});


//Delete Capital

router.delete("/:id",async(req,res)=>{try{
    const idCapital=await Capital.findOne({id:req.params.id});
    if(!idCapital)
    return res.status(404).json("Capital id not found.");
await Capital.findOneAndDelete({id:req.params.id});
res.status(200).json("Capital data deleted");
}
catch(err)
{res.status(500).json(err);}
});

//View Capital

router.get("/:id",async(req,res)=>{try{
const idCapital=await Capital.findOne({id:req.params.id});
if(!idCapital)
return res.status(404).json("Capital id not found.");

res.status(200).json(idCapital);
}
catch(err)
{res.status(500).json(err);}
});

module.exports=router;