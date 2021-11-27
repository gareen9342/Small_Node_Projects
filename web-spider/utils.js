const path = require("path")
const { URL } = require('url')
const slug = require('slug')
const cheerio = require("cheerio")

function getLinkUrl (currentUrl, element) {
    const parsedLink = new URL(element.attribs.href || '', currentUrl)
    const currentParsedUrl = new URL(currentUrl)
    if (parsedLink.hostname !== currentParsedUrl.hostname ||
        !parsedLink.pathname) {
        return null
    }
    return parsedLink.toString()
};
function urlToFilename (url) {
    const parsedUrl = new URL(url)
    const urlPath = parsedUrl.pathname.split('/')
        .filter(function (component) {
            return component !== ''
        })
        .map(function (component) {
            return slug(component, { remove: null })
        })
        .join('/')
    let filename = path.join(parsedUrl.hostname, urlPath)
    if (!path.extname(filename).match(/htm/)) {
        filename += '.html'
    }

    return filename
}

/**
 * 페이지를 크롤링하여 페이지에 포함된 모든 링크들을 획득하는 함수인데 없을 경우 에러 뜨는 듯
 * @param currentUrl
 * @param body
 * @returns {*[]}
 */
function getPageLinks (currentUrl, body) {
    return Array.from(cheerio.load(body)('a'))
        .map(function (element) {
    console.log(element)
            return getLinkUrl(currentUrl, element)
        })
        .filter(Boolean)
};

module.exports={
    urlToFilename,
    getPageLinks
}
