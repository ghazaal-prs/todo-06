const persons = [{
    name: 'ali',
    id : self.crypto.randomUUID() ,
    age: '22' ,
    fieldOfStudy : 'computer'
} , {
    name: 'mammad',
    id : self.crypto.randomUUID() ,
    age: '20' ,
    fieldOfStudy : 'bargh'
}];

const addNewPerson = (name , age , fieldOfStudy) => {
    const newPerson = {
        id : self.crypto.randomUUID(),
        timeStamp : Date.now(),
        name , 
        age ,
        fieldOfStudy
    }
    persons.push(newPerson)
}

addNewPerson('esi' , '21' , 'mecanic');
delete persons[0]
console.log(persons)

