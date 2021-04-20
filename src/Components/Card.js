import React from 'react';

var Cards = ({ items }) => {
    console.log({items})
    if(items)
    {
      return (
        <div className="row">
          {items.map(item => (
            <span>
              <div className="card mb-4" key={item.publishers}>
                <a href={'https://openlibrary.org/isbn/' + item.isbn_13}  target ={"_blank"} rel="noreferrer" >
                  <img src={'https://covers.openlibrary.org/b/isbn/' + item.isbn_13 + '-M.jpg'} alt="" to={'https://openlibrary.org/isbn/' + item.isbn_13}/> 
                </a>
                <h2/>
                <p> {item.title}</p> {item.number_of_pages} Pages
                <h2/>
              </div>
            </span>
          ))}
        </div>
      )
    }
    else if(items)
    {
      return(  
          <div className="row">
            {items.map(item => (
              <span>
              <div className="card mb-4" key={item.works}>
                <a href={'https://openlibrary.org/books/' + item.lending_edition}  target ={"_blank"} rel="noreferrer" >
                  <img src={'https://covers.openlibrary.org/b/olid/' + item.cover_edition_key + '-M.jpg'} alt="" to={'https://openlibrary.org/books/' + item.lending_edition}/> 
                </a>
                <h2/>
                <p> {item.title}</p> {item.authors["0"].name}
                <h2/>
              </div>
              </span>
            ))}
          </div>
      )
    }
    else{
      return(
        <div/>
        )
    }
}

export default Cards