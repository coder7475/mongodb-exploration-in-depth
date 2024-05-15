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
          }
        }
    }
])