import classNames from "classnames";
import styles from "./notification.module.scss";
import { Button } from "../button";
export enum TNotification {
  error = "error",
  warning = "warning",
  success = "success",
}

interface IProps {
  type: TNotification;
  text: string;
  iconSrc?: string;
  onClick?: () => void;
}

export const Notification = ({ type, text, iconSrc, onClick }: IProps) => {
  return (
    <div className={classNames(styles.container, styles.error)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={iconSrc} alt="icon" />
      <p>{text}</p>
      {type === TNotification.error && (
        <Button
          data-testid="retry-button"
          className={styles.retry}
          onClick={onClick}
        >
          <span data-testid="error-message" className={styles.retryText}>
            Try again
          </span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className={styles.retryIcon}
            src="/icons/arrow-right.svg"
            alt="try again"
          />
        </Button>
      )}
    </div>
  );
};
