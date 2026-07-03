function StudentInfo({students}){
    const topStudents = students.filter(student =>student.gpa>=4.50);
    if (topStudents.length === 0) {             // ✅ ভুল ৪ ঠিক — else case handle করলাম
    return <p>there are no good student😔</p>;
  }
    return(
        <ul>
            {topStudents.map((student) => (
                <li key={student.id}>
                    {student.name} - {student.gpa}
                </li>
            ))}
        </ul>
    );
    }

function App(){
    const info = [
        {id:1,name:"j",gpa:5.00},
        {id:2,name:"i",gpa:4.00},
        {id:3,name:"k",gpa:4.50}
    ];
    return <StudentInfo students ={info} />;
}