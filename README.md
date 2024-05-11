# mongodb-exploration-in-depth

# Mongosh Commands

**Open Mongosh shell**

```bash
mongosh
```
**Clear Terminal**
```bash
cls
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

**Find Documents after field filtering with projection method: (Usable with find):**

```jsx
db.test.find(<find_logic>).projection(<logic_to_filter_field>)
```

**Sort the Result:**

```jsx
// sort by ascending order
db.test.find(<find_logic>).projection(<logic_to_filter_field>).sort({ <field>: 1 });
// sort by descending order
db.test.find(<find_logic>).projection(<logic_to_filter_field>).sort({ <field>: -1 })

```

**Limit the result:**

```jsx
db.test.find(<logic>).limit(value)
```

# Operators

[Operators](https://www.mongodb.com/docs/manual/reference/operator/)

## **Query and Projection Operators**

### Query Selectors

| Name | Description |
| --- | --- |
| https://www.mongodb.com/docs/manual/reference/operator/query/eq/#mongodb-query-op.-eq | Matches values that are equal to a specified value. |
| https://www.mongodb.com/docs/manual/reference/operator/query/gt/#mongodb-query-op.-gt | Matches values that are greater than a specified value. |
| https://www.mongodb.com/docs/manual/reference/operator/query/gte/#mongodb-query-op.-gte | Matches values that are greater than or equal to a specified value. |
| https://www.mongodb.com/docs/manual/reference/operator/query/in/#mongodb-query-op.-in | Matches any of the values specified in an array. |
| https://www.mongodb.com/docs/manual/reference/operator/query/lt/#mongodb-query-op.-lt | Matches values that are less than a specified value. |
| https://www.mongodb.com/docs/manual/reference/operator/query/lte/#mongodb-query-op.-lte | Matches values that are less than or equal to a specified value. |
| https://www.mongodb.com/docs/manual/reference/operator/query/ne/#mongodb-query-op.-ne | Matches all values that are not equal to a specified value. |
| https://www.mongodb.com/docs/manual/reference/operator/query/nin/#mongodb-query-op.-nin | Matches none of the values specified in an array. |

**General Syntax:**

For Operators $eq, $ne, $gt, $lt, $gte, $lte

```jsx
{ <field>: { <operator>: <value> } }
```

For Operators: $in, $nin

```jsx
{ field: { <operator>: [<value1>, <value2>, ... <valueN> ] } }
```

**Implicit AND(comma):**

```jsx
{ <field>: { <operator1>: <value1>, <operator2>: <value2> } }
```

## Logical

| Name | Description |
| --- | --- |
| $and | Joins query clauses with a logical AND returns all documents that match the conditions of both clauses. |
| $or | Joins query clauses with a logical OR returns all documents that match the conditions of either clause. |
| $not | Inverts the effect of a query expression and returns documents that do not match the query expression. |
| $nor | Joins query clauses with a logical NOR returns all documents that fail to match both clauses. |

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