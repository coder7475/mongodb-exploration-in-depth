## Practice Task 1

### Find all documents in the collection where the age is greater than 30, and only return the name and email fields.

```bash
db.test.find({ age: { $gt: 30 } }).projection({ _id: 0, name: 1, email: 1, age: 1 })
```

### Find documents where the favorite color is either "Maroon" or "Blue."

```bash
db.test
    .find({ favoutiteColor: { $in: ["Blue", "Maroon"] } })
    .projection({ name: 1, favoutiteColor: 1  })
```
### Find all documents where the skill is an empty array.
```bash
db.test
    .find({ skills: [] })
    .projection({ skills: 1 })
```
## Find documents where the person has skills in both "JavaScript" and "Java."
```bash 
db.test
    .find({ 
        skills: 
            { $all: 
                [
                    { "$elemMatch": { name: "JAVASCRIPT" } }, 
                    { "$elemMatch": { name: "JAVA" }  }
                ] 
            } 
        })
    .projection({ skills: 1 })

```
5. Add a new skill to the skills array for the document with the email
"aminextleveldeveloper@gmail.com". The skill is
{"name": "Python"
,
"level": "Beginner"
,
"isLearning": true}
6. Add a new language "Spanish" to the list of languages spoken by the
person.
7. Remove the skill with the name "Kotlin" from the skills array.