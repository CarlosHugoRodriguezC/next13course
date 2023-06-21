"use client";
import { useAppDispatch, useAppSelector } from "@/store";
import {
  addOne,
  initCounterState,
  substractOne,
} from "@/store/counter/counterSlice";
import React, { useEffect } from "react";

interface CounterResponse {
  count: number;
  method: string;
}

const getCounter = async (): Promise<CounterResponse> => {
  const counter: CounterResponse = await fetch(
    "/api/counter"
  ).then((res) => res.json());
  return counter;
};

interface Props {
  value?: number;
}

export const CardCounter = ({ value = 10 }: Props) => {
  // const [counter, setCounter] = useState(value);
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(initCounterState(value));
  // }, [dispatch, value]);

  useEffect(() => {
    getCounter().then((counter) => {
      dispatch(initCounterState(counter.count));
    });
  }, [dispatch]);

  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex gap-3">
        <button
          className="px-2 py-1 rounded-xl bg-gray-300 text-black hover:bg-gray-200 transition-all min-w-[4rem]"
          onClick={() => dispatch(substractOne())}
        >
          -1
        </button>
        <button
          className="px-2 py-1 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all min-w-[4rem]"
          onClick={() => dispatch(addOne())}
        >
          +1
        </button>
      </div>
    </>
  );
};
