import React from "react";

import Icon from "components/Icon";
import classnames from "classnames";

interface ICustomLinkProps {
  url: string;
  text: string;
  className?: string;
  newTab?: boolean;
  /** Icon wraps on new line with last word */
  multiline?: boolean;
}

const baseClass = "custom-link";

const CustomLink = ({
  url,
  text,
  className,
  newTab = false,
  multiline = false,
}: ICustomLinkProps): JSX.Element => {
  const customLinkClass = classnames(baseClass, className);

  const target = newTab ? "_blank" : "";

  const multilineText = text.substring(0, text.lastIndexOf(" ") + 1);
  const lastWord = text.substring(text.lastIndexOf(" ") + 1, text.length);

  const content = multiline ? (
    <>
      {multilineText}
      <span className={`${baseClass}__no-wrap`}>
        {lastWord}
        {newTab && (
          <Icon
            name="external-link"
            className={`${baseClass}__external-icon`}
          />
        )}
      </span>
    </>
  ) : (
    <>
      {text}
      {newTab && (
        <Icon name="external-link" className={`${baseClass}__external-icon`} />
      )}
    </>
  );

  return (
    <a
      href={url}
      target={target}
      rel="noopener noreferrer"
      className={customLinkClass}
    >
      {content}
    </a>
  );
};

export default CustomLink;
