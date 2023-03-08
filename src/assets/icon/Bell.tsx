import { SVGProps } from '@components/atoms/Icon';

const Bell: React.FC<SVGProps> = ({ width, height, color }) => {
  return (
    <svg
      width={width || 18}
      height={height || 20}
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 15H16.781L16 11.877V8C15.998 6.31815 15.3906 4.69324 14.2888 3.42253C13.187 2.15181 11.6646 1.32026 10 1.08V0H8V1.08C6.3354 1.32026 4.81295 2.15181 3.71118 3.42253C2.60941 4.69324 2.00197 6.31815 2 8V11.877L1.219 15H0V17H5.142C5.36027 17.8576 5.85806 18.618 6.55672 19.1611C7.25537 19.7042 8.11507 19.9991 9 19.9991C9.88493 19.9991 10.7446 19.7042 11.4433 19.1611C12.1419 18.618 12.6397 17.8576 12.858 17H18V15ZM3.97 12.243L4 8C4 6.67392 4.52678 5.40215 5.46447 4.46447C6.40215 3.52678 7.67392 3 9 3C10.3261 3 11.5979 3.52678 12.5355 4.46447C13.4732 5.40215 14 6.67392 14 8V12L14.728 15H3.281L3.97 12.243ZM9 18C8.65049 17.9989 8.3074 17.906 8.00516 17.7305C7.70291 17.555 7.45214 17.303 7.278 17H10.722C10.5479 17.303 10.2971 17.555 9.99484 17.7305C9.6926 17.906 9.34951 17.9989 9 18Z"
        fill={color}
      />
    </svg>
  );
};

export default Bell;