import { render } from "@testing-library/react";
import Search from "../Search";

test("SearchIsRendering", () => {
  const { container } = render(<Search />);
  expect(container).toBeVisible();
});
