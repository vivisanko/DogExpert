import React from "react";
import { render } from "enzyme";
import SettingsForm from "./SettingsForm";

describe("<SettingsForm />", () => {
  describe("render()", () => {
    test("renders the component", () => {
      const mockProps = {
        name: "name",
        size: 4,
        complexity: 2,
        changeSettings: jest.fn(),
        changeName: jest.fn()
      };
      const wrapper = render(<SettingsForm {...mockProps} />);

      expect(wrapper.find(".SettingsForm")).toBeDefined();
    });
  });
});
