import EventManager from "./EventManager";
import Event from "./Event";

export default class EventManagerFactory {
  static create(events, types) {
    events.map((event) => {
      types.includes(event.type) &&
        setTimeout(() => {
          console.log(
            `At second ${event.second}:  {type: "${event.type}", message: "${event.message}"`
          );
        }, event.second * 1000);
    });

    console.log(events, types);
    return new EventManager();
  }
}
