/**
 * * Task 5. Use $facet to separate individuals
 * * into two facets based on their age:
 * * those below 30 and those above 30.
 * * Then, within each facet, bucket the
 * * individuals into age ranges 
 * * (e.g., 20-25, 26-30, etc.) and 
 * * sort them by age within each bucket.
 */

use("practice")

db.massive.aggregate([
    {
        $facet: {
          // pipeline - 1
          "belowAge30": [
            // stage - 1
            {
                $match: {
                  age: {
                    $lte: 30
                  }
                }
            },
            // bucket
            {
                $bucket: {
                    groupBy: "$age",
                    boundaries: [20, 25, 30],
                    default: "Less than 20",
                    output: {
                        count: { $sum: 1 },                 
                    }
                }
            },
            // sort
            {
                $sort: {
                    count: -1 // sort by descending order
                }
            }
          ],
          
          // pipeline - 2
          "aboveAge30": [
            // stage - 1
            {
                $match: {
                  age: {
                    $gt: 30
                  }
                }
            },
            // bucket
            {
                $bucket: {
                    groupBy: "$age",
                    boundaries: [30, 35, 40],
                    default: "Greater or equal 40",
                    output: {
                        count: { $sum: 1 },                 
                    }
                }
            },
            // sort
            {
                $sort: {
                    count: -1 // sort by descending order
                }
            }
            
          ]
          
        }
    }
])