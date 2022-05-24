import React from "react";
import ExternalLink from "./external-link";

export default function EmailMeLink(props: {
  children: React.ReactNode;
  subject?: string;
}) {
  // break it up so at least the source code can't
  // be scanned with a simple e-mail regex
  let link = "mailto:";
  link += "hello@";
  link += "youapt.eu";
  if (props.subject) {
    link += `?subject=${encodeURIComponent(props.subject)}`;
  }
  return (
    <ExternalLink href={link} target={null}>
      {props.children}
    </ExternalLink>
  );
}
