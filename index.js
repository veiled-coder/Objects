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

const mubajjalPost = new InstagramPost(
  "@dulfattah1",
  "hey everyone,today is my first day at work",
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fimages%2Fanimals%2Fcat&psig=AOvVaw3B1WXYJ_MqMS8ixbrqxd7q&ust=1677572868156000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCICn4Yiktf0CFQAAAAAdAAAAABAE",
  500,
  299
);

//question 3a

function createPerson(name, age, location) {
    return {
        myName:name,
        myAge:age,
        myLocation: location,
    }
}

const musa = createPerson('Musa Dawodu', 19, 'Lekki,Lagos State');


//question 3b


function createJambScores(eng, govt, lit, crk) {
    return {
        engScore: eng,
        govtScore: govt,
        litSCore:lit
    }
}

const musaJambScores = createJambScores(70, 85, 82, 94);

//question 4

//check readme.md file for ans