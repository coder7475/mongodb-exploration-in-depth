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
      _id: "$address.country",
    }
  }  
])