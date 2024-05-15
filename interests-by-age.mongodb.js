/**
 * * Find Interest by age
 */

use("practice")

db.test.aggregate([
    // unwind by interests
    {
        $unwind: "$interests"
    },
    // group by age
    {
        $group: {
          _id: "$age",
          interestsPerAge: {
            $push: "$interests"
          }
        }
    },
    
])