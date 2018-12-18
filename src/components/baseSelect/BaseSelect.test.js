import React from "react";
import { render, mount } from "enzyme";
import BaseSelect from "./BaseSelect";

describe("<BaseSelect />", () => {
  describe("render()", () => {
    const mockHangleChange = jest.fn(event => event.target);
    const mockProps = {
      id: "0",
      value: 1,
      options: [{ value: 0, text: "zero" }, { value: 1, text: "one" }]
    };
    test("renders the BaseSelect", () => {
      const wrapper = render(
        <BaseSelect {...mockProps} handleChange={mockHangleChange} />
      );

      expect(wrapper.find(".BaseSelect")).toBeDefined();
      expect(wrapper.find("option")).toHaveLength(mockProps.options.length);
    });
    test("select take value from recieve props", () => {
      const wrapper = mount(
        <BaseSelect {...mockProps} handleChange={mockHangleChange} />
      );
      expect(wrapper.find("select").props().value).toEqual(mockProps.value);
    });
    test("simulate change select", () => {
      const wrapper = mount(
        <BaseSelect {...mockProps} handleChange={mockHangleChange} />
      );
      const mockTarget = { value: 0 };
      wrapper.find("select").simulate("change", { target: mockTarget });
      expect(mockHangleChange).toHaveReturnedWith(mockTarget);
    });
  });
});
