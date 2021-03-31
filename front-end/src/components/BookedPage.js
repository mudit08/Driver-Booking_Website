import React from 'react'
import {Jumbotron,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../style/bookedpage.css'
const BookedPage=()=>{
    return(
        <div >
           
         
         <Jumbotron className="bg-dark text-black" id="bookedd"  >
            <h1 id="co">Congratulation !!! </h1>
            <blockquote className="blockquote mb-0">
                <p> Your Driver has been booked.
                    
                    Details will be shared with you.
                </p>
                {/* <footer className="blockquote-footer">admin  </footer> */}
            </blockquote>
          </Jumbotron>
          <Button>   <Link to={"customerPage"} ><Button>Go to customer page </Button></Link> </Button>
        </div>
    )
}
export default BookedPage;