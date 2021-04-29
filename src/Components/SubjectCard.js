import React from 'react';

var subCards = ({ subject }) => {
  console.log({subject})

  if(subject)
  {

    return (
      <div className="row">

      &nbsp;&nbsp;&nbsp;&nbsp;
        {subject.map(book => (
          <span>
            <div className="card mb-4" key={book.key}>
              <a href={'https://openlibrary.org/' + book.key}  target ={"_blank"} rel="noreferrer" >
                <img src={'https://covers.openlibrary.org/b/olid/' + book.cover_edition_key + '-M.jpg'} alt="" to={'https://openlibrary.org/' + book.key} height={250}/> 
              </a>
              <h2/>
               <p><b> {book.title}</b></p> {book.authors["0"].name}
              <h2/>
            </div>
          </span>
        ))}
      </div>
    )
  }
  else{
    return(
      <div></div>
    )
  }

}

export default subCards