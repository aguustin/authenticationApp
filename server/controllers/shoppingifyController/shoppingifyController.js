import shoppingify from "../../models/shoppingifyModel.js";

export const allProducts = async (req, res) => {
   
    const response = await shoppingify.find({}).sort({category: 1});
    res.send(response);
}

export const productsByCategory = async (req, res) => {
    const category = req.params.category;
    const response = await shoppingify.find({category: category});
    res.send(response)
}

export const enterProduct = async (req, res) => {
    const {category, name, price, quantity, note, image} = req.body;

    const ifCategoryExist = await shoppingify.find({category: category});

    if(ifCategoryExist.length > 0){
       
        const update = await shoppingify.updateOne(
                {category : category},
                {
                $addToSet: {
                    propierties:{ $each:[ {name, price, quantity, note, image} ] }
                }
        });

        const newUpdate = {
            propierties: [
                {
                    name: name,
                    price: price,
                    quantity: quantity,
                    note: note,
                    image: image
                }   
            ]
         
        };

        console.log(update);
        res.send(newUpdate);

    }else{

        const newProduct = new shoppingify({
            category: category,
            propierties: [
                {
                    name: name,
                    price: price,
                    quantity: quantity,
                    note: note,
                    image: image
                }   
            ]
         
        });
        const response = await newProduct.save();

        res.send(response);
    }

}

export const  addToListController = async (req, res) => {

    const name = req.params.name;

    const category = req.params.category;
    
    //const response =  await shoppingify.find({category: category}, {propierties: { $elemMatch: { name: name} } });

     await shoppingify.updateOne(
        {   'propierties.name': name   },
        {   $set: { 'propierties.$': {name: name, quantity: 1,  onList: true}  }    },
        {   new: true   }
    ); 
                                            
    //const a = await shoppingify.aggregate[ { $match : { 'propierties.onList' : true } } ]
    res.sendStatus(200);
    
}

export const deleteAllProducts = async (req, res) => {
    await shoppingify.deleteMany();
    res.sendStatus(200);
}

