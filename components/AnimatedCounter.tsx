"use client";
import React from "react";
import CountUp from "react-countup";

const AnimatedCounter = ({
  amount,
  symbol,
}: {
  amount: number;
  className?: string;
  symbol?: string;
}) => {
  return (
    <div>
      <CountUp
        decimal="."
        prefix={symbol}
        end={amount}
        duration={2}
        decimals={2}
      />
    </div>
  );
};

export default AnimatedCounter;
