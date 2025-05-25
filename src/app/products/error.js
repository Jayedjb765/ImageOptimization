"use client"

const ErrorPage = ({ error, reset }) => {
    return (
        <div>
            <h1 className='text-center text-4xl text-red-800'>Something went wrong </h1>
            <p className='text-center text-4xl text-red-800'>{error.message}</p>
            <button onDoubleClick={() => reset()}>Try again</button>
        </div>
    );
};

export default ErrorPage;