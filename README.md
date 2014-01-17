# dsalib-javascript #

Daily Data Structures and Algorithms Javascript library

Soon to be on `npm` so you can simply `npm install dsalib`.

## Documentation ##

### Node ###

A generic [node](http://en.wikipedia.org/wiki/Node_(computer_science)) for data structures.

#### Constructor ####

@param options - An options hash. Valid attributes are:
  * prev A pointer to the previous Node.
  * next A pointer to the next Node.
  * value The value of the Node.
  * weight The weight of the Node.

@return The Node.

### LinkedList ###

A [singly linked list](http://en.wikipedia.org/wiki/Linked_list#Singly_linked_list).

#### Constructor ####

@param array - An array to convert into a LinkedList.

@return The LinkedList.

#### LinkedList.prototype.get() ####

Gets the Node at an index.

@param index - The index in the LinkedList to fetch.

@return The Node.

#### LinkedList.prototype.set() ####

Sets the Node at an index.

@param index - The index in the LinkedList to fetch.
@param node - The Node to set.

@return The LinkedList.
