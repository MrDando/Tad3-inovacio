// interact('.item')
//   .draggable({
//     onmove: function(event) {
//       const target = event.target;

//       const dataX = target.getAttribute('data-x');
//       const dataY = target.getAttribute('data-y');
//       const initialX = parseFloat(dataX) || 0;
//       const initialY = parseFloat(dataY) || 0;

//       const deltaX = event.dx;
//       const deltaY = event.dy;

//       const newX = initialX + deltaX;
//       const newY = initialY + deltaY;

//       target
//         .style
//         .transform = `translate(${newX}px, ${newY}px)`;

//       target.setAttribute('data-x', newX);
//       target.setAttribute('data-y', newY);
//     }
//   })

const position = { x: 0, y: 0 }; 
    interact('.item').draggable({ listeners: {
            start (event)	{	var var_x=position.x;  		var var_y=position.y; },
            move (event)	{ 	position.x += event.dx;		position.y += event.dy;  	event.target.style.transform = `translate(${position.x}px, ${position.y}px)`; },
            end (event)		{	testButton(event); position.x = 0;				position.y = 0; 			event.target.style.transform = `translate(${position.x}px, ${position.y}px)`; testButton()},
            inertia: false
        }
    });

  interact('.dropzone')
    .dropzone({
        accept: '.item',
        overlap: 0.75,
        ondropactivate: function (event) {
            const item = event.relatedTarget
            item.classList.add('dragging')
          },
        ondropdeactivate: function (event) {
        const item = event.relatedTarget
        item.classList.remove('dragging', 'cannot-drop')
        },
        ondragenter: function(event) {
        const item = event.relatedTarget
        item.classList.remove('cannot-drop')
        item.classList.add('can-drop')
        },
        ondragleave: function(event) {
        const item = event.relatedTarget
        item.classList.remove('can-drop')
        item.classList.add('cannot-drop')
        }
    })


function testButton(e) {
    console.log(e)
}

function activateButton() {
    alert('Button clicked or dragged')
}

