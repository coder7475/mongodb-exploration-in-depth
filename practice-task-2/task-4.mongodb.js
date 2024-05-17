/**
 ** Task 4: Retrieve a list of unique friend names
 ** for individuals who have at least
 ** one friend, and include only the 
 ** friends with names starting with the
 ** letter "W".
 */

 use("practice")

 db.massive.aggregate([
    // stage - 1
    {
        $unwind: "$friends"
    },    
    {
        $match: {
          "friends.name": { $regex: /^W/}
        }
    },   
    {
        $group: {
          _id: "$name",
          friends: {
            $push: "$friends.name"
          },          
        }
    },
    // {
    //     $project: {
    //       name: 1,
    //       friends: {
    //         name: 1
    //       }
    //     }
    // }
 ])