export class Movie
{
  constructor(id, title, year)
  {
    this.id = id;
    this.title = title;
    this.year = year;
    this.actorsById = [];
  }

  pushActor(actorId)
  {
     this.actorsById.push(actorId);
  }
}