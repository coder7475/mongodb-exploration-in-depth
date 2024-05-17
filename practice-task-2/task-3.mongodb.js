/**
 * * Task 3: Find the average age of individuals for each favorite fruit, then sort the
* * results in descending order of average age.
 */

use("practice")

db.massive.aggregate([
    // stage - 1
    {
        $group: {
          _id: "$favoriteFruit",
          avgAge: {
            $avg: "$age"
          }          
        }
    },
    // stage - 2
    {
        $sort: {
          avgAge: -1
        }
    }
])