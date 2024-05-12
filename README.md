# Mongosh Commands

**Open Mongosh shell**

```bash
mongosh
// clear terminal
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
| $eq | Matches values that are equal to a specified value. |
| $gt | Matches values that are greater than a specified value. |
| $gte | Matches values that are greater than or equal to a specified value. |
| $in | Matches any of the values specified in an array. |
| $lt | Matches values that are less than a specified value. |
| $lte | Matches values that are less than or equal to a specified value. |
| $ne | Matches all values that are not equal to a specified value. |
| $nin | Matches none of the values specified in an array. |

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

$and syntax

```jsx
{ $and: [ { <expression1> }, { <expression2> } , ... , { <expressionN> } ] }
```

example

```jsx
db.test.find(
	$and: [
		{ age: {$ne: 15} }, { age: {$lte: 30} }
	]
)
```

!https://www.mongodb.com/docs/manual/assets/link.svg

The `[$or](https://www.mongodb.com/docs/manual/reference/operator/query/or/#mongodb-query-op.-or)` operator has the following syntax:

```jsx
{$or: [ { <expression1> }, { <expression2> }, ... , { <expressionN> } ] }
```

Consider the following example:

```jsx
db.inventory.find( {$or: [ {quantity: {$lt:20 } }, {price:10 } ] } )
```

This query will select all documents in the `inventory` collection where either the `quantity` field value is less than `20` **or** the `price` field value equals `10`.

!https://www.mongodb.com/docs/manual/assets/link.svg

The `[$not](https://www.mongodb.com/docs/manual/reference/operator/query/not/#mongodb-query-op.-not)` operator has the following form:

```jsx
{field: {$not: { <operator-expression> } } }
```

Consider the following example:

```jsx
db.inventory.find( {price: {$not: {$gt:1.99 } } } )
```

This query will select all documents in the `inventory` collection where:

- the `price` field value is less than or equal to `1.99` **or**
- the `price` field does not exist

**$nor** performs a logical NOR operation on an array of one or more query expression and selects the documents that fail all the query expressions in the array. The $nor has the following syntax:

```jsx
{ $nor: [ { <expression1> }, { <expression2> }, ...  { <expressionN> } ] }
```

**Examples**
$nor Query with Two Expressions
Consider the following query which uses only the $nor operator:

```jsx
db.inventory.find( { $nor: [ { price: 1.99 }, { sale: true } ]  } )
```

This query will return all documents that:

- contain the price field whose value is not equal to 1.99 and contain the sale field whose value is not equal to true or
- contain the price field whose value is not equal to 1.99 but do not contain the sale field or
- do not contain the price field but contain the sale field whose value is not equal to true or
- do not contain the price field and do not contain the sale field

## Elementary Query Operator

| Name  | Description |
| --- | --- |
| $exits | Matches documents that have the specified field. |
| $type | Selects documents if a field is of the specified type. |

!https://www.mongodb.com/docs/manual/assets/link.svg

The `[$exists](https://www.mongodb.com/docs/manual/reference/operator/query/exists/#mongodb-query-op.-exists)` operator matches documents that contain or do not contain a specified field, including documents where the field value is `null`.
To specify an $exists expression, use the following prototype:

```jsx
{ field: { $exists: <boolean> } }
```

When **<boolean>** is true, **$exists** matches the documents that contain the field, including documents where the field value is null. If **<boolean>** is false, the query returns only the documents that do not contain the field.

 
**$type** selects documents where the value of the field is an instance of the specified BSON type(s). Querying by data type is useful when dealing with highly unstructured data where data types are not predictable.

Syntax
A $type expression for a single BSON type has the following syntax:

```jsx
{ field: { $type: <BSON type> } }
```

!https://www.mongodb.com/docs/manual/assets/link.svg

You can specify either the number or alias for the BSON type.

The $type expression can also accept an array of BSON types and has the following syntax:

```jsx
{ field: { $type: [ <BSON type1> , <BSON type2>, ... ] } }
```

The above query matches documents where the field value is any of the listed types. The types specified in the array can be either numeric or string aliases.

[BSON Types](https://www.mongodb.com/docs/manual/reference/bson-types/#std-label-bson-types)

**Example**

```jsx
db.test.find({ age: { $type: "string" } })
```

## Array Query Operators

The **$size** operator matches any array with the number of elements specified by the argument.

```jsx
db.collection.find( { field: { $size: <num> } } );
```