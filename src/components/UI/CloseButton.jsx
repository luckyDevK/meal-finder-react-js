export default function CloseButton({ ...props }) {
  return (
    <button
      className="absolute left-2 top-2  text-slate-800 z-20 hover:text-slate-100 hover:bg-slate-800 transition-colors cursor-pointer"
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
}
