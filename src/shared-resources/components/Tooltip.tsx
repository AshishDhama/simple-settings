import React, { useRef, useState } from 'react';
import cx from 'classnames';

interface Props {
  delay?: any;
  children: any;
  content: any;
  direction?: any;
  className?: string;
}

const Tooltip: React.FC<Props> = function (props: Props) {
  const { delay, children, content, direction, className } = props;
  let timeout: any;
  const [active, setActive] = useState(false);
  const parentRef = useRef<HTMLDivElement>(null);

  const showTip = () => {
    if (!content) {
      return;
    }
    timeout = setTimeout(() => {
      if (parentRef.current?.firstChild) {
        const { offsetWidth, scrollWidth } = parentRef.current
          .firstChild as HTMLElement;
        if (offsetWidth < scrollWidth) {
          setActive(true);
        }
      }
    }, delay || 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  const getDirectionClass = (direction: string) => {
    if (direction === 'bottom') {
      return '-bottom-[30px] before:bottom-full before:border-b-black translate-y-1/2';
    }
    if (direction === 'left') {
      return `left-auto right-[calc(100%_+_30px)]
       top-2/4 translate-x-0 -translate-y-1/2
       before:left-auto
       before:-right-[12px]
       before:top-1/2
       before:translate-x-0
       before:-translate-y-1/2
       before:border-l-black
        `;
    }
    if (direction === 'right') {
      return `left-[calc(100%_+_30px)]
       top-2/4 translate-x-0 -translate-y-1/2
       before:-left-[6px]
       before:translate-x-0
       before:-translate-y-1/2
       before:border-r-black
       before:top-1/2`;
    }
    return '-top-[30px] before:top-full before:border-t-black';
  };

  return (
    <div
      className={cx(
        'relative flex w-fit ',
        content ? 'cursor-pointer' : '',
        className
      )}
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
      ref={parentRef}
    >
      {children}
      {active && (
        <div
          className={cx(
            `absolute
            left-1/2
            z-30
            min-w-full
            max-w-md
             -translate-x-1/2
              -translate-y-1/2
               rounded-md bg-black 
                p-2 text-center
           text-sm leading-none text-white
           before:pointer-events-none
           before:absolute
           before:left-1/2 before:-ml-[6px]
            before:h-0 before:w-0 before:border-[6px] before:border-solid
            before:border-transparent
            before:content-['']
          `,
            getDirectionClass(direction),
            direction
          )}
        >
          {content}
        </div>
      )}
    </div>
  );
};

Tooltip.defaultProps = {
  direction: 'top',
};

export default React.memo(Tooltip);
