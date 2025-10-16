import type { PropsWithChildren } from 'react';

export type Props = {
  heading: string;
  link?: string;
};

export default function (props: PropsWithChildren<Props>) {
  return (
    <div className="w-full items-start flex-col gap-2">
      <span className="text-2xl">
        {props.link ? (
          <a href={props.link} style={{ textDecoration: 'none' }}>
            {props.heading}
          </a>
        ) : (
          props.heading
        )}
      </span>
      {props.children}
    </div>
  );
}
