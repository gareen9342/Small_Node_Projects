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

        // 해당 json array를 이용하여 다량의 프로미스 함수를 연쇄적으로 실행하게 될 경우에
        // 만약 row 수가 천개라면 엄청난 양의 데이터를 프로미스 함수로 한 줄 씩 읽게 되어 오래걸림
        // Promise.all로 해당 함수를 병렬적으로 처리해야할 필요가 있다.
        await Promise.all(jsonArray.map(async(jsonData) => {
            await new Promise((result, reject) => {
                setTimeout(() => {
                    return "true"
                },100)
            })
        }))
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
