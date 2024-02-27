// import { fireEvent, render, screen } from '@testing-library/react';
// import App from './App';


// test('Testing Input box', () => {
//   render(<App />);
//  let checkInput=screen.getByRole("textbox")
//  let checkInputPlaceHolder=screen.getByPlaceholderText("Enter User Name")
//  expect(checkInput).toBeInTheDocument()
//  expect(checkInputPlaceHolder).toBeInTheDocument()
//  expect(checkInput).toHaveAttribute("name","user")
//  expect(checkInput).toHaveAttribute('Id','userId')
// });


// describe.only('UI test case group',()=>{
//   test('test case 1',()=>{
//     render(<App/>)
//     let checkInput=screen.getByRole("textbox")
//     expect(checkInput).toHaveAttribute('name','username')
//   })
//   test('test case 2',()=>{
//     render(<App/>)
//     let checkInput=screen.getByRole("textbox")
//     expect(checkInput).toHaveAttribute('name','username')
//   })
//   test('test case 3',()=>{
//     render(<App/>)
//     let checkInput=screen.getByRole("textbox")
//     expect(checkInput).toHaveAttribute('name','username')
//   })
  
// })
// describe('API test case group',()=>{
//   test('api test case 1',()=>{
//     render(<App/>);
//     let checkInput=screen.getByRole("textbox")
//     expect(checkInput).toHaveAttribute('name','username')
//   })
//   test('api test case 2',()=>{
//     render(<App/>);
//     let checkInput=screen.getByRole("textbox")
//     expect(checkInput).toHaveAttribute('name','username')
//   })
//   test('api test case 3',()=>{
//     render(<App/>);
//     let checkInput=screen.getByRole("textbox")
//     expect(checkInput).toHaveAttribute('name','username')
//   })
  
// })
// test('on change event testing',()=>{
//   render(<App/>)
//   let input =screen.getByRole('textbox')
//   fireEvent.change(input,{target:{value:'ab'}})
//   expect(input.value).toBe('ab')
// })

// test("click event test case",()=>{
//   render(<App/>)
//   const btn=screen.getByRole('button')
//   fireEvent.click(btn)
//   expect(screen.getByText('updated data')).toBeInTheDocument()
// })
// test('snapshot app for component',()=>{
//   const container=render(<App/>)
//   expect(container).toMatchSnapshot()
// })

// test('method testing case 1',()=>{
//   render(<App/>)
//   const btn=screen.getByTestId("btn1")
//   fireEvent.click(btn)
//   expect(screen.getByText('Hello')).toBeInTheDocument()
// })




const mathsOps=require('./components/app/App.js')


describe("Calculator tests",()=>{
  test("add 2 numbers",()=>{
    const val=mathsOps.sum(3,4)
    expect(val).toBe(7)
  })
  test("add 2 numbers to get success response",()=>{
    const val=mathsOps.sum(3,4)
    expect(val).toBe(8)
  })
  test("divide 2 numbers",()=>{
    const val=mathsOps.divide(6,2)
    expect(val).toBe(3)
  })
  test("multiple 2 numbers",()=>{
    const val=mathsOps.multiply(3,5)
    expect(val).toBe(15)
  })
})