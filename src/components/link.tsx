import type { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export type Props = {
  href?: string;
};

export default function (props: PropsWithChildren<Props>) {
  if (props.href?.startsWith('#')) {
    return (
      <HashLink smooth to={props.href}>
        {props.children}
      </HashLink>
    );
  }
  if (props.href?.startsWith('/')) {
    return <Link to={props.href}>{props.children}</Link>;
  }

  return (
    <a target="_blank" href={props.href}>
      {props.children}
    </a>
  );
}
