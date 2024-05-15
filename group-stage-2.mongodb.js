/**
 * Lear $group operatores: $sum, $max, $min, $avg 
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
    }
])