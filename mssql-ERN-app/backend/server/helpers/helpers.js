function exists(model, id){
    return new Promise(async (resolve, reject) => {
        const record = await model.findAll({
            where: {
                id: id
            }
        })
        if(record.length > 0){
            resolve(true);
        }else{
            reject("Record not found")
        }
    })
}

module.exports = exists