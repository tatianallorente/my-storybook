import "./button.scss";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  secondary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * Animated button
   */
  animated?: boolean;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  secondary = false,
  animated = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = secondary ? "btn--white" : "btn--green";
  const isAnimated = animated ? "btn--animated" : "";
  return (
    <button
      type="button"
      className={["btn", `btn--${size}`, mode, isAnimated].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
// animated
