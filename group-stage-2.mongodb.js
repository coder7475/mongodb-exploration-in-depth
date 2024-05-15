/**
 * Learn $group operatores: $sum, $max, $min, $avg 
 * $project: $subtract
 */
use("practice")

db.test.aggregate([
    // group
    {
        $group: {
            _id: null,
            totalSalary: { $sum: "$salary" },
            maxSalary: { $max: "$salary" },
            minSalary: { $min: "$salary" },
            avgSalary: { $avg: "$salary" },
        }
    },
    // project
    {
        $project: {
          totalSalary: 1,
          averageSalary: "$avgSalary",
          range: { $subtract: ["$maxSalary", "$minSalary"]}
        }
    }
])