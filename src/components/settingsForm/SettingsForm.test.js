import React from "react";
import { mount } from "enzyme";
import SettingsForm from "./SettingsForm";

describe("<SettingsForm />", () => {
  describe("mount()", () => {
    test("renders the component", () => {
      const wrapper = mount(<SettingsForm />);

      expect(wrapper.find(".SettingsForm")).toBeDefined();
    });
  });
});
