const fs = require("fs")
const path = require("path")
const superagent = require("superagent")
const mkdirp = require("mkdirp")
const {urlToFilename } = "./utils.js"

module.exports = function spider(url, cb) {
    const filename = urlToFilename(url)
    console.log(filename)

    fs.access(filename, err => {
        if(err && err.code === "ENOENT"){
            console.log(`Downloading ${url} into ${filename}`)
            superagent.get(url).end((err, res) => {
                if(err){
                    cb(err)
                }else{
                    mkdirp(path.dirname(filename), err => {
                        if(err){
                            cb(err)
                        }else{
                            fs.writeFile(filename, res.text, err => {
                                if(err){
                                    cb(err)
                                }else{
                                    cb(null, filename, true)
                                }
                            })
                        }
                    })
                }
            })
            // end superagent
        }// end if err
        else {
            cb(null, filename, false)
        }
    })
}



console.log("hello")