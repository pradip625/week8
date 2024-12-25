const { error, count } = require('console');

mongoose = require('mongoose');
//app = express();
const MONGO_URI = 'mongodb://localhost:27017/Week8';
mongoose.connect(MONGO_URI, {useUnifiedTopology: true,useNewUrlParser: true}); 
const db = mongoose.connection;
db.on('error', function(err)
{console.log("Error occured during connection"+err)
}
);
db.once('connected', function() {
console.log(`Connected to ${MONGO_URI}`);
});
// creating the scheme
const PersonScheme = new mongoose.Schema({ name: {
type: String, required: true
},
age: Number, Gender:String, Salary:Number
});
// creating model named as modelname with collection named as personCollection
const person_doc = mongoose.model('modelname', PersonScheme,'personCollection');
// adding a single document
const doc1 = new person_doc({ name: 'pradip',age:30,Gender:"Male",Salary:5000 }
);
 /*doc1
 .save()
 .then((doc1) => {
 console.log("Single Data Has been Added Into Your DataBase",doc1);
 })
 .catch((err) => {
 console.error(err);
 });
 //adding multiple documents
 manypersons=[{ name: 'Simon',age:42,Gender:"Male",Salary:34000 },
     { name: 'Nishant',age:23,Gender:"Male",Salary:8000 },
     { name: 'Madhav',age:27,Gender:"female",Salary:4000 },
     { name: 'Mike',age:40,Gender:"Male",Salary:4500 },
    {name:'antima', age:25, Gender:'female', Salary:3500} ]
     person_doc.insertMany(manypersons).then(function(){
         console.log("data inserted", manypersons);
     })
     .catch(function(error){
        console.log(error);
     });*/

     // find without using any filtering criteria
     /*person_doc.find({})
     .sort({Salary:1})
     .select("name Salary age")
     .limit(5)
     .exec()
     .then(docs =>{
        console.log("showing multiple documents");
        docs.forEach(function(Doc){
            console.log(Doc.age, Doc.name);
        })
     })
      .catch(err=>{
        console.error(error);
      })*/
      

             //find using filtering criteria
        /*var givenage =25
        person_doc.find({ age:{$gte:givenage}})
        .sort({Salary:1})
        .select("name Salary age")
        .limit(5)
        .exec()
        .then(docs =>{
            console.log("showing age greater than " , givenage)
            docs.forEach(function(Doc){
                console.log(Doc.age, Doc.name)
            })
        })
        .catch(error =>{
            console.log(error);
        })*/
  
            /*   // count the total number of collection  
            person_doc.countDocuments().exec()
            .then(count =>{
                console.log("total documents in a collection is ", count)

            })
             .catch(error =>{
                console.log(error);
             })*/
                     

              /*  //deleting from collection
             person_doc.deleteMany({ age:{$gte:35}})
             .exec()
             .then(docs =>{
                console.log("deleted documents are ", docs);

             })
             .catch(function(error){
                console.log(error);
             })*/


                 // updating my collection
             person_doc.updateMany({ Gender: "Male" },{Salay:5000})
              .exec()
              .then(docs=>{
                              console.log("updated information are" ); 
                              console.log(docs);
                          })
                          .catch(function(error){
                     console.log(error); 
                     });