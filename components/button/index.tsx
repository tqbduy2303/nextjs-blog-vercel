export default function Button({
    text,
    onClick,
  }: {
    text: string;
    onClick: () => void;
  }) {
    return (
      <button
        className="w-full rounded-md bg-keyColor1 dark:bg-keyColor py-4 px-8 text-base font-medium text-black transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
        onClick={onClick}
      >
        {text}
      </button>
    );
  }