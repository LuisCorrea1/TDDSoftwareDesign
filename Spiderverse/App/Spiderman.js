class Spiderman{
    constructor(name, age, actor, movies, studio){
        this.name = name
        this.age = age 
        this.actor = actor
        this.movies = movies
        this.studio = studio
    }

    get getInfo(){
        return `Hey, I'm ${this.name} from ${this.studio} studio`
    }
}

module.export = Spiderman