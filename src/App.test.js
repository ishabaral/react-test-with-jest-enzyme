import { render, screen } from "@testing-library/react";
import App from "./App";

// setup file
import { shallow } from "enzyme";

let wrapper;
beforeEach(() => {
  //before each function runs the test include this code
  wrapper = shallow(<App />); //It only checks for the content of <App />. if there are other components in <App />, shallow won't go inside it
}); //alternatively you can use mount && import it for enzyme

describe("Counter testing", () => {
  test("Render the counter heading", () => {
    // console.log(wrapper.debug());
    expect(wrapper.find("h1").text()).toContain("This is counter app");
  });

  test("render a button with a text of `increment`", () => {
    expect(wrapper.find("#increment-btn").text()).toBe("Increment");
  });

  test("render the initial value of state in a div", () => {
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });

  test("render the click event of increment button and increment counter value", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
  });

  test("render the click event of decrement button and decrement counter value", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
    wrapper.find("#decrement-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });
});
