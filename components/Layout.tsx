import { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Title from "../components/Title";
import anime from "animejs";

type LayoutProps = {
    children: React.ReactNode
    heading: String
    title: String

}

const Layout = ({children, heading, title}: LayoutProps) => {
    const [animationRef, setAnimationRef] = useState<ReturnType<typeof anime> | undefined>();
    useEffect(() => {
        setAnimationRef(
            anime({
              targets: '.heading-path',
              strokeDashoffset: [anime.setDashoffset, 0],
              easing: 'easeInOutSine',
              duration: 10000,
              delay: function(el, i) { return i * 250 },
              direction: 'alternate',
              loop: false
            }),
        );
    }, []);

    return (
        <div>
        <Head>
        <title>{`${title} - placeholder webring`}</title>
        </Head>
        <main className="min-h-screen h-full bg-background">

        <div className = "md:flex md:flex-row">
            {/* No clue what's happening here lol */}
            <div className = "md:float-left relative md:w-4/12 md:sticky h-full p-10 md:h-screen md:top-0 flex flex-col justify-center">
            <div className = "inset-0 absolute w-full bg-[url('../public/bg.jpg')] md:bg-cover"></div>
            <div className = "float-left w-full absolute bg-cover inset-0 bg-primary/80 z-20"></div>
            <div className = "z-30">
                <a className = "my-auto" href = "/">
                    {/* font: spline sans mono */}
                    <svg className="w-full h-auto" viewBox="0 0 1030.575 146.925" xmlns="http://www.w3.org/2000/svg"><g id="svgGroup" strokeLinecap="round" fillRule="evenodd" fontSize="9pt" stroke="#fff" strokeWidth="0.25mm" fill="#00000000"><path className="heading-path" d="M 458.7 116.7 L 449.7 116.7 L 449.7 0 L 458.7 0 L 458.7 34.875 L 457.5 58.2 L 458.175 64.725 L 456.675 59.475 Q 457.575 52.5 460.988 46.5 Q 464.4 40.5 470.475 36.825 Q 476.55 33.15 485.4 33.15 A 33.802 33.802 0 0 1 492.699 33.891 Q 499.204 35.329 503.437 39.562 Q 509.85 45.975 509.85 58.725 L 509.85 116.7 L 500.85 116.7 L 500.85 61.275 A 39.296 39.296 0 0 0 500.513 55.955 Q 500.142 53.249 499.364 51.026 A 16.935 16.935 0 0 0 497.4 47.063 Q 494.815 43.27 488.695 42.319 A 29.357 29.357 0 0 0 484.2 42 A 27.603 27.603 0 0 0 477.381 42.804 A 21.086 21.086 0 0 0 470.025 46.237 A 26.217 26.217 0 0 0 466.081 49.873 Q 462.58 53.769 459.163 59.973 A 86.877 86.877 0 0 0 458.7 60.825 L 458.7 116.7 Z M 232.875 69.15 L 232.875 62.85 A 38.493 38.493 0 0 0 232.475 57.09 Q 231.451 50.347 227.813 46.762 A 15.401 15.401 0 0 0 222.166 43.31 Q 217.941 41.775 211.95 41.775 A 44.081 44.081 0 0 0 205.846 42.167 Q 198.559 43.189 194.737 46.875 A 14.947 14.947 0 0 0 190.473 54.843 Q 189.869 57.788 190.125 61.35 L 180.525 61.35 A 28.657 28.657 0 0 1 180.342 58.155 Q 180.342 53.422 182.022 49.33 A 22.01 22.01 0 0 1 183.15 46.988 A 23.395 23.395 0 0 1 190.79 38.844 A 30.141 30.141 0 0 1 194.025 36.975 A 32.927 32.927 0 0 1 202.2 34.219 Q 206.7 33.3 212.025 33.3 A 50.859 50.859 0 0 1 220.371 33.938 Q 224.76 34.67 228.235 36.241 A 21.72 21.72 0 0 1 234.6 40.538 A 23.589 23.589 0 0 1 240.828 51.572 Q 241.81 55.288 241.932 59.7 A 45.875 45.875 0 0 1 241.95 60.975 L 241.95 116.7 L 232.95 116.7 L 232.875 99.675 Q 231.075 105.225 227.1 109.237 A 26.479 26.479 0 0 1 218.823 114.853 A 31.027 31.027 0 0 1 217.425 115.425 Q 211.725 117.6 204.6 117.6 Q 195.277 117.6 189.146 113.865 A 20.619 20.619 0 0 1 185.887 111.413 A 20.517 20.517 0 0 1 179.323 97.965 A 28.484 28.484 0 0 1 179.175 95.025 A 23.019 23.019 0 0 1 180.128 88.245 A 18.211 18.211 0 0 1 185.175 80.175 A 24.016 24.016 0 0 1 190.427 76.519 Q 195.598 73.79 203.391 72.142 A 81.672 81.672 0 0 1 204.45 71.925 Q 207.75 71.25 211.688 70.725 Q 215.071 70.274 219.369 69.906 A 243.546 243.546 0 0 1 220.8 69.787 A 198.911 198.911 0 0 1 224.924 69.504 Q 226.743 69.398 228.731 69.309 A 347.26 347.26 0 0 1 232.875 69.15 Z M 334.125 64.5 L 324.375 64.5 Q 324.075 61.275 322.875 57.412 A 25.086 25.086 0 0 0 319.741 50.912 A 28.677 28.677 0 0 0 319.125 50.025 A 18.892 18.892 0 0 0 313.898 45.158 A 22.809 22.809 0 0 0 312.337 44.25 A 18.124 18.124 0 0 0 307.667 42.58 Q 304.999 42 301.8 42 A 27.131 27.131 0 0 0 293.538 43.197 A 21.447 21.447 0 0 0 283.05 50.512 A 27.522 27.522 0 0 0 278.557 59.115 Q 276.3 65.985 276.3 75.525 Q 276.3 86.645 279.665 94.363 A 28.533 28.533 0 0 0 283.05 100.2 A 21.813 21.813 0 0 0 299.054 108.986 A 30.87 30.87 0 0 0 302.025 109.125 Q 309.783 109.125 314.097 107.065 A 13.169 13.169 0 0 0 314.55 106.837 Q 318.9 104.55 320.775 101.062 A 26.825 26.825 0 0 0 323.049 95.433 A 24.334 24.334 0 0 0 323.4 93.975 L 333.15 93.975 A 27.041 27.041 0 0 1 330.405 102.468 A 33.102 33.102 0 0 1 328.8 105.262 A 24.613 24.613 0 0 1 322.464 111.903 A 31.641 31.641 0 0 1 318.6 114.3 A 28.023 28.023 0 0 1 311.796 116.771 Q 308.66 117.496 305.005 117.722 A 55.488 55.488 0 0 1 301.575 117.825 A 35.376 35.376 0 0 1 290.407 116.106 A 31.684 31.684 0 0 1 283.65 112.95 Q 275.775 108.075 271.275 98.737 A 43.271 43.271 0 0 1 267.831 88.081 Q 266.907 83.28 266.791 77.784 A 75.414 75.414 0 0 1 266.775 76.2 A 70.2 70.2 0 0 1 267.485 65.93 Q 268.297 60.44 270.041 55.851 A 38.361 38.361 0 0 1 271.425 52.65 Q 276.075 43.125 284.138 38.212 A 33.731 33.731 0 0 1 298.799 33.473 A 41.631 41.631 0 0 1 302.625 33.3 Q 312.15 33.3 318.938 37.537 Q 325.725 41.775 329.55 48.863 A 39.607 39.607 0 0 1 334.019 63.437 A 45.584 45.584 0 0 1 334.125 64.5 Z M 109.875 92.925 L 109.875 17.625 A 19.553 19.553 0 0 1 110.014 15.208 Q 110.332 12.664 111.375 11.1 A 6.403 6.403 0 0 1 113.074 9.343 A 5.918 5.918 0 0 1 115.425 8.4 L 83.55 8.4 L 83.55 0 L 119.4 0 L 119.4 93.75 Q 119.4 102.375 122.138 105.675 A 7.265 7.265 0 0 0 124.789 107.612 Q 127.797 108.975 133.05 108.975 A 67.748 67.748 0 0 0 138.262 108.785 Q 140.948 108.578 143.274 108.143 A 34.905 34.905 0 0 0 145.612 107.625 A 73.407 73.407 0 0 0 153.41 105.116 A 85.411 85.411 0 0 0 156.3 103.95 L 156.3 113.025 A 31.313 31.313 0 0 1 153.115 114.357 Q 151.382 114.98 149.34 115.531 A 67.98 67.98 0 0 1 146.4 116.25 Q 140.325 117.6 132 117.6 A 48.797 48.797 0 0 1 126.949 117.357 Q 121.769 116.816 118.525 115.072 A 12.839 12.839 0 0 1 117.6 114.525 Q 112.875 111.45 111.375 105.9 Q 109.875 100.35 109.875 92.925 Z M 649.875 92.925 L 649.875 17.625 A 19.553 19.553 0 0 1 650.014 15.208 Q 650.332 12.664 651.375 11.1 A 6.403 6.403 0 0 1 653.074 9.343 A 5.918 5.918 0 0 1 655.425 8.4 L 623.55 8.4 L 623.55 0 L 659.4 0 L 659.4 93.75 Q 659.4 102.375 662.138 105.675 A 7.265 7.265 0 0 0 664.789 107.612 Q 667.797 108.975 673.05 108.975 A 67.748 67.748 0 0 0 678.262 108.785 Q 680.948 108.578 683.274 108.143 A 34.905 34.905 0 0 0 685.612 107.625 A 73.407 73.407 0 0 0 693.41 105.116 A 85.411 85.411 0 0 0 696.3 103.95 L 696.3 113.025 A 31.313 31.313 0 0 1 693.115 114.357 Q 691.382 114.98 689.34 115.531 A 67.98 67.98 0 0 1 686.4 116.25 Q 680.325 117.6 672 117.6 A 48.797 48.797 0 0 1 666.949 117.357 Q 661.769 116.816 658.525 115.072 A 12.839 12.839 0 0 1 657.6 114.525 Q 652.875 111.45 651.375 105.9 Q 649.875 100.35 649.875 92.925 Z M 424.875 77.925 L 366.525 77.925 A 47.894 47.894 0 0 0 367.405 85.881 Q 368.352 90.593 370.288 94.489 A 30.261 30.261 0 0 0 370.35 94.613 A 29.979 29.979 0 0 0 374.593 100.987 A 24.778 24.778 0 0 0 379.687 105.413 Q 385.5 109.2 392.625 109.2 Q 402.75 109.2 408.15 104.962 A 16.204 16.204 0 0 0 414.288 94.125 A 21.42 21.42 0 0 0 414.375 93.45 L 423.9 93.45 A 26.922 26.922 0 0 1 421.782 101.855 A 24.451 24.451 0 0 1 419.287 106.237 A 25.132 25.132 0 0 1 410.664 113.751 A 30.749 30.749 0 0 1 408.562 114.787 A 33.739 33.739 0 0 1 400.306 117.223 A 46.626 46.626 0 0 1 392.625 117.825 Q 383.475 117.825 375.45 112.913 A 33.9 33.9 0 0 1 365.483 103.468 A 43.324 43.324 0 0 1 362.437 98.475 Q 357.747 89.517 357.468 76.845 A 73.506 73.506 0 0 1 357.45 75.225 Q 357.45 62.175 362.025 52.762 A 36.306 36.306 0 0 1 368.518 43.333 A 32.273 32.273 0 0 1 374.775 38.288 Q 382.95 33.225 393.675 33.225 A 34.5 34.5 0 0 1 403.86 34.654 A 26.741 26.741 0 0 1 416.85 43.387 A 34.395 34.395 0 0 1 423.342 56.092 Q 424.773 61.134 425.131 67.139 A 69.15 69.15 0 0 1 425.25 71.25 Q 425.25 73.425 425.1 75.225 L 424.875 77.925 Z M 874.875 77.925 L 816.525 77.925 A 47.894 47.894 0 0 0 817.405 85.881 Q 818.352 90.593 820.288 94.489 A 30.261 30.261 0 0 0 820.35 94.613 A 29.979 29.979 0 0 0 824.593 100.987 A 24.778 24.778 0 0 0 829.687 105.413 Q 835.5 109.2 842.625 109.2 Q 852.75 109.2 858.15 104.962 A 16.204 16.204 0 0 0 864.288 94.125 A 21.42 21.42 0 0 0 864.375 93.45 L 873.9 93.45 A 26.922 26.922 0 0 1 871.782 101.855 A 24.451 24.451 0 0 1 869.287 106.237 A 25.132 25.132 0 0 1 860.664 113.751 A 30.749 30.749 0 0 1 858.562 114.787 A 33.739 33.739 0 0 1 850.306 117.223 A 46.626 46.626 0 0 1 842.625 117.825 Q 833.475 117.825 825.45 112.913 A 33.9 33.9 0 0 1 815.483 103.468 A 43.324 43.324 0 0 1 812.437 98.475 Q 807.747 89.517 807.468 76.845 A 73.506 73.506 0 0 1 807.45 75.225 Q 807.45 62.175 812.025 52.762 A 36.306 36.306 0 0 1 818.518 43.333 A 32.273 32.273 0 0 1 824.775 38.288 Q 832.95 33.225 843.675 33.225 A 34.5 34.5 0 0 1 853.86 34.654 A 26.741 26.741 0 0 1 866.85 43.387 A 34.395 34.395 0 0 1 873.342 56.092 Q 874.773 61.134 875.131 67.139 A 69.15 69.15 0 0 1 875.25 71.25 Q 875.25 73.425 875.1 75.225 L 874.875 77.925 Z M 8.025 102 L 5.475 100.125 L 9 98.475 Q 10.575 102.075 13.8 104.4 A 21.616 21.616 0 0 0 20.035 107.482 A 25.088 25.088 0 0 0 21.187 107.812 Q 25.35 108.9 29.7 108.9 Q 36.825 108.9 42.788 104.7 A 26.056 26.056 0 0 0 49.303 97.985 A 35.092 35.092 0 0 0 52.312 92.55 A 38.566 38.566 0 0 0 54.97 83.85 Q 55.875 79.019 55.875 73.35 A 66.203 66.203 0 0 0 55.344 64.677 Q 54.76 60.268 53.533 56.652 A 27.751 27.751 0 0 0 50.437 50.213 Q 45 42 34.5 42 Q 28.8 42 23.663 43.837 Q 18.525 45.675 14.7 49.425 A 21.79 21.79 0 0 0 10.209 55.862 A 27.241 27.241 0 0 0 9 58.95 L 8.25 56.4 L 9 53.025 Q 10.2 46.65 14.213 42.262 Q 18.225 37.875 24 35.587 Q 29.775 33.3 36.075 33.3 A 29.046 29.046 0 0 1 44.698 34.537 A 24.769 24.769 0 0 1 51.713 37.987 A 26.997 26.997 0 0 1 59.043 45.88 A 36.63 36.63 0 0 1 61.95 51.675 Q 65.55 60.675 65.55 73.575 A 61.638 61.638 0 0 1 64.514 85.149 A 45.721 45.721 0 0 1 60.675 96.825 Q 55.8 106.725 47.813 112.163 Q 39.825 117.6 30.3 117.6 A 21.419 21.419 0 0 1 25.779 117.092 Q 23.567 116.614 21.188 115.687 Q 16.275 113.775 12.525 110.25 A 15.168 15.168 0 0 1 9.337 106.068 A 13.653 13.653 0 0 1 8.025 102 Z M 774.225 49.65 L 776.775 52.275 L 773.25 53.925 Q 771.675 50.25 768.713 47.587 Q 765.75 44.925 761.85 43.462 A 23.361 23.361 0 0 0 754.076 42.006 A 26.486 26.486 0 0 0 753.525 42 A 25.704 25.704 0 0 0 743.77 43.794 A 23.736 23.736 0 0 0 734.438 50.738 A 28.006 28.006 0 0 0 729.439 59.94 Q 728.065 64.048 727.507 69.063 A 65.978 65.978 0 0 0 727.125 76.35 A 50.64 50.64 0 0 0 727.977 85.831 A 40.726 40.726 0 0 0 729.975 92.887 A 30.437 30.437 0 0 0 733.462 99.506 A 24.596 24.596 0 0 0 738.225 104.588 A 19.694 19.694 0 0 0 749.623 108.856 A 25.027 25.027 0 0 0 751.125 108.9 Q 756.075 108.9 760.425 106.725 Q 764.775 104.55 768.113 100.725 Q 771.45 96.9 773.25 91.95 L 774 94.5 L 773.25 97.875 Q 772.125 104.25 768.6 108.637 Q 765.075 113.025 760.125 115.312 Q 755.175 117.6 749.55 117.6 Q 740.025 117.6 732.788 112.275 Q 725.55 106.95 721.5 97.612 A 48.091 48.091 0 0 1 718.118 85.533 A 63.628 63.628 0 0 1 717.45 76.125 A 68.112 68.112 0 0 1 718.238 65.485 Q 719.317 58.666 721.875 53.137 A 37.92 37.92 0 0 1 727.346 44.453 A 31.627 31.627 0 0 1 734.138 38.437 A 31.527 31.527 0 0 1 749.662 33.38 A 38.836 38.836 0 0 1 752.175 33.3 Q 757.2 33.3 761.963 35.4 Q 766.725 37.5 770.1 41.175 Q 773.475 44.85 774.225 49.65 Z M 920.85 115.2 L 911.625 115.2 L 911.625 52.725 Q 911.625 48 912.825 46.05 A 5.496 5.496 0 0 1 915.793 43.708 A 7.443 7.443 0 0 1 916.5 43.5 L 911.625 42.15 L 911.625 34.8 L 920.1 34.8 L 920.4 56.7 Q 922.575 50.025 926.7 44.7 A 33.774 33.774 0 0 1 933.288 38.188 A 30.603 30.603 0 0 1 936.225 36.263 A 22.944 22.944 0 0 1 943.863 33.454 A 21.471 21.471 0 0 1 947.475 33.15 A 23.763 23.763 0 0 1 955.205 34.353 A 19.754 19.754 0 0 1 964.237 40.725 Q 970.208 48.034 970.208 62.187 A 68.885 68.885 0 0 1 970.2 63.225 L 961.05 63.225 A 52.85 52.85 0 0 0 960.757 57.806 Q 960.117 51.989 958.088 48.519 A 11.891 11.891 0 0 0 956.813 46.725 A 13.564 13.564 0 0 0 946.939 41.954 A 18.169 18.169 0 0 0 945.9 41.925 A 18.71 18.71 0 0 0 936.232 44.686 A 27.184 27.184 0 0 0 931.688 48.113 A 42.715 42.715 0 0 0 923.681 58.233 A 53.539 53.539 0 0 0 920.85 63.9 L 920.85 103.05 Q 920.85 104.925 919.913 106.462 A 3.825 3.825 0 0 1 918.69 107.681 Q 918.142 108.034 917.421 108.291 A 9.425 9.425 0 0 1 916.35 108.6 L 920.85 110.475 L 920.85 115.2 Z M 773.25 91.95 L 773.25 0 L 782.25 0 L 782.4 116.7 L 773.25 116.7 L 773.25 91.95 Z M 570.825 117.825 Q 561 117.825 553.05 112.837 A 33.164 33.164 0 0 1 542.789 102.563 A 41.957 41.957 0 0 1 540.413 98.362 Q 535.725 88.875 535.725 75.375 A 62.823 62.823 0 0 1 536.559 64.862 Q 537.703 58.129 540.413 52.687 A 38.314 38.314 0 0 1 546.264 43.991 A 32.208 32.208 0 0 1 553.05 38.288 Q 561 33.3 570.825 33.3 Q 580.65 33.3 588.6 38.287 A 33.411 33.411 0 0 1 599.031 48.781 A 41.946 41.946 0 0 1 601.237 52.687 A 42.849 42.849 0 0 1 604.895 63.778 Q 605.828 68.649 605.916 74.216 A 73.764 73.764 0 0 1 605.925 75.375 A 66.824 66.824 0 0 1 605.159 85.78 Q 604.03 92.936 601.238 98.587 Q 596.55 108.075 588.6 112.95 Q 580.65 117.825 570.825 117.825 Z M 9.15 146.925 L 0 146.925 L 0 34.875 L 9 34.875 L 9 45.9 L 9 98.325 L 8.25 102.375 L 9.075 116.7 L 9.15 146.925 Z M 570.825 109.125 A 23.758 23.758 0 0 0 580.557 107.18 Q 585.452 105.011 589.158 100.421 A 28.579 28.579 0 0 0 589.275 100.275 Q 595.038 93.041 596.09 80.997 A 64.634 64.634 0 0 0 596.325 75.375 A 58.61 58.61 0 0 0 595.633 66.065 Q 594.11 56.618 589.238 50.662 A 22.48 22.48 0 0 0 572.911 42.076 A 28.145 28.145 0 0 0 570.825 42 A 23.525 23.525 0 0 0 560.703 44.135 Q 556.048 46.32 552.469 50.743 A 28.891 28.891 0 0 0 552.412 50.812 Q 546.481 58.187 545.514 70.421 A 62.863 62.863 0 0 0 545.325 75.375 A 57.965 57.965 0 0 0 546.088 85.096 Q 546.967 90.254 548.858 94.4 A 27.85 27.85 0 0 0 552.413 100.237 A 23.568 23.568 0 0 0 560.255 106.753 Q 564.901 109.088 570.642 109.124 A 28.726 28.726 0 0 0 570.825 109.125 Z M 373.425 69.825 L 416.025 69.825 Q 416.025 60.962 413.614 54.914 A 21.214 21.214 0 0 0 409.988 48.825 A 19.723 19.723 0 0 0 397.951 42.233 A 28.83 28.83 0 0 0 393.15 41.85 A 30.648 30.648 0 0 0 385.054 42.858 A 21.319 21.319 0 0 0 373.537 50.475 A 30.113 30.113 0 0 0 368.661 60.021 Q 367.364 64.136 366.849 69.075 A 64.235 64.235 0 0 0 366.525 74.475 A 8.775 8.775 0 0 1 366.943 73.03 Q 367.238 72.28 367.654 71.738 A 3.502 3.502 0 0 1 368.925 70.688 A 8.112 8.112 0 0 1 370.741 70.083 Q 371.609 69.898 372.616 69.845 A 15.652 15.652 0 0 1 373.425 69.825 Z M 823.425 69.825 L 866.025 69.825 Q 866.025 60.962 863.614 54.914 A 21.214 21.214 0 0 0 859.988 48.825 A 19.723 19.723 0 0 0 847.951 42.233 A 28.83 28.83 0 0 0 843.15 41.85 A 30.648 30.648 0 0 0 835.054 42.858 A 21.319 21.319 0 0 0 823.537 50.475 A 30.113 30.113 0 0 0 818.661 60.021 Q 817.364 64.136 816.849 69.075 A 64.235 64.235 0 0 0 816.525 74.475 A 8.775 8.775 0 0 1 816.943 73.03 Q 817.238 72.28 817.654 71.738 A 3.502 3.502 0 0 1 818.925 70.688 A 8.112 8.112 0 0 1 820.741 70.083 Q 821.609 69.898 822.616 69.845 A 15.652 15.652 0 0 1 823.425 69.825 Z M 232.875 92.4 L 232.875 75.45 Q 227.325 75.675 222.525 76.2 Q 217.725 76.725 213.712 77.4 A 124.039 124.039 0 0 0 210.381 78.005 Q 208.355 78.403 206.625 78.825 A 56.006 56.006 0 0 0 201.66 80.217 Q 196.801 81.844 194.019 84.029 A 12.83 12.83 0 0 0 192.825 85.087 A 13.329 13.329 0 0 0 188.975 93.751 A 17.858 17.858 0 0 0 188.925 95.1 A 18.128 18.128 0 0 0 189.443 99.566 A 12.289 12.289 0 0 0 193.312 105.975 Q 197.014 109.202 203.306 109.76 A 30.655 30.655 0 0 0 205.725 109.875 Q 212.325 109.875 217.987 107.475 A 31.425 31.425 0 0 0 224.835 103.539 A 27.805 27.805 0 0 0 227.625 101.1 Q 231.6 97.125 232.875 92.4 Z M 948.825 116.7 L 894 116.7 L 894 108.6 L 948.825 108.6 L 948.825 116.7 Z M 1017.619 118.483 A 10.992 10.992 0 0 0 1020.9 118.95 A 12.187 12.187 0 0 0 1021.993 118.902 A 8.834 8.834 0 0 0 1027.912 116.062 A 8.921 8.921 0 0 0 1028.849 114.853 Q 1030.575 112.181 1030.575 108.075 Q 1030.575 105.884 1030.083 104.108 A 9.396 9.396 0 0 0 1027.913 100.125 A 8.617 8.617 0 0 0 1024.152 97.744 A 10.762 10.762 0 0 0 1020.9 97.275 A 12.474 12.474 0 0 0 1019.43 97.359 A 8.99 8.99 0 0 0 1013.775 100.125 Q 1011.993 102.006 1011.387 104.868 A 15.49 15.49 0 0 0 1011.075 108.075 Q 1011.075 110.187 1011.538 111.919 A 9.564 9.564 0 0 0 1013.775 116.063 A 8.738 8.738 0 0 0 1017.619 118.483 Z M 916.95 43.5 L 892.575 43.5 L 892.575 34.8 L 915.45 34.8 L 916.95 43.5 Z" vectorEffect="non-scaling-stroke"/></g></svg>
              <p className = "text-left">a webring :)</p>
              </a>
              <div className = "absolute inset-x-3 bottom-3">
                <iframe  className="w-full hidden md:visible md:inline h-20" allow-transparency="true" src = {`${process.env.NEXT_PUBLIC_BASE_URL}/api/widgets/0?format=minimal&style=text-align:center;font-family:monospace`}></iframe>
              </div>
              </div>
            </div>
            <div className = "bg-[url('../public/bg.svg')] bg-primary border-white w-full md:w-8/12 overflow-auto">
                <Header/>
                <Title title = {heading}/>
                <div className = "m-10">
                {children}
                </div>
            </div>
            </div>
        </main>
        </div>
    )
}
export default Layout