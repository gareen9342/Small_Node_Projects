const {spider} = require("./web-spider")
console.log(__dirname)
const url  = process.argv[2]
const nesting = Number.parseInt(process.argv[3], 10)
spider(url, nesting, err => {
    if(err){
        console.error(err)
        process.exit(1)
    }

    console.log(`Download complete`)
})