# mongodb-exploration-in-depth

# Mongosh Commands

**Open Mongosh shell**

```bash
mongosh
```

**See all database:** 

```sql
show dbs
```

**Create and switch to a database:** 

```jsx
use <db_name>
```

**Show all collections:**

```sql
show collections
```

**Create a collection:**

```jsx
db.createCollection(<collection_name>)
```

**Insert one document in collection:**

```jsx
db.getCollection(<collection_name>).insertOne(<Document>)
db.<collection_name>.insertOne(<Document>)
```

**Insert Many document at once in collection:**

```jsx
db.<collection_name>.insertMany([<D1>, <D2>, ... ])
```

**Find all documents in a collection:**

```jsx
db.getCollection(<collection_name>).find()
db.<collection_name>.find()
// find all documents based on conditions
db.<collection_name>.find()
```

**Find One Document based on condition:**

```jsx
db.getCollection(<collection_name>).find(<doctument_with_field>)
db.<collection_name>.find(<doctument_with_field>)
```

**Find Documents after field filtering: Reduce Bandwith**

```jsx
// find only the field given in options
db.<collection_name>.find(<object_to_find_document>, <Object_to_filter_field_in_document>)
// find all documents of those who are male and show only the name, email, gender field
db.test.find(
	{ gender: "Male" }, 
	{
		_id: 0, // don't show id field
		name: 1, // show name field
		email: 1, // show email field
		gender: 1, // show gender field
	}
)
```

**Find Documents after field filtering with project method: (Usable with find):**

```jsx
db.test.find(<find_logic>).project(<logic_to_filter_field>)
```

xxxx