use("practice")

db.test.aggregate([
    // bucket
    {
        $bucket: {
          groupBy: "$age",
          boundaries: [ 20, 40, 60, 80 ],
          default: "Greater than 80",
          output: {
            count: { $sum: 1 }, 
            peoples: {
                $push: "$name"
            }
          }
        }
    },
    // sort
    {
        $sort: {
          count: -1 // sort by desending order
        }
    },
    // limit
    {
        $limit: 2
    }
])