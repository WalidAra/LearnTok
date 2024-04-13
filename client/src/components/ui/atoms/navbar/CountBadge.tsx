import React from "react";

type Props = {
  count: number;
};

const CountBadge = ({ count }: Props) => {
  return <div className="center-div size-6 rounded-md bg-muted">{count}</div>;
};

export default React.memo(CountBadge);
