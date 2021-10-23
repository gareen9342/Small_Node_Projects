const xlsx = require("xlsx");

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("promise1")
    }, 200)
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("promise2")
    }, 200)
});


const getJsonArray = async () => {
    try{
        const workBook = xlsx.readFile("./input.xlsx")

        const firstSheet = workBook.Sheets[workBook.SheetNames[0]]
        const jsonArray = await xlsx.utils.sheet_to_json(firstSheet) // json array로 받을 수 있는 방법

        console.log(jsonArray)
    }catch(err){
        console.error(err)
    }
}
const getStream = async() => {
    try {
        const workBook = await xlsx.readFile("./input.xlsx")

        const firstSheet = workBook.Sheets[workBook.SheetNames[0]]
        const xlsxStream = await xlsx.stream.to_json(firstSheet, {
            range: firstSheet['!ref']
        }) // json array로 받을 수 있는 방법

        async function streaming() {
            for await (const chunk of xlsxStream) {
                if(isEmptyObj(chunk)){
                    continue
                }
                console.log(chunk)


            }
        }

        await streaming()
    } catch (err) {
        console.error(err.message)
    }
}

const isEmptyObj = (obj) => Object.keys(obj).length === 0
getStream()
