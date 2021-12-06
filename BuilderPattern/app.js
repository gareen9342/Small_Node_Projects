const BoatBuilder = require("./builder")

const myBoat = new BoatBuilder()
.withMotors(2," motor name", 'OM123')
.withSails(1, 'fabric', 'white')
.withCabin()
.hullColor("blue")
.build()

console.log(myBoat)