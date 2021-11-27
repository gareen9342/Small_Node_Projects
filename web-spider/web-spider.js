const fs = require("fs")
const path = require("path")
const superagent = require("superagent")
const mkdirp = require("mkdirp")
const {urlToFilename } = "./utils.js"

const saveFile = (filename, contents, cb) => {
    mkdirp(path.dirname(filename), err => {
        if(err){
            return cb(err)
        }
        fs.writeFile(filename, contents, cb)
    })
}

const download = (url, filename, cb) => {
    console.log(`Downloading ${url} into ${filename}`)
    superagent.get(url).end((err, res) => {
        if(err){
            return cb(err)
        }
        mkdirp(path.dirname(filename), err => {
            if(err){
                return cb(err)
            }
            saveFile(filename, res.text, err => {
                if(err){
                    return cb(err)
                }

            })
        })
    })
}

module.exports = function spider(url, cb) {
    const filename = urlToFilename(url)
    console.log(filename)

    fs.access(filename, err => {
        if(err && err.code === "ENOENT"){
            return cb(null, filename, false)
        }// end if err
        download(url, filename, err => {
            if(err){
                return cb(err)
            }
            cb(null, filename, true)
        })
    })
}
