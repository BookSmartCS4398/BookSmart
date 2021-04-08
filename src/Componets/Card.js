import React from 'react';

const Cards = ({ items }) => {
    console.log({items})
    if(items)
    {
      return(
        <div className="row">
        {items.map(item => (
          <span>
            { item.publishers == null ?
              <div className="card mb-4" key={item.publishers}>
                <a href={'https://openlibrary.org/isbn/' + item.isbn_13}  target ={"_blank"} rel="noreferrer" >
                  <img src={'https://covers.openlibrary.org/b/isbn/' + item.isbn_13 + '-M.jpg'} alt="" to={'https://openlibrary.org/isbn/' + item.isbn_13}/> 
                </a>
                <h2/>
                <p> {item.title}</p> {item.number_of_pages} Pages
                <h2/>
              </div>
            :""
            }

          </span>
        ))}
      </div>


        )
    }
    else
    {
      return(
        <div/>
        )
    }
}

export default Cards