function Author(name,birthYear,nationality){
    this.name=name;
    this.birthYear=birthYear;
    this.nationality=nationality;
}
function Book(title,author,genre,price){
    this.title=title;
    this.author=author;
    this.genre=genre;
    this.price=price;
}
Book.prototype.getBookinfo=function(){
    console.log(`Title :${this.title}
                 Author :${this.author}
                 Genre :${this.genre}
                 Price :${this.price}`); 
}
let a1=new Author("Jeff Keller",1952,"American");
console.log(a1);
let b1=new Book("Attitude is everyting","Jeff Keller","Self-growth",250);
console.log(b1);
let b2=new Book("love story","Shantanu bhatt","romance",299);
let b3=new Book("Agni ki udaan","Abdul kalam","Biography",249);
let b4=new Book("Think and grow rich","Adom freddy","Money",149);
let b5=new Book("Rich dad poor dad","Robinson","money",199);
 
b1.getBookinfo()
b2.getBookinfo()
b3.getBookinfo()
b4.getBookinfo()
b5.getBookinfo()


