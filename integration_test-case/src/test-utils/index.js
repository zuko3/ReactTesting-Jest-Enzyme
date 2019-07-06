import { mount } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import rootReducer from "../reducer";
import { createStoreWithMiddleWare } from "../store";
import { Router } from "react-router-dom";
import history from "../history";

export const mockData = {
  pokemon: {
    id: 26,
    species: { name: "raichu" },
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"
    }
  }
};

export const makeMountRender = (Component, props) => {
  return mount(<Component {...props} />);
};

const makeStore = (customState = {}) => {
  const state = rootReducer({}, { type: "@@INIT" });
  return createStoreWithMiddleWare(rootReducer, state);
};

export const reduxify = Component => {
  return function() {
    return (
      <Provider store={makeStore()}>
        <Router history={history}>
          <Component />
        </Router>
      </Provider>
    );
  };
};

export const snapshotify = reactWrapper => {
  return reactWrapper.html();
};

export const mocker = apiMock => ({
  fetchRandomPokemon() {
    apiMock
      .onGet(/https:\/\/pokeapi.co\/api\/v2\/pokemon\/\d+/)
      .reply(config => {
        const numberCheck = RegExp(/pokemon\/(\d+)/);
        const pokemonInt = Number(numberCheck.exec(config.url)[1]);

        if (pokemonInt > 151) {
          return [500];
        }

        return [200, mockData.pokemon];
      });

    return this;
  }
});

//This is for getting async tasks to get completed.
export const ticks = (callbacks = []) => {
  if (callbacks.length < 1) {
    return null;
  }

  setTimeout(() => {
    const cb = callbacks.shift();

    if (cb) {
      cb();
    }

    ticks(callbacks);
  });
};

//This is for async tasks to get completed.
export const asyncFlush = () => new Promise(resolve => setTimeout(resolve, 0));
