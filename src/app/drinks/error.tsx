"use client";

// Define the type for the props
interface ErrorProps {
  error: {
    message: string;
  };
}

// Define the component with TypeScript
const Error = ({error}: ErrorProps) => {
  return <div>{error.message}</div>;
};

export default Error;