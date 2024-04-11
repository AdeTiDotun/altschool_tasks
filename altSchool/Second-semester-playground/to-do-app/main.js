import './utils/bling'

function app () {
  return mk ('div', {id: 'app'}, [
    mk('hi', null, ['Todo App: My First version']),
    mk('form', {id: 'form'}, [
      mk('input', {type: 'text', id: 'todo', placeholder: 'Enter a todo'})
    ]),
    mk('button', {type: 'submit'}, ['Add Todo']),
    mk('ul')
  ])
}

//  render will be appending something to the body so that we can see the body.
function render() {
  document.body.prepend(app())
}

render()