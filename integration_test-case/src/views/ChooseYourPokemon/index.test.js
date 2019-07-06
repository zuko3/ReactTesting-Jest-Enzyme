import Routes from "../../Routes";
import apiService from "../../services/api-service";
import {
  makeMountRender,
  mocker,
  reduxify,
  snapshotify,
  ticks,
  asyncFlush
} from "../../test-utils";
import ChooseYourPokemon from "./";
import history from "../../history";

describe("<ChooseYourPokemon />", function() {
  const apiMock = apiService.mock();

  beforeEach(() => {
    mocker(apiMock).fetchRandomPokemon();
  });

  afterEach(() => {
    apiMock.reset();
  });

  it("matches snapshot", function() {
    const wrapper = makeMountRender(reduxify(ChooseYourPokemon));
    expect(snapshotify(wrapper)).toMatchSnapshot();
  });

  it("allows users to select a random pokemon", function(done) {
    const wrapper = makeMountRender(reduxify(Routes));
    history.push("/choose-your-pokemon");

    wrapper.update();
    wrapper.find('[data-test-id="choose-pokemon"]').simulate("click");

    ticks([
      () => {
        wrapper.update();
        console.log("from tick part:", wrapper.debug());
        expect(window.location.href).toBe("http://localhost/selected");
        expect(snapshotify(wrapper)).toMatchSnapshot();
        done();
      }
    ]);
  });

  it("allows users to select a random pokemon", async function() {
    const wrapper = makeMountRender(reduxify(Routes));
    history.push("/choose-your-pokemon");

    wrapper.update();
    wrapper.find('[data-test-id="choose-pokemon"]').simulate("click");

    await asyncFlush();
    wrapper.update();

    console.log("From async part:", wrapper.debug());

    expect(window.location.href).toBe("http://localhost/selected");
    expect(snapshotify(wrapper)).toMatchSnapshot();
  });
});
