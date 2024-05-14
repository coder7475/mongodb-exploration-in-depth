/**
 * * Learn Aggregation
 */
use("practice")

db.test.aggregate([
    // $match
    { $match: {
      gender: "Male", 
    }},
    // $addFields
    {
        $addFields: {
          course: "Level-2"
        }
    },
    {
        $project: {
          gender: 1, course: 1
        }
    }
])