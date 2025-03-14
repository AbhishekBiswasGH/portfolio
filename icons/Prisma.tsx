export default function Prisma({
  width,
  height,
  className
}: {
  width?: number;
  height?: number;
  className?: string;
}) {
  return (
    <svg
      width={width || 48}
      height={height || 48}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      className={className || ""}
    >
      <linearGradient
        id="tIPmjNUBt_a5oESFbxjTla"
        x1="22.322"
        x2="24.979"
        y1="6.179"
        y2="39.339"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset="0"
          stopColor="#33c4a2"
        />
        <stop
          offset=".979"
          stopColor="#16a394"
        />
      </linearGradient>
      <path
        fill="url(#tIPmjNUBt_a5oESFbxjTla)"
        d="M44.284,36.035L27.687,1.429c-0.855-1.783-3.337-1.93-4.397-0.26L4.886,30.177	c-0.397,0.625-0.385,1.426,0.029,2.04l9.271,13.738c0.575,0.852,1.634,1.237,2.623,0.953l25.942-7.458	C44.208,39.031,44.939,37.402,44.284,36.035z M40.618,37.279L18.8,43.388c-0.505,0.142-0.98-0.305-0.87-0.818l7.735-36.097	c0.139-0.65,1.023-0.755,1.311-0.157l14.265,29.621C41.489,36.481,41.194,37.118,40.618,37.279z"
      />
    </svg>
  );
}
