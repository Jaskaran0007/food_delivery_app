class dataController{
    static displayData = async (req, res) => {
        try {
            res.send([global.food_items,global.foodCategory])

        } catch (error) {
            console.error(error.message);
            res.send("Server Error");
        }
    }
}
export default dataController;