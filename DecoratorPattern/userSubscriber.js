import {dirname, join} from 'path'
import {fileURLToPath} from "url"
import level from "level"
import {levelSubscribe} from "./level-subscriber.js";

console.log(levelSubscribe)
const __dirname = dirname(fileURLToPath(import.meta.url))

const dbPath = join(__dirname, "db")
const db = level(dbPath,{ valueEncoding:"json"})

levelSubscribe(db)

db.subscribe(
    {doctype: "tweet", language: "en"},
    (k, val) => console.log(val)
)

db.put('1',{
    doctype:"tweet",
    text:"hi",
    "language":"en"
})