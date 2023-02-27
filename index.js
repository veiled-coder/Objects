function InstagramPost(authorHandle, content, img, views, likes) {
  this.author = authorHandle;
  this.content = content;
  this.image = img;
  this.noOfViews = views;
  this.noOfLikes = likes;
}

//question 2

const rahmaPost = new InstagramPost(
  "@rohmaabdulfattah1",
  "hey everyone,today is my anniversary",
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fimages%2Fanimals%2Fcat&psig=AOvVaw3B1WXYJ_MqMS8ixbrqxd7q&ust=1677572868156000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCICn4Yiktf0CFQAAAAAdAAAAABAE",
  200,
  499
);
console.log(rahmaPost);

const mubajjalPost = new InstagramPost(
  "@dulfattah1",
  "hey everyone,today is my first day at work",
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fimages%2Fanimals%2Fcat&psig=AOvVaw3B1WXYJ_MqMS8ixbrqxd7q&ust=1677572868156000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCICn4Yiktf0CFQAAAAAdAAAAABAE",
  500,
  299
);
console.log(mubajjalPost)
//question 3a

function createPerson(name, age, location) {
  return {
    myName: name,
    myAge: age,
    myLocation: location,
  };
}

const musa = createPerson("Musa Dawodu", 19, "Lekki,Lagos State");
console.log(musa)
//question 3b

function createJambScores(eng, govt, lit, crk) {
  return {
    engScore: eng,
    govtScore: govt,
    litSCore: lit,
  };
}

const musaJambScores = createJambScores(70, 85, 82, 94);
console.log(musaJambScores)
//question 4
let my_obj = {
  name: "rahma",
  age: 23,
};
function cloneObject1() {
  //1 using the for in loop
  let my_newObj = {};
  for (let key in my_obj) {
    my_newObj[key] = my_obj[key];
    console.log(my_newObj);
  }
}
cloneObject1();

function cloneObject2() {
  //using object.assign();
  let my_newObj2 = Object.assign({}, my_obj);
  console.log(my_newObj2);
}
cloneObject2();

function cloneObject3() {
  //using spread operator
  let my_newObj3 = { ...my_obj };
  console.log(my_newObj3);
}
cloneObject3();
//question 5

const presidentialCandidates = {
  AAC: "Omoyele Sowore",
  ACCORD: "Christopher Imumolen",
  APC: "Bola Ahmed Tinubu",
  LP: "Peter Obi",
  NNPP: "Rabiu Kwankwaso",
  PDP: "Atiku Abubakar",
};
//using for in loop
function candidateInfo() {
  for (let party in presidentialCandidates) {
    let partyCandidate = `${presidentialCandidates[party]} is the candidate of ${party}`;
    console.log(partyCandidate);
  }
}

candidateInfo();

// using for of loop
console.log("--------------USING FOR LOOP----------------");

function candidateInfo2() {
  for (let party2 of Object.keys(presidentialCandidates)) {
    let partyCandidate2 = `${presidentialCandidates[party2]} is the candidate of ${party2}`;
    console.log(partyCandidate2);
  }
}
candidateInfo2();
