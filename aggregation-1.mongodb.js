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
          course: "Level-2",
          edTech: "Programming Hero"
        }
    },
    {
        $project: {
          gender: 1, course: 1, edTech: 1
        }
    }
])
// $addField does not modify the actual database
// db.test.find({ }).projection({ course: 1 })