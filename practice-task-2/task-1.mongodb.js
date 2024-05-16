/**
 * * Problem: 1 - Retrieve the count of individuals
 * * who are active (isActive: true) for each gender
 */

use("practice")

db.massive.aggregate([
    // stage - 1
    {
        $match: {
          isActive: true
        }
    },
    // stage - 2
    {
        $group: {
          _id: "$gender",
          count: {
            $sum: 1
          }
        }
    }
])