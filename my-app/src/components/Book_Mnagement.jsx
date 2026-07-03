function BookList({}){
     const booklist=[
        {id:1,bookName:"Eloquent JavaScript" , Writer:"Marijn Haverbeke"},
        {id:2,bookName:"You Don't Know JS Yet",Writer:"Kyle Simpson"},
        {id:3,bookName:"The Road to React ⭐⭐⭐⭐⭐" ,Writer: "Robin Wieruch"},
        {id:4,bookName:"Clean Code ⭐⭐⭐⭐⭐" ,Writer:" Robert C. Martin"}
     ]
     return (
        <div>
            <h2>book list</h2>
            {bookList.map((book)=>(
                <div key={book.id} style ={{border: "1px solid #ccc", margin: "8px", padding: "10px", borderRadius: "8px"}}>
                  <h3>{book.bookName}</h3>
                  <p>{book.Writer}</p>
                </div>

            ))}
        </div>
     );
}
