import { FC } from 'react';
import classNames from 'classnames';

type Columns = '3' | '4' | '5' | '6' | '7' | '8' | '9';

type GridOrder = 'order-first' | 'order-last';

type VerticalAlignment = 'items-start' | 'items-center' | 'items-end';

export interface Props {
  leftContentColumns: Columns;
  rightContentColumns: Columns;
  verticalAlignment: VerticalAlignment;
  mobileItemsOrder?: GridOrder;
  hasBottomBorder?: boolean;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
}

const SectionTwoColumns: FC<Props> = ({
  leftContentColumns = '6',
  rightContentColumns = '6',
  verticalAlignment,
  mobileItemsOrder,
  hasBottomBorder,
  leftContent,
  rightContent,
}) => (
  <>
    <div
      className={classNames(
        `grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-0 pb-12`,
        { 'border-b-2': hasBottomBorder },
        verticalAlignment
      )}
    >
      <div className={classNames('lg:order-none', [`lg:col-span-${leftContentColumns}`], mobileItemsOrder)}>
        {leftContent}
      </div>
      <div className={classNames('lg:col-end-13', [`lg:col-span-${rightContentColumns}`])}>{rightContent}</div>
    </div>
    <div className="lg:col-span-3 lg:col-span-4 lg:col-span-5 lg:col-span-6 lg:col-span-7 lg:col-span-8 lg:col-span-9 hidden" />
  </>
);

export default SectionTwoColumns;
