import styles from "./Button.module.scss";
import { clsx } from "clsx";

function Button({
  children,
  variant = "primary",
  size = "medium",
  fullWidth = false,
  icon = null,
  iconPosition = "left",
  iconOnly = false,
  disabled = false,
  loading = false,
  active = false,
  onClick,
  onMouseEnter,
  onMouseLeave,
  type = "button",
  className = "",
  style = {},
  ...rest
}) {
  const buttonClasses = clsx(
    styles.button,
    styles[variant],
    styles[size],
    {
      [styles.fullWidth]: fullWidth,
      [styles.disabled]: disabled,
      [styles.loading]: loading,
      [styles.active]: active,
      [styles.iconOnly]: iconOnly,
      [styles.hasIcon]: icon && !iconOnly,
      [styles.iconRight]: iconPosition === "right",
    },
    className,
  );

  const renderContent = () => {
    if (iconOnly && icon) {
      return icon;
    }

    if (icon) {
      return (
        <>
          {iconPosition === "left" && icon}
          <span className={styles.buttonText}>{children}</span>
          {iconPosition === "right" && icon}
        </>
      );
    }

    return children;
  };

  const renderSpinner = () => (
    <span className={styles.spinner} aria-hidden="true">
      <svg viewBox="0 0 50 50">
        <circle cx="25" cy="25" r="20" fill="none" strokeWidth="4" />
      </svg>
    </span>
  );

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      disabled={disabled || loading}
      style={style}
      aria-disabled={disabled || loading}
      aria-label={iconOnly ? children : undefined}
      {...rest}
    >
      {loading ? renderSpinner() : renderContent()}
    </button>
  );
}

export default Button;
