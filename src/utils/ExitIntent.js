// src/utils/ExitIntent.js

import throttle from "lodash/throttle";

export default function ExitIntent(options = {}) {
  const defaultOptions = {
    XThreshold: 50,
    YThreshold: 50,
    maxDisplays: 1,
    eventThrottle: 200,
    onExitIntent: () => {},
  };

  return (function () {
    const config = { ...defaultOptions, ...options };
    const eventListeners = new Map();
    let displays = 0;

    const addEvent = (eventName, callback) => {
      document.addEventListener(eventName, callback, false);
      eventListeners.set(`document:${eventName}`, { eventName, callback });
    };

    const removeEvent = (key) => {
      const { eventName, callback } = eventListeners.get(key);
      document.removeEventListener(eventName, callback);
      eventListeners.delete(key);
    };

    const shouldDisplay = (XPosition, YPosition) => {
      if (
        XPosition <= config.XThreshold &&
        YPosition <= config.YThreshold &&
        displays < config.maxDisplays
      ) {
        displays++;
        return true;
      }
      return false;
    };

    const mouseDidMove = (event) => {
      if (shouldDisplay(event.clientX, event.clientY)) {
        config.onExitIntent();
        if (displays >= config.maxDisplays) {
          removeEvents();
        }
      }
    };

    const removeEvents = () => {
      eventListeners.forEach((value, key, map) => removeEvent(key));
    };

    addEvent("mousemove", throttle(mouseDidMove, config.eventThrottle));

    return removeEvents;
  })();
}
