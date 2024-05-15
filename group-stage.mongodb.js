/**
 * * Learn Group stage of aggregation
 * $group aggregation operators: $count, $max, $min, $avg, $sum, $push
 * $group stage: _id: required - group by field given in _id
 */
use("practice")

db.test.aggregate([
  // stage - 1
  {
    $group: {
        _id: "$age",
        // accumulators
        // find number of document in a group
        count: { $sum: 1 },
        // $push operator
        fullDoc: { $push: "$$ROOT"}
    }
  } ,
  // stage - 2
  {
    $project: {
      "fullDoc.name": 1,
      "fullDoc.email": 1,
      "fullDoc.phone": 1,
    }
  } 
])