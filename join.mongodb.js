const dbName = "practice"

use(dbName)

db.orders.aggregate([
    // $lookup
    {
        $lookup: {
          from: "test",
          localField: "userId",
          foreignField: "_id",
          as: "user"
        }
    }
])
