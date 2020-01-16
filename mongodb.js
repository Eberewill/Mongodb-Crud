const mongoose = require('mongoose');

//connection to our monggo db data base 
mongoose.connect('mongodb://localhost/playground')
 .then(()=> console.log("conected to MongoDb"))
 .catch(err => console.error("could not connect", err))

// to create a chema for our model
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: {type: Date, default: Date.now},
    isPublished: Boolean

}); 

//lets create a course model from the schema above. this is synanimous 
//to creating a course class followed by the instance of the class
const Course = mongoose.model('Course', courseSchema);

//now lets make an instance of the Course Class
async function createCourse(){
    const course = new Course({
        name: 'React course',
        author: 'Williams',
        tags: ['React', 'Frontend'],
        isPublished: false
    })
     const result = await course.save()
     console.log(result)

}
//createCourse()


const studentSchema = mongoose.Schema({
    name : String,
    age: String,
    class: String,
    department: String
})

const Student = mongoose.model('Student',studentSchema);

async function createStdent(){
    student = new Student({
        name: "Kola",
        age: "24",
        class: "HND11",
        department: "Agric science"
    })

    const result1 = await student.save()
    console.log(result1)
    
}

//to retrieve data from our database 
 async function getCourses(){
     const courses = await Course
     .find({author: "williams", isPublished: false}) // finds only collection authored by Williams & isPublished is "True"
     .limit(10) // limits the result to only 10
     .sort({name: 1 }) // sorts the 'name' property in ascending order. WHILE .sort({name: -1 }) sorts in Decending order
     .select({name: 1, author: 1}) // this sellects the properties to be reurned.
     console.log(courses);
 }

 // Retrieveing data in terms of Comparison Operator
 // note the following Comarison operators in Monfgo DB;
 // eq (equal)
 // ne (not equals)
 // gt (greater than)
 // lt (less than)
 // gte (greather than or equal to)
 // lte (less than or eaul to)
 // in 
 //nin (not in)


 async function getStudent(){
     const students = await Student.find({age: {$gt : 10}}) // this returns studens with age > 10.
   //.find({age: { $in: [20,40,23]}}) this will return the students of ages 20, 40, 23.
     console.log(students);

 }

 // Using Logical Expression to get our data
 //take tote of the following logical operators
 // and
 // or
 async function getStudent(){
  const students = await Student.find()
    .or([{department: 'agric'},{age: '24'}]) // displays students that have Agric as department or age as 24; jst like normal Or operation will be through if any of the condition is true
    .and([{department: 'agric'},{age: '24'}])// diplays students that matches both the conditions.
    console.log(students);

}


// Using regular expression to filter data


async function getStudent(){
    const students = await Student
    .find({name: /^Williams/}) //returns data which name property startswith "williams"
//node that the pattern are case Sensitive, but to make it insensitive we add i at the end like
    .find({name: /Eberechi$/i }) // returns data with name property ending with "eberechi"
    .find({name: /.*john*/i}) // returns data that contains john

    // to return the count of documents 
    .count()
    console.log(students) //returns the number of data that eet the querry
}







