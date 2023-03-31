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
        console.log(name, price, quantity, note, image);
        const newUpdate = await shoppingify.updateOne(
                {category : category},
                {
                $addToSet: {
                    propierties:{ $each:[ {name, price, quantity, note, image} ] }
                }
        });
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

export const deleteAllProducts = async (req, res) => {
    await shoppingify.deleteMany();
    res.sendStatus(200);
}

