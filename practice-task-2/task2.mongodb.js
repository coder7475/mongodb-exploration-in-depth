/**
 * * Task 2: Retrieve the names and email addresses of individuals who are active and have a favourite fruit of 'banana'
 */
use("practice")

db.massive.aggregate([
    {
        $match: {
          isActive: true,
          favoriteFruit: "banana"
        }
    },
    // stage - 
    {
        $project: {
          name: 1, 
          email: 1, 
        //   isActive: 1, 
        //   favoriteFruit: 1
        }
    }
])