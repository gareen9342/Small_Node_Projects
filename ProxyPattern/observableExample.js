const createObservable = require("./Observer")

function calculateTotal(invoice){
    return invoice.subtotal -
        invoice.discount +
        invoice.tax

}

const invoice = {
    subtotal: 100,
    discount: 10,
    tax: 20
}


let total = calculateTotal(invoice)

console.log(`total = ${total}`)

const obsInvoice = createObservable(
    invoice,
    ({prop, prev, curr}) => {
        total = calculateTotal(invoice)
        console.log(`TOTAL = ${total} (${prop} changed ${prev} => ${curr}`)
    }
)
obsInvoice.subtotal = 200 // TOTAL = 210 (subtotal changed 100 => 200
obsInvoice.discount = 20 //TOTAL = 200 (discount changed 10 => 20
obsInvoice.discount = 20 // 변경사항이 없기 떄문에 아무런 콘솔이 안 찍힌다.
obsInvoice.tax = 30 //TOTAL = 210 (tax changed 20 => 30


console.log(JSON.stringify(obsInvoice))