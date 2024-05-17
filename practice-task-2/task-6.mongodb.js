/**
 * * 6: Calculate the total balance of individuals
 * * for each company and display the company name
 * * along with the total balance. 
 * * Limit the result to show only
 * * the top two companies with 
 * * the highest total balance.
 */
use("practice")

db.massive.aggregate([
    // stage 1 
    {
        $project: {
          company: 1,
          new_balance: {
            $substr: ["$balance", 1, {
                $subtract: [
                    {$strLenCP: "$balance"}, 1
                ]
            }]
          },    
        }
    },
    // stage - 2
    {
        $group: {
          _id: "$company",
          totalBalance: {
            $sum: {
                $convert: {
                    input: "$new_balance",
                    to: "double"
                }
            }
          }
        }
    },
    // stage - 3
    {
        $sort: {
            totalBalance: -1
        }
    },
    // stage - 4
    {
        $limit: 2
    }
])