import { useState } from "react";
import { useInterval } from "../../hooks/useTimer";

const DEFAULT_BLINKING_SPEED = 500;
const DEFAULT_CURSOR_SYMBOL = "|";

export const Cursor = ({
  cursorSymbol = DEFAULT_CURSOR_SYMBOL,
  delay = DEFAULT_BLINKING_SPEED,
}): JSX.Element => {
  const [visibleFlag, setVisibleFlag] = useState(true);

  useInterval(() => setVisibleFlag((flag) => !flag), delay);

  // @ts-expect-error
  return visibleFlag ? cursorSymbol : "";
};
