 const {got} = require('./data')


function countAllPeople(got) {
  // let array = []
  // for (let element of got.houses){
    
  //   array.push(element.people)
  // }
  // return array.flat(2).length
  return (got.houses).reduce((acc,cv) => {
    acc = acc + cv.people.length
    return acc
  },0)
}




function peopleByHouses(got) {

  // let obj ={}
  // for (let element of got.houses){
  //   if (element.name){
  //     obj[element.name] = element.people.length
  //   }
  // }
  // let sorted = Object.entries(obj).sort()
  // return Object.fromEntries(sorted)

  let result= (got.houses).reduce((acc,element)=>{
    element.name ? acc[element.name] = element.people.length : null
    return acc
  },{})
  let sorted = Object.entries(result).sort()
  return Object.fromEntries(sorted)
}





function everyone(got) {
  let array= []
  for (let element of got.houses){
    for(let names of element.people){
        array.push(JSON.parse(JSON.stringify(names.name)))
    }
  }
  return array

}



function nameWithS(got) {
  let result = everyone(got)
 

  // let inc = []
  // for (let el of result ){
  //   if (el.includes('s') || el.includes('S')){
  //     inc.push(el)
  //   }
  // }
  // return inc

  return result.reduce((acc,element)=>{
    element.includes('s') || element.includes('S') ? acc.push(element): null
    return acc
  },[])
  
}




function nameWithA(got) {
  let result = everyone(got)
  let inc = []
  return result.reduce((acc,element)=>{
      element.includes('a') || element.includes('A') ? acc.push(element): null
      return acc
  },[])
}




function surnameWithS(got) {
  let data = everyone(got)
  // let arr=data.map((element)=>{
    
  //   return element.split(" ")
    
  // }).filter((el)=>{
  //   return (el[el.length-1][0])==="S"
  // })
  // return arr
  let names = []
  data.forEach((element)=>{
    if(element.split(" ")[1][0]==="S"){
      names.push(element)
    }
  })
  return names
}







function surnameWithA() {
  let data = everyone(got)
  let names = [] 
  data.forEach((element) =>{
    if (element.split(" ")[1][0] === 'A'){
      names.push(element)
    }
  })
  return names
}







function peopleNameOfAllHouses(got) {
  let object = {}
  got.houses.forEach((element) =>{
    if(!object[element.name]){
      object[element.name] = [];
    }
    for(let ele of element.people){
      object[element.name].push(ele.name)
    }
  })
  return object
}





// // // Testing your result after writing your function



console.log(countAllPeople(got));
// Output should be 33





console.log(peopleByHouses(got));
// Output should be
//{Arryns: 1, Baratheons: 6, Dothrakis: 1, Freys: 1, Greyjoys: 3, Lannisters: 4,Redwyne: 1,Starks: 8,Targaryens: 2,Tullys: 4,Tyrells: 2}





console.log(everyone(got));
// Output should be
//["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "King Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy", "Margaery (Tyrell) Baratheon", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn", "Edmure Tully", "Brynden Tully", "Olenna (Redwyne) Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]





console.log(nameWithS(got), 'with s');
// Output should be
// ["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "Stannis Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn"]





console.log(nameWithA(got));
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon", "Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Yara Greyjoy", "Margaery Baratheon", "Loras Tyrell", "Catelyn Stark", "Lysa Arryn", "Olenna Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]





console.log(surnameWithS(got), 'surname with s');
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow", "Catelyn Stark"]





console.log(surnameWithA(got));
// Output should be
// ["Lysa Arryn", "Jon Arryn"]




console.log(peopleNameOfAllHouses(got));
// Output should be
// {Arryns: ["Jon Arryn"], Baratheons: ["Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon"], Dothrakis: ["Khal Drogo"], Freys: ["Walder Frey"], Greyjoys: ["Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy"], Lannisters: ["Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon"], Redwyne: ["Olenna Tyrell"], Starks: ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow"], Targaryens: ["Daenerys Targaryen", "Viserys Targaryen"], Tullys: ["Catelyn Stark", "Lysa Arryn", "Edmure Tully", "Brynden Tully"], Tyrells: ["Margaery Baratheon", "Loras Tyrell"]}







