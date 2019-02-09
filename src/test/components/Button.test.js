import React from "react";
import { shallow } from "enzyme";
import Button from "../../components/atomic/Button";

const setup = (props = {}) => {
  return shallow(<Button {...props} />);
};

test("renders without error", () => {
  const wrapper = setup();
  const appContainer = wrapper.find("a");
  expect(appContainer.length).toBe(1);
});

test("custom class named cname should be added to className", () => {
  const cName = "xyz";
  const wrapper = setup({ cName });
  const appContainer = wrapper.find("a");
  expect(appContainer.hasClass(cName)).toEqual(true);
});

test("iconName should be displayed with i", () => {
  const wrapper = setup({ iconName: "arrow" });
  const appContainer = wrapper.find("i");
  expect(appContainer.length).toBe(1);
});

test("text should be displayed", () => {
  const text = "OK";
  const wrapper = setup({ text });
  const appContainer = wrapper.find("a");
  expect(appContainer.html()).toContain(text);
});

test("onClick should be fired", () => {
  const onClick = jest.fn();
  const wrapper = setup({ onClick });
  const appContainer = wrapper.find("a");
  appContainer.simulate("click");
  expect(onClick.mock.calls.length).toEqual(1);
});
