import {Form,FormControl,Button} from 'react-bootstrap'

// interface SearchProps{
//     onSearch: (search:string)=>void
// }
const Search = ()=>{

    return (
        <>
        <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          </>
    )

}

export default Search






















// import { FC } from 'react'

// interface CoolProps{
//     foot?:number;
//     bar: string
// }
// const Cool:FC<CoolProps> =(props) =>{

//     return <>{ props }</>
// }