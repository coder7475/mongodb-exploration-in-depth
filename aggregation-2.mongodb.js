/**
 * * Learn Unwinding
 */
use("practice")

db.test.aggregate([
    // match
    {
        $match: {
          gender: "Male"
        }
    },
    // unwind
    {
      $unwind: "$friends"
    },
    // projection
    {
        $project: {
          name: 1, age: 1, friends: 1
        }
    }
])