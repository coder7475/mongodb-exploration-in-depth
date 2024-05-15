/**
 * * Indexing
 * ? COLLSCAN vs IXSCAN
 */

use("practice")

db.orders.find({_id: ObjectID("654de5f6198dfb2206026d0c")})
//   .explain("executionStats")

// COLLSCAN
// db.test.find().explain("executionStats")
db.test.find({ email: "mdangl1@odnoklassniki.ru" })
    .explain("executionStats")