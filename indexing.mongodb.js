/**
 * * Indexing
 * ? COLLSCAN vs IXSCAN
 */

use("practice")


// COLLSCAN
// db.test.find().explain("executionStats")
// db.test.find({ email: "mdangl1@odnoklassniki.ru" })
    // .explain("executionStats")

// Indexing
// create index with email
// db.massive.createIndex({ email: 1 })

// drop index
db.massive.dropIndex({ email: 1 })

// IXSCAN
db.massive.find({
    email: "rosariohickman@snacktion.com"
})
.explain("executionStats")

