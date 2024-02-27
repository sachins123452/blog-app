const { render, screen } = require('@testing-library/react')
const { default: Sum } = require('./components/app/Sum')

test('get by role',()=>{
    render(<Sum/>)
    const inputField=screen.getByRole('textbox')
    expect(inputField).toBeInTheDocument()
  })