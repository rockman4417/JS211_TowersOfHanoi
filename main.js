let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

let selectedIndex
let selectedStack
let targetStack

const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

const movePiece = (startStack, endStack) => {
  // Your code here
  //starStack pop last index
  let movedPiece = startStack.pop(startStack.length - 1)
  console.log("movedPiece" , movedPiece)
  console.log("startStack", startStack)
    endStack.push(movedPiece)
    console.log("endStack" , endStack)
  //endStack array push last index

}

const isLegal = (startStack, endStack) => {
    console.log("startStack" , startStack)
    console.log("endStack", endStack)
  // Your code here
  
 if(startStack[startStack.length -1] != selectedIndex) {
     console.log(startStack[startStack.length -1])
     console.log(selectedIndex)
    console.log("Not a Legal Move!  You selected the wrong index!" , stacks)
    return false
 }
  
  if(startStack[startStack.length - 1] > endStack[endStack.length - 1]) {

    console.log("Not a Legal Move!  You tried to put a big piece on a small piece!" , stacks)
    return false
  }

  if(endStack.value === undefined) {
    return true
}
  
else{
    
    return true
    
}
}

const checkForWin = () => {
  // Your code here
  //check the length of final array
  if(stacks.c.length === 4) {
      window.alert("You won!")
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      console.log(stacks)
    }
}

const towersOfHanoi = (startStack, endStack) => {
  // Your code here
  //check isLegal
  
    //movePiece
    movePiece(startStack, endStack)
    //checkForWin
    checkForWin()
    console.log("Piece Moved!" , stacks)
  
  
  

}



//EVENT LISTENERS FOR THE DRAG AND DROP FUNCTIONALITY

function onDragStart(event) {
    selectedIndex = event.target.id
    selectedStack = event.target.parentElement.id
    event
      .dataTransfer
      .setData('text/plain', event.target.id);
      console.log(selectedIndex)
      console.log(selectedStack)

      
  }

  function onDragOver(event) {
    event.preventDefault();
  }

  function onDrop(event) {
    
    const id = event
      .dataTransfer
      .getData('text');

      const draggableElement = document.getElementById(id);

      const dropzone = event.target;
      targetStack = dropzone.id
      console.log(targetStack)
      if(isLegal(stacks[selectedStack], stacks[targetStack])) {
      towersOfHanoi(stacks[selectedStack], stacks[targetStack])

      dropzone.appendChild(draggableElement);

      
      }
      event
    .dataTransfer
    .clearData();
  }