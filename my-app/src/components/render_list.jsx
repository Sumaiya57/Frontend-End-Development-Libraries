// function FruitList(){
//     const fruits =["apple","banana","mango"];
//     return(
//         <ul>
//             {fruits.map((fruit,index) =>(
//                    <li key={`${fruit}-${index}`}>{fruit}</li> 
//                 ))}
//         </ul>
//     );
// }

// export default FruitList;

//object array
// function StudentList(){
//     const students = [
//         {id:"001",name:"I",grade:"A+",age:24},
//         {id:"002",name:"J",grade:"A-",age:23},
//         {id:"003",name:"K",grade:"B+",age:22}
//     ];
//     return(
//         <div>
//             <h2>studentList</h2>
//             {students.map((student)=>(
//              <div key={student.id} style={{ border: "1px solid gray", margin: "8px", padding: "10px"}}>
//                 <h3>{student.name}</h3>
//                 <p>Grade:{student.grade}</p>
//                 <p>Age:{studnt.age}</p>
//              </div>
//             ))}
//         </div>
//     );
// }

//Conditional Rendering + List 
function ProductList({products}){
    if (products.length===0){
        return <p>here found no products</p>
    }
    return (
        <ul>
            {
                products.map((product) => (
                    <li key={product.id}>
                        {product.name}-{product.inStock ? "✅" : "❌"}

                    </li>
                )
                
                )
            }
        </ul>
    );
}
function App() {
  const items = [
    { id: 1, name: "Rice",   inStock: true  },
    { id: 2, name: "Dal",   inStock: false },
    { id: 3, name: "Oil",   inStock: true  },
  ];

  return <ProductList products={items} />;
}
export default App;