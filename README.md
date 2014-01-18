# dsalib-javascript #

Daily Data Structures and Algorithms Javascript library

Soon to be on `npm` so you can simply `npm install dsalib`.

## Documentation ##

### Node(options) ###

A generic [node](http://en.wikipedia.org/wiki/Node_(computer_science\)) for data structures.

`options` - An options hash. Valid attributes are:
  * `prev` A pointer to the previous Node.
  * `next` A pointer to the next Node.
  * `value` The value of the Node.
  * `weight` The weight of the Node.

return - The Node.

### LinkedList([array]) ###

A [singly linked list](http://en.wikipedia.org/wiki/Linked_list#Singly_linked_list).

`array` - Optional, an array to convert into a LinkedList.

return - The LinkedList.

#### LinkedList.prototype.toArray() ####

Returns an array representation of the LinkedList values.

return - The array representation of the LinkedList values.

#### LinkedList.prototype.get(index) ####

Gets the Node at an index.

`index` - The index in the LinkedList to get.

return - The Node.

#### LinkedList.prototype.set(index, node) ####

Sets the Node at an index.

`index` - The index in the LinkedList to set.
`node` - The Node to set.

return - The LinkedList.

#### LinkedList.prototype.insert(index, node) ####

Inserts a Node at an index before existing nodes.

`index` - The index in the LinkedList to insert at.
`node` - The Node to insert.

return - The LinkedList.

#### LinkedList.prototype.remove(index) ####

Removes a Node at an index.

`node` - The Node to remove.

return - The LinkedList.
