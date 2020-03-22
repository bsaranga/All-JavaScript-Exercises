let user = {
    name: "John"
}

//user references an object, but if we assign null.

user = null; // the garbage collector kicks in and removes the object.

/*
When the reference to the object was lost, the object became 'un-reachable'.
The garbage collector gets rid of un-reachable objects.
*/

// Reachability of Interlinked objects - the family problem

function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;

    return {
        father: man,
        mother: woman
    }
}

let family = marry(
    {
        name: "John Doe"
    },
    {
        name: "Lisa Lo"
    }
)

console.log(family); 
/*

Prints the following:

{
  father: { name: 'John Doe', wife: { name: 'Lisa Lo', husband: [Circular] } },
  mother: { name: 'Lisa Lo', husband: { name: 'John Doe', wife: [Circular] } }
}

Circular: refers back to the current object.

                 [Family]
                 |object|
                 /      \
                /        \
               /          \ 
              /            \
             /              \ 
            *                *
    [Father]------wife------*[Mother]
    |object|*----husband-----|object|
*/

delete family.father;
delete family.mother.husband;

/*
Now the incoming references to "father" object are removed.

                 [Family]
                 |object|
                        \
                         \
                          \ 
                           \
                            \ 
                             *
    [Father]------wife------*[Mother]
    |object|                 |object|

*/

console.log(family);

/*
Prints the following: 

{ mother: { name: 'Lisa Lo' } }

When all incoming references to the 'father' object were deleted, the object became
unreachable, and the garbage collector gets rid of it.
*/

