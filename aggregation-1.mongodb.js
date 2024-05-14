/**
 * * Learn Aggregation
 */
use("practice")

db.test.aggregate([
    { $match: {
      gender: "Male", 
      age: { $lt: 30 }
    }},
    {
        $project: {
          name: 1, age: 1, gender: 1
        }
    }
])