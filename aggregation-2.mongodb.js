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
    // group
    {
      $group: { _id: "$friends", count: { $sum: 1 }}
    },
    // projection
    {
        $project: {
          count: 1
        }
    }
])