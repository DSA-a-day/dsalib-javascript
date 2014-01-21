# DoublyLinkedList([array]) #

A [doubly linked list](http://en.wikipedia.org/wiki/Doubly_linked_list).

`array` - Optional, an array to convert into a DoublyLinkedList.

return - The DoublyLinkedList.

## DoublyLinkedList.prototype.toArray() ##

Returns an array representation of the DoublyLinkedList values.

return - The array representation of the DoublyLinkedList values.

## DoublyLinkedList.prototype.get(index) ##

Gets the Node at an index.

`index` - The index in the DoublyLinkedList to get.

return - The Node.

## DoublyLinkedList.prototype.set(index, node) ##

Sets the Node at an index.

`index` - The index in the DoublyLinkedList to set.
`node` - The Node to set.

return - The DoublyLinkedList.

## DoublyLinkedList.prototype.insert(index, node) ##

Inserts a Node at an index before existing nodes.

`index` - The index in the DoublyLinkedList to insert at.
`node` - The Node to insert.

return - The DoublyLinkedList.

## DoublyLinkedList.prototype.remove(index) ##

Removes a Node at an index.

`node` - The Node to remove.

return - The DoublyLinkedList.

## DoublyLinkedList.prototype.prepend(node) ##

Prepends a Node to the DoublyLinkedList.

`node` -  The Node to prepend.

return - The DoublyLinkedList.

## DoublyLinkedList.prototype.append(node) ##

Appends a Node to the DoublyLinkedList.

`node` - The Node to append.

return - The DoublyLinkedList.

## DoublyLinkedList.prototype.concat(list1, list2, ..., listN) ##

Concatenates DoublyLinkedLists together.

`list1-listN` - The DoublyLinkedLists to concatenate to the current DoublyLinkedList.

return - The DoublyLinkedList.
