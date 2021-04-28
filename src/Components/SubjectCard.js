import React from 'react';

var subCards = ({ subject }) => {
  console.log({subject})

  if(subject)
  {
    return (
      <div className="row">
      
        {subject.map(book => (
          <span>
            <div className="card mb-4" key={book.key}>
              <a href={'https://openlibrary.org/' + book.key}  target ={"_blank"} rel="noreferrer" >
                <img src={'https://covers.openlibrary.org/b/olid/' + book.cover_edition_key + '-M.jpg'} alt="" to={'https://openlibrary.org/' + book.key}/> 
              </a>
              <h2/>
              <p> {book.title}</p> 
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