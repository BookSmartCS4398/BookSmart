import React from 'react';

var Cards = ({ items }) => {
  console.log({items})
    return (
      <div className="row">
      &nbsp;&nbsp;
        {items.map(item => (
          <span>
              <div className="card mb-4" key={item.publishers}>
                <a href={'https://openlibrary.org/isbn/' + item.isbn_13}  target ={"_blank"} rel="noreferrer" >
                  <img src={'https://covers.openlibrary.org/b/isbn/' + item.isbn_13 + '-M.jpg'} alt="" to={'https://openlibrary.org/isbn/' + item.isbn_13}/> 
                </a>
                <h2/>
                <p><b> {item.title}</b></p> {item.number_of_pages} Pages
                <h2/>
              </div>
          </span>
        ))}
      </div>

        )
}

export default Cards