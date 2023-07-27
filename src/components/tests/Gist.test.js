import { render } from "@testing-library/react";
import Gist from "../Gist";

test("GistIsRendering", () => {
  const { container } = render(<Gist gist={{}} />);
  expect(container).toBeVisible();
});
