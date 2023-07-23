export default function Bike (props) { 
  return (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={200}
    height={150}
    viewBox="0 0 1280 731"
    {...props}
  >
    <path d="M318.6 1c-3.7 1.2-6.6 3.8-8.2 7.7-1.1 2.6-1.1 3.9.1 8 2.3 7.9 5.8 10.5 17.5 13.3 3 .7 10.7 3.5 17 6.3 11.4 5 11.6 5.1 21.5 5.1 7.5-.1 12.3-.7 19.3-2.6 6.5-1.8 9.5-2.2 9.8-1.4.2.6 4.2 14.1 8.9 30.1 4.7 15.9 10.8 36.4 13.5 45.5 19.5 66 25.1 85.2 24.8 85.4-.2.1-2.2.8-4.6 1.5-4.2 1.2-4.3 1.3-3.7 4.4 1.4 6.3 3.4 10 5.1 9.3 6-2.3 6.1-2.2 8.3 5.1 1.1 3.7 2.5 8.8 3.1 11.1l1.1 4.4-4.8 5.1c-2.7 2.9-16.3 17.5-30.2 32.4-15.7 17-26.1 27.3-27.2 27.3-1.1 0-2.9-1.2-4.2-2.7-4.4-5.3-7-7.3-10.4-7.9-2.2-.4-5.1-2.2-7.8-4.9-3.1-3.2-5.3-4.5-8.6-5-2.8-.5-5-1.6-6.3-3.2-2.3-3-7.4-5.3-11.5-5.3-1.8 0-4.1-1-5.8-2.6-3.4-3.2-6.4-4.4-10.9-4.4-2.1 0-5.1-1.1-7.6-2.8-3-2-5.5-2.7-9.3-2.8-3.2-.1-6.4-1-8.6-2.3-3.6-2.2-5-2.5-11.7-2.1-2.3.1-4.9-.4-5.7-1-2.4-2-8.7-3-12.6-2-2.8.8-4.3.7-6.5-.5-3.1-1.6-10.5-1.9-13.9-.6-1.1.5-3.9.1-6.8-.8-4.4-1.4-5.2-1.4-9.5.1-3.4 1.3-5.7 1.5-8.4.9-3.9-.9-9-.2-12.3 1.6-1 .6-4.4.8-7.6.6-4.5-.5-6.5-.1-9.5 1.5-2.3 1.2-6.4 2.2-10 2.4-4.2.3-7 1.1-9.1 2.6-2.1 1.5-4.6 2.2-7.5 2.2-3.1 0-5.7.8-9 2.9-2.5 1.6-6.5 3.2-8.9 3.6-4.3.7-11.9 4.9-11.9 6.6 0 .5-1.2.9-2.7.9-4.1.1-10.9 3.4-12.8 6.3-1.1 1.7-2.9 2.8-5.7 3.2-2.9.5-5.3 1.9-8.4 5-2.3 2.4-5.8 4.8-7.7 5.4-3.7 1.2-9.3 6.2-10.2 9.1-.3.9-1.8 2-3.4 2.3-3.7.8-8.5 4.9-10.1 8.6-.6 1.6-2.5 3.5-4.1 4.1-3.5 1.5-8.6 7.1-9.5 10.5-.3 1.4-1.1 2.5-1.6 2.5-2.4 0-7.2 4.7-9.2 8.9-1.2 2.6-4 6.3-6.2 8.4-2.5 2.2-4.5 5.2-5.3 7.8-.7 2.3-2.5 5.2-4.1 6.5-3.2 2.8-6 8.1-6 11.8 0 1.5-.8 3-1.9 3.6-2.9 1.5-6 7.1-6.3 11.5-.1 2.5-1.2 4.9-3 6.9-2.6 2.8-5.2 11.1-4.1 12.9.2.4-.8 2.4-2.3 4.4-2 2.7-2.9 5.1-3.2 9.2-.2 3.1-1.5 7.9-2.9 10.8-2.1 4.3-2.4 6.1-1.9 9.7.5 3.2.3 5.2-.7 6.8-2.3 3.5-2.9 8.3-1.8 12.4.6 2.3.7 4.2.1 4.9-2 2.4-2.9 9.8-1.7 13.4 1 2.8 1 4.4 0 7.1-1.6 4.8-1.6 8.6.2 11.9 1.2 2.4 1.2 3.8.3 8.3-1 4.9-.9 6 .9 9.6 1.5 3.1 1.9 5.4 1.5 9.5-.3 4.1.1 6.3 1.8 9.6 1.2 2.4 2.1 5.7 2 7.4-.3 5.9 0 7.4 2.4 10.9 1.5 2.3 2.5 5.4 2.8 9.1.3 4 1.2 6.5 3.1 9.1 1.5 1.9 2.7 4.7 2.7 6.3.1 3.6 3.1 10.3 5.9 12.7 1.1 1.1 2.1 3 2.1 4.3 0 3.7 2.5 8.7 5.7 11.4 2 1.6 3.3 3.9 3.7 6.5.6 2.8 2.1 5.1 5.2 8.1 2.4 2.4 4.4 4.6 4.4 5 0 2.5 4.7 9.6 7.6 11.4 2 1.2 4.1 3.7 5 5.7 1.9 4.6 4.7 7.7 8.4 9.2 1.6.7 3.4 2.5 4.1 4.2 1.5 3.6 5.2 7.3 9 8.9 1.5.6 3.9 2.9 5.4 5.1 1.8 2.7 4.3 4.7 8.1 6.5 3 1.3 5.4 2.8 5.4 3.3 0 2 6.4 7 10.2 8 2.4.7 5.1 2.4 6.6 4.2 2.8 3.2 7.7 5.8 11.3 5.8 1.1 0 3 1.1 4.1 2.5 2.6 3.3 6.7 5.4 11.3 5.7 2.5.1 4.9 1.2 6.9 3 2.8 2.5 11.1 5.2 12.8 4.2.4-.3 2.4.7 4.4 2.2 2.6 2 5 2.9 9.2 3.2 3.2.2 8 1.5 11 2.9 4 1.9 6.1 2.4 9 1.9 2.6-.4 5.2.1 8.9 1.6 4.6 1.9 5.9 2 10 1.1 2.7-.7 5.2-.8 5.8-.3 2.4 2 9.8 2.9 13.4 1.7 2.8-1 4.4-1 7.1 0 4.8 1.6 8.6 1.6 11.9-.2 2.4-1.2 3.9-1.2 8.2-.3 4.6.9 6 .8 9.4-.7 2.8-1.3 5.8-1.8 10.2-1.6 5 .2 6.9-.1 9.8-1.9 2.7-1.7 4.6-2.1 7.5-1.7 3.8.5 11-1.9 12.4-4.2.4-.6 3-1.1 5.7-1.1 5.1 0 9.5-1.7 11.8-4.4.8-.9 2.8-1.6 4.6-1.6 4.3 0 9.4-2.2 12.4-5.4 1.4-1.4 3.5-2.6 4.8-2.6 3.8 0 8.7-2.5 11.5-5.9 1.5-1.7 3.5-3.1 4.4-3.1 3.2 0 9.9-3.9 11.9-7 1.1-1.6 2.6-3 3.3-3 2.9 0 9.3-4.3 11.5-7.5 1.2-1.9 3.8-4.1 5.8-4.9 3.7-1.5 9.9-8 9.9-10.3 0-.7.6-1.3 1.3-1.3 2.9 0 9.4-5.9 11-9.9.9-2.3 2.1-4.1 2.7-4.1 2.1 0 8-6.4 9.1-9.9.7-2.4 2.2-4.4 3.9-5.5 3.2-1.8 6.5-6.6 7.6-11 .4-1.7 2-4.1 3.6-5.4 3.5-2.9 5.8-7.2 5.8-10.7 0-1.4.5-2.5 1.2-2.5 2.5 0 100.5-9 103.8-9.5 30.3-4.9 53.3-22.8 61-47.5 2.1-6.4 1.5-6.2 20.4-8.6 10.1-1.3 17.4-1.5 31.6-1.1 16.7.5 19 .4 22.7-1.3 4.1-1.8 7.3-6 7.3-9.5 0-3.2-3.1-7.5-6.8-9.4-3.2-1.6-6.9-1.9-25.2-2.4-15.1-.4-25.6-1.2-35.2-2.7l-13.7-2.2-.7-3.2c-1-4.1-.8-3.5-2.8-8.1-.9-2.2-2.1-4.7-2.6-5.5-.5-.8-2.1-3.5-3.4-5.9l-2.6-4.3 16.9-20.7c9.2-11.3 59-72.4 110.5-135.6l93.7-115 14.1-10.8c7.7-6 14.4-10.5 14.8-10 .5.4 2.2 5.5 4 11.3 1.7 5.8 3.7 11 4.3 11.6.7.5 6.4 2.3 12.8 3.8l11.5 2.7 5.8 11c3.2 6 6.4 10.9 7.1 10.9.8 0 4.3 7.5 8.9 19.1 7.3 18.6 7.5 19.2 5.8 21.4-1 1.4-3.2 2.6-5.7 3-2.9.4-5.1 1.8-8.2 5-2.3 2.5-4.6 4.5-5 4.5-2.5 0-9.6 4.7-11.4 7.6-1.2 2-3.7 4.1-5.7 5-4.5 1.9-7.7 4.7-9.2 8.4-.7 1.6-2.7 3.4-4.9 4.5-2.4 1-4.7 3.2-6.2 5.7-2.8 4.6-4.2 6.2-9.2 10.1-2.3 1.7-4.1 4.2-4.8 6.7-.8 2.7-2.3 4.7-4.5 6.1-3 1.8-7.4 8.8-7.4 11.8 0 .7-1.4 2.4-3 3.8-3.7 3.1-6 7.3-6 10.9 0 1.6-1 3.4-2.5 4.6-3.1 2.4-5.1 6.1-6.1 11.3-.4 2.1-2.1 5.8-3.8 8.2-2.1 3-3.1 5.7-3.2 8.7-.1 2.8-1.1 5.7-2.9 8.4-2.2 3.3-2.7 5.3-2.6 9.3 0 3.8-.5 5.9-2.2 8.3-1.7 2.4-2.2 4.6-2.3 9.6 0 4.2-.7 7.7-1.9 9.9-1.3 2.7-1.6 4.8-1.2 9 .5 4 .2 6.9-1 9.9-1.3 3.6-1.4 5.1-.5 9.3.9 3.8.9 6 0 9.4-1 3.6-.9 5.4.1 8.7 1.4 4.9 1.5 5.6.6 11.9-.6 3.5-.3 5.5 1.2 8.5 1.5 2.9 1.8 4.8 1.2 7.4-.9 3.9.3 9.5 2.5 12.5 1 1.3 1.3 3.1 1 5.1-.7 4 1.1 10.6 3.5 12.8 1.3 1.2 1.9 3.2 2 6.7.1 5.1 1.8 9.6 4.5 11.8.9.8 1.6 2.9 1.6 4.8 0 4.4 2.1 9.2 5.4 12.2 1.6 1.6 2.6 3.5 2.6 5.3 0 3.7 2 7.5 5.9 11.2 1.7 1.7 3.1 3.8 3.1 4.9 0 3.4 3.1 8.5 6.5 10.8 2 1.4 3.6 3.5 3.9 5.2.8 3.9 4.2 8.4 7.6 10.2 1.7.9 3.3 2.8 4 4.9 1.1 3.5 6.3 8.9 9.7 10 1 .4 2.7 2.6 3.8 4.9 1.5 3.1 3.3 4.9 6.8 6.8 2.7 1.4 5.7 3.9 6.7 5.6 2.3 3.9 6.3 7 10 7.8 1.7.4 3 1.1 3 1.5 0 2.1 7.3 8 11.1 9 2.5.7 5.2 2.4 6.7 4.2 2.8 3.2 7.7 5.8 11.3 5.8 1.1 0 3 1.1 4.1 2.5 2.5 3.2 6.3 5.2 10.8 5.6 2 .2 5.4 1.8 7.8 3.6 2.6 1.9 5.7 3.4 7.5 3.4 1.8.1 3.9.2 4.7.3.8.1 3 1.2 4.9 2.5 2.3 1.7 5.2 2.6 9 2.9 3.1.2 7.9 1.5 10.9 2.9 4 1.9 6.1 2.4 9 1.9 2.6-.4 5.2.1 8.9 1.6 4.5 1.8 5.9 2 9.7 1.1 3-.7 5-.7 6.2 0 3.5 2 9.8 2.6 13.4 1.3 2.8-1 4.2-1 6.5 0 4 1.7 7.8 1.7 12 0 2.8-1.2 4.5-1.3 8.7-.4 4.5.9 5.9.8 9.3-.7 2.6-1.2 5.9-1.7 9.6-1.6 4.2.2 6.8-.3 9.9-1.9 2.3-1.2 5.6-2.1 7.3-2 5.9.3 7.4 0 10.9-2.4 2.3-1.5 5.4-2.5 9.1-2.8 4-.3 6.5-1.2 9.1-3.1 1.9-1.5 4.7-2.7 6.3-2.7 3.8-.1 10.9-3.4 12.5-5.9.8-1.3 2.3-2.1 4.1-2.1 3.9 0 9.2-2.7 12-6 1.5-1.7 3.8-3 6.3-3.4 2.7-.6 5.1-2 8-5.1 2.3-2.3 5.8-4.8 7.8-5.5 3.5-1.1 9.6-6.2 9.6-8.1 0-.5 2.2-2 4.9-3.4 4.9-2.4 8.5-6 9.6-9.4.3-1 2.3-2.6 4.4-3.5 2.4-1.1 4.7-3.3 6.2-5.8 2.7-4.6 4.2-6.2 9.1-9.9 2.1-1.6 3.9-4.3 4.8-6.8.8-2.7 2.4-4.8 4.4-6.1 3.4-2 5.9-5.9 7-10.4.4-1.5 2.1-4 3.8-5.4 3.2-2.8 5.8-7.7 5.8-11.3 0-1.1 1.1-3 2.5-4.1 3.2-2.5 5.2-6.3 5.6-10.8.2-1.9 1.6-5.1 3.1-7 2.6-3.4 5.2-11.5 4.2-13.2-.3-.4.7-2.4 2.2-4.4 2-2.6 2.9-5 3.2-9.2.2-3.2 1.5-8 2.9-11 1.9-4 2.4-6.1 1.9-9-.4-2.6.1-5.2 1.6-8.9 1.8-4.5 2-5.9 1.1-9.7-.7-3-.7-5 0-6.2 2-3.5 2.6-9.8 1.3-13.4-1-2.8-1-4.2 0-6.5 1.7-4 1.7-7.8 0-12-1.2-2.8-1.3-4.5-.4-8.9 1-4.7.9-5.8-.9-9.4-1.5-3.1-1.9-5.4-1.5-9.6.4-4.4 0-6.3-1.7-9.2-1.3-2.2-2.2-5.2-2.1-7.3.3-6.4 0-7.8-2.4-11.3-1.5-2.3-2.5-5.4-2.8-9.1-.3-4-1.2-6.5-3.1-9.1-1.5-1.9-2.7-4.7-2.7-6.2 0-3.5-3.7-11.2-6.1-12.7-1.1-.7-1.9-2.3-1.9-4 0-3.7-3.4-10.3-6.4-12.2-1.6-1.1-2.6-2.9-3-5.8-.5-3.1-1.8-5.2-5-8.3-2.4-2.3-4.9-5.7-5.5-7.5-1.4-4-3.6-6.9-7.4-9.3-1.5-1-3.6-3.8-4.7-6.2-1.3-3.1-3.2-5.2-6.4-7.2-2.5-1.5-5-3.9-5.7-5.5-1.4-3.4-7.1-8.5-10.4-9.3-1.4-.3-2.5-1.1-2.5-1.6 0-2.4-4.4-6.8-8.8-8.9-2.6-1.2-6-3.7-7.5-5.6-3.1-3.6-7.5-6.3-10.5-6.3-1 0-2.9-1.4-4.1-3.1-2.4-3.3-9.1-6.8-12.8-6.9-1.2 0-2.6-.6-3-1.4-1.7-2.9-8.6-6.6-12.3-6.6-2.5 0-4.3-.7-5.6-2.1-2.8-3.1-6.8-4.9-10.9-4.9-2.2 0-5.1-1-7.7-2.8-3.1-2-5.5-2.7-9.5-2.9-3.5-.1-6.5-.9-8.9-2.3-2.6-1.7-5.4-2.3-10.2-2.5-3.7-.1-8.7-1-11.2-1.9-3.5-1.4-5.2-1.5-8.4-.7-3 .7-4.6.6-6.7-.5-3.2-1.6-9.6-1.8-13.2-.5-1.7.7-3.8.5-7.1-.7-4.3-1.6-4.9-1.6-9.3 0-3.6 1.3-5.8 1.5-8.8.8-4-.9-12 .3-13 2-.3.5-3.1.6-6.3.3-4.5-.4-6.6-.1-9.3 1.3-1.9 1-6.5 2.1-10.2 2.5-4.4.4-7.8 1.3-9.5 2.6-1.7 1.2-4.9 2.2-8.4 2.5-4.2.3-6.6 1.2-9.3 3.2-2 1.6-3.9 2.5-4.3 2.1-1.6-1.6-14.9-37.1-14.2-38 .6-.9-9.3-30.1-11.4-33.4-.7-1.1-3-1.2-11-.8l-10.1.7-3.6-4.3c-2.8-3.4-6.6-12.5-19.3-46.1-8.9-23.7-17-43.8-18.7-46.3-1.7-2.4-3.6-6.3-4.3-8.7l-1.4-4.4 18.6-8.7c23-10.8 20.9-10.1 23.1-8 1.6 1.4 2.6 1.5 5.7.6 3.7-1 4.1-.9 10.3 3.9 3.6 2.8 7.2 5 8 5.1.9 0 4.1.4 7.1.8l5.5.8 5.2-5.6c3.6-3.8 5.1-6.2 4.7-7.4-.7-2.1-.6-2.1 5.6.3 4.4 1.7 5.1 1.8 5.6.5.4-.8 1.2-1.5 1.8-1.5 3.3 0 11.8 3.4 18 7.1l6.8 4.1 2.9-2.8c1.6-1.5 2.9-3.3 2.9-4 0-1.6-7.5-8.1-12-10.4-1.9-.9-5.9-2.5-8.7-3.4-3.1-1.1-5.3-2.3-5.3-3.2 0-.8-1.6-3.9-3.6-6.8l-3.6-5.4L956 38c2.6-2.6 5-8 5-11.2 0-3.4-3.8-10.5-6.7-12.4-1.5-.9-4.2-2-6.1-2.5-5.6-1.2-6.7-.7-29.1 13.7-4.9 3.1-70.8 32.4-73 32.4-.6 0-1.1-.5-1.1-1.1 0-1.7-12.8-.6-16.5 1.4-1.7.9-4.1 2.5-5.4 3.5l-2.3 1.9 5.7 17.9c4.9 15.4 5.7 19.1 5.9 26.4.1 4.7.5 9.9 1 11.6l.8 3.2-43.3 10.7c-86.5 21.3-312.4 77.5-313.7 78-1.2.4-2-.9-3.6-6.1-.6-1.8.1-2.3 5.3-3.7l5.9-1.7.4-6.2c.2-3.5.2-6.6-.1-6.9-.4-.4-4.2.4-8.5 1.7-4.4 1.3-8.3 2.1-8.6 1.7-.4-.5-1.2-2.6-1.8-4.8-1.6-6-23.9-82.5-38.3-131.6-3.9-13.2-6.9-24.2-6.7-24.4.6-.6 21.4-3.5 32.8-4.5 16-1.4 26.3-1.2 34.5.6 23.6 5.1 26.9 5.2 28.5.8 2-5.3-3.1-11.9-13.3-17.1-11.9-6-41.3-7.7-76-4.4C407.8 6.8 403.1 7 391.2 6c-16.4-1.3-27.8-2.6-39.1-4.5-9-1.6-28.8-1.9-33.5-.5zm495.8 161.2c-.7 1.1-236.6 291.2-238.5 293.2-.4.5-3.7.1-7.6-.8-4.2-1.1-10.7-1.8-17-1.8-5.7 0-10.3-.2-10.3-.4s-12.6-46.6-28-103.1c-15.4-56.4-28-103.2-28-104 0-.7.3-1.3.6-1.3 1.1 0 327.9-82.2 328.3-82.6.9-.8 1.2-.3.5.8zM461.3 266c1.4 5.2 7.5 27 13.6 48.5 6 21.4 14.8 52.9 19.6 70 4.8 17 11.1 39.5 14.1 49.9 2.9 10.4 5.3 19 5.1 19.1-.1.1-7.7.5-16.9.8l-16.6.6.1-5.2c0-3.3-.6-6.5-1.8-8.7-1.1-2.1-1.9-5.7-2-9.1-.1-4.4-.6-6.4-2.6-9-1.8-2.4-2.6-4.8-2.8-8.2-.1-5-1.9-9.4-4.5-11.6-.9-.8-1.6-2.8-1.6-4.6 0-4.3-2.2-9.4-5.4-12.4-1.6-1.5-2.6-3.5-2.6-5.3 0-3.8-2.2-8-6-11.1-1.7-1.5-3-3.5-3-4.9 0-3.1-3.2-8.1-6.9-10.8-1.8-1.4-3.2-3.5-3.5-5.5-.6-3.2-6.7-10.5-8.7-10.5-.6 0-1.9-2-3-4.4-1.9-4.4-6.3-8.9-9.6-10-1-.4-2.6-2.3-3.5-4.4-1-2-3.1-4.6-4.7-5.7l-2.9-2 26.1-28.1c14.4-15.5 26.5-27.9 26.8-27.5.3.3 1.8 4.9 3.2 10.1zm-201.2 36.5c19.7 1.3 44.9 8.4 64.9 18.4 12.6 6.2 29.3 16.8 28.8 18.2-.2.4-22.6 24.7-49.8 53.9l-49.4 53-2.2-2.1c-1.8-1.7-2.6-1.9-4.4-.9-1.7.9-2.6.8-4.4-.4-2.1-1.3-2.6-1.3-4.6.1-1.7 1.2-2.7 1.3-4.5.5-1.9-.9-2.6-.7-4.1.9-1.2 1.3-2.8 1.9-4.8 1.7-2.4-.2-3.3.2-4.1 2-.6 1.4-1.8 2.2-3 2.1-3.6-.2-4.3.1-4.9 2.5-.4 1.8-1.4 2.6-3.4 2.8-2.1.2-2.8.9-3 3.1-.2 1.9-1.1 3.1-2.8 3.7-1.8.7-2.4 1.7-2.4 3.9 0 2.1-.7 3.4-2.1 4.2-1.6.8-2 1.7-1.6 3.7.4 1.8-.1 3.4-1.4 4.8-1.7 1.8-1.8 2.5-.8 4.8 1 2.2.9 2.9-.6 4.6-1.7 1.9-1.7 2.1 0 4 1.6 1.7 1.6 2.4.6 4.7-1.1 2.4-1 2.9 1 4.4 1.7 1.2 2 2.2 1.5 4.2-.5 2.1-.1 3 2 4.3 1.7 1.2 2.4 2.4 2.1 3.6-.6 2 1.7 4.8 3.8 4.8.8 0 1.5 1.2 1.7 2.7.2 2.2.9 2.9 3.1 3.3 1.6.3 3.3 1.5 4 3 1 1.9 1.9 2.4 3.9 2.2l2.7-.3-1.5 5.3c-1.6 6.1-1.8 13.6-.4 15.8.7 1.1 3.4 1.6 11.2 1.8 13 .4 35.5-1.3 37.4-2.9 1.9-1.6 2.8-.5 1.5 1.9-.7 1.4-.7 2.4.3 3.7.7 1 1.1 2.8.8 4.1-.3 1.7 0 2.4 1.2 2.4 5.1 0-2 6.5-16.9 15.3-10.3 6.2-14.1 7.8-24.3 10.6-8 2.2-13.1 4.1-14.9 5.8-2.7 2.3-4.3 2.5-10.3 1.1-2.2-.5-1.5 2.1 3.1 11.6 2.2 4.6 5.4 9.4 7.4 11.2 3.5 3.1 11.5 6 18.5 6.6 3 .3 3.5 0 3.8-1.9.3-1.7 1-2.3 2.9-2.3 3.2 0 140-10.9 143.1-11.4 1.2-.2 2.2 0 2.2.5 0 1.5-18.3 20-25.9 26.1-44.3 35.8-101.8 50-156.6 38.7C94.4 650.4 28.4 536 64.2 429.5 86.1 364 142 316.3 211 303.9c8.2-1.4 27.8-2.7 35-2.3 3 .2 9.4.6 14.1.9zm801.9.6c11.5 1.3 32.6 6.6 43.5 10.9 62.6 24.8 105.6 77.5 117.7 144 3 16.6 3 45.7-.1 62.4-3.5 19.5-8.2 34-16.5 51.1-37.3 76.5-122.3 118.4-205.9 101.5-68.9-14-124.2-65.4-143.5-133.5-11.8-41.2-8.4-86.3 9.3-126.7 10.9-24.9 29.3-49.4 49.7-66.4 8.6-7.1 20.8-15.9 21.2-15.2.1.1 16.6 41.4 36.6 91.5 20 50.2 36.6 91.3 36.9 91.3.3 0 5.1-1.6 10.6-3.6 7-2.5 11.9-3.6 16.5-3.7 5.7-.2 7.2-.6 10.4-3.2 2.1-1.7 4.8-3.7 6.1-4.5 2.1-1.3 2.3-2 1.8-7-1.2-14.4-9-22.3-20.7-20.7l-4.2.6-10.9-28.7c-6-15.8-19.3-50.9-29.7-78.1-10.3-27.2-18.8-50-18.8-50.7 0-.8 3.9-2.5 9.8-4.3 25.9-8 51.2-10.2 80.2-7zm-685.9 54.6c23.4 24 39.9 53.2 47.9 84.9 1.6 6.5 3 12.4 3 13 0 1.2-6.1 1.5-57.5 3.4-62.6 2.3-87.7 2.8-90.6 1.8-2.1-.7-2.9-1.6-2.9-3.3 0-1.3-.7-2.8-1.6-3.3-1.3-.7 7.3-10.5 46.1-52.1 26.3-28.1 48.1-51.1 48.4-51.1.4 0 3.6 3 7.2 6.7zm139.4 101.5c1 3.1.9 5.3-.2 5.4-.7.1-1.7.2-2.1.3-.5 0-1.4 1.2-2 2.6-.7 1.5-2 2.5-3.2 2.5-1.4 0-2.4 1-3.1 3-.7 2-1.8 3-3 3-1.3 0-2.4 1-3 2.9-.6 1.6-2.1 3.7-3.5 4.6-1.4.9-2.4 2.5-2.4 4 0 1.4-.8 2.9-2 3.5-1.3.7-2 2.1-2 3.9 0 1.6-.7 3.4-1.6 4.2-1.1.9-1.4 2.2-1 4.1.4 2.3.2 2.8-1.3 2.8-1.4 0-1.7-.6-1.4-2.4.3-1.2 0-4-.5-6-.8-2.6-.7-5.3.1-9.2.9-4.6.9-6.3-.4-9.8-1-2.9-1.2-5.1-.7-7.2.5-1.6.7-5 .4-7.6l-.5-4.7 14.7-.4c8.1-.1 15.5-.4 16.5-.5 1-.1 2 .4 2.2 1zm-87.1 5.5c1 4.7 1.8 35.7.9 36.9-.6.8-19.6-.8-69.9-5.9-67.8-7-69.1-7.1-70.8-9.5-1.6-2.1-1.7-2.7-.5-4.9s1.1-2.6-1-4.2c-1.7-1.3-2.1-2.3-1.6-4.3.5-2.1.2-3-1.4-4-1.2-.7-2.1-1.6-2.1-2 0-.5 6.4-.8 14.3-.8 13.1 0 39.3-.9 88.2-2.9 10.5-.4 24.5-.9 31.1-.9l12.2-.2.6 2.7zM346 514.5c29.4 3.1 54.5 5.8 55.8 6.1 1.2.2 2.2 1.1 2.2 1.8 0 4.7 10.2 11 16.9 10.4 3.3-.2 3.6-.1 3.3 2.2-2.1 16-27.2 66.1-33.7 67.4-1.1.3-35.6 3.1-76.6 6.3l-74.7 5.8.2-3.6c.1-2.1.8-4.4 1.6-5.4 1.1-1.4 1.1-1.8-.2-3.1-3.1-3.1-1.1-5.8 7-9.4 4.1-1.9 11.9-6.2 17.1-9.5 5.3-3.4 13.2-8.4 17.5-11 4.4-2.7 9.9-6.8 12.4-9.2 4.4-4.1 4.5-4.4 4.6-10.5.1-8.9-2.3-11.8-16.9-19.9-11.8-6.6-14.3-9.4-8.7-10.1 2.1-.2 2.8-.9 3-3 .2-2 1-3 2.8-3.4 2.4-.6 2.8-1.3 2.4-4.8-.3-2.7 1.9-3.7 6.5-3.2 2.2.3 28.1 3 57.5 6.1zm138.9 24.1c1.7 1.2 2.1 2.2 1.6 4.1-.4 1.9 0 3.2 1.5 4.8 1.5 1.6 2 3 1.5 4.4-.4 1.5.1 2.4 2 3.7 1.5 1 2.5 2.6 2.5 4 0 1.6.8 2.8 2.4 3.5 1.4.7 2.6 2.3 3 4 .4 2.1 1.1 2.9 2.6 2.9 1.4 0 2.4 1 3.1 3 .8 2.2 1.7 3 3.5 3 1.6 0 2.8.8 3.6 2.5.8 1.8 1.9 2.5 3.8 2.5 1.8 0 3.1.8 4 2.6 1.2 2.1 1.9 2.5 4.2 2 2-.4 3.1 0 4.2 1.5 1.1 1.7 2.1 2 4.5 1.4 2-.4 3.1-.3 3.1.4 0 .6-.6 1.1-1.2 1.1-.7 0-17.9 1.6-38.3 3.4-20.3 1.9-37.1 3.3-37.2 3.2-.1-.1.4-2 1.2-4.1.8-2.2 1.4-4.9 1.5-6.1 0-1.1.9-2.9 2-3.9 2.6-2.4 5.4-9.8 4.8-13-.3-1.5.1-3 .9-3.7 2.7-2.2 4.6-7.2 4.4-12.1 0-3.5.5-5.6 1.9-7.4 1.1-1.4 2.2-4 2.6-5.9.7-3.8 2.6-4.4 6.3-1.8z" />
  </svg>
)}