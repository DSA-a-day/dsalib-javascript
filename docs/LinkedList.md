# LinkedList([array]) #

A [singly linked list](http://en.wikipedia.org/wiki/Linked_list#Singly_linked_list).

`array` - Optional, an array to convert into a LinkedList.

return - The LinkedList.

## LinkedList.prototype.toArray() ##

Returns an array representation of the LinkedList values.

return - The array representation of the LinkedList values.

## LinkedList.prototype.get(index) ##

Gets the Node at an index.

`index` - The index in the LinkedList to get.

return - The Node.

## LinkedList.prototype.set(index, node) ##

Sets the Node at an index.

`index` - The index in the LinkedList to set.
`node` - The Node to set.

return - The LinkedList.

## LinkedList.prototype.insert(index, node) ##

Inserts a Node at an index before existing nodes.

`index` - The index in the LinkedList to insert at.
`node` - The Node to insert.

return - The LinkedList.

## LinkedList.prototype.remove(index) ##

Removes a Node at an index.

`node` - The Node to remove.

return - The LinkedList.

## LinkedList.prototype.prepend(node) ##

Prepends a Node to the LinkedList.

`node` -  The Node to prepend.

return - The LinkedList.

## LinkedList.prototype.append(node) ##

Appends a Node to the LinkedList.

`node` - The Node to append.

return - The LinkedList.

## LinkedList.prototype.concat(list1, list2, ..., listN) ##

Concatenates LinkedLists together.

`list1-listN` - The LinkedLists to concatenate to the current LinkedList.

return - The LinkedList.
