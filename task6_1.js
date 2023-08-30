class movie{
    constructor(title,studio,rating='PG10'){
        this.title=title;
        this.studio=studio;
        this.rating=rating;

    }
    getPG( ){
        // console.log('movie name: ',this.title);
        // console.log('Studio :',this.studio);
        // console.log("Rating :",this.rating);
        return (`movie name is ${this.title} and studio ${this.studio} movie rating ${this.rating}`)
        
    }
}
let film=new movie('maaveeran','shanthi talkies production','8.5/10');
// a)string represents for (title,studio,rating)

console.log(film.title);
console.log(film.studio);
console.log(film.rating);
// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
let film1=new movie("Bigil","panchathan record studio am production");
console.log(film1.title);
console.log(film.studio);
console.log(film1.rating);

// c)
let film2=new movie('RRR','Ak production');
// film2.getPG();
console.log(film2.getPG());

/* d)Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, 
the studio “Eon Productions”, and the rating “PG­13”.
*/
let movienew=new movie('Casino Royale','Eon Productions','PG13');
console.log(movienew.title);
console.log(movienew.studio);
console.log(movienew.rating);
console.log(movienew.getPG());
