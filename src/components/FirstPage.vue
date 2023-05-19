<template>
  <button id="Button" @mouseenter="over" @mouseleave="out" class="Button__background">
    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 1490.01 1111.6">
      <image
        mask="url(#mask)"
        class="Button__background"
        xlink:href="https://image.freepik.com/free-vector/marble-texture-background-pastel-colors_56745-9.jpg"
        x="0"
        y="0"
        height="100%"
        width="100%"
      />
      <defs>
        <filter id="gooey" height="150%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
            result="goo"
          />
        </filter>
      </defs>
      <mask id="mask">
        <g style="filter: url(#gooey)">
          <path
            id="bgBlobStart"
            fill="white"
            stroke="white"
            d="M684.62 309.07c77.64-27.55 169.41-56.73 247.52-50.68s142.52 47 152.38 98.64-34.67 114-56.17 166.71-20 95.83-48.4 130.09-86.87 59.79-151.58 97.17c-64.54 37.31-135.3 86.51-193.7 86.17-58.58-.43-104.78-50.3-133.23-94.26s-39.14-82-56.27-119.32-40.66-73.59-36-112.65c4.79-39.19 38-81 86.29-114.87s111.67-59.6 189.16-87z"
          />
          <path
            id="bgBlobEnd"
            fill="white"
            stroke="white"
            d="M905.85 301.31c49.09 16.62 63.94 71.05 116.62 107.69 52.87 36.7 143.73 55.57 162.6 92.43s-34.24 91.8-93.28 136.78-124 80.12-191 99.22c-66.9 19-135.9 22-213.94 33.38s-165.25 31.31-229.68 20.75C392.56 781 350.75 740 336.1 693.43c-14.83-46.55-2.32-98.72 25-148.2s69.63-96.06 126.82-132 129.14-61 207.13-84.18c77.85-23.19 161.54-44.33 210.8-27.74z"
          />
          <circle class="circleBottom circle" cx="276.98" cy="628.31" r="23.16" />
          <circle class="circleBottom circle" cx="528.26" cy="867.81" r="39.52" />
          <circle class="circleBottom circle" cx="204.98" cy="760.82" r="33.73" />
          <circle class="circleBottom circle" cx="488.73" cy="954.56" r="23.16" />
          <circle class="circleBottom circle" cx="371.28" cy="907.33" r="31.26" />
          <circle class="circleBottom circle" cx="329.79" cy="783.97" r="23.16" />
          <circle class="circleTop circle" cx="1155.21" cy="286.38" r="33.73" />
          <circle class="circleTop circle" cx="1044.52" cy="358.74" r="23.16" />
          <circle class="circleTop circle" cx="965.31" cy="192.59" r="39.52" />
          <circle class="circleTop circle" cx="1189.14" cy="418.22" r="25.16" />
          <circle class="circleTop circle" cx="1107.62" cy="136.89" r="33.73" />
          <circle class="circleTop circle" cx="1295.95" cy="327.49" r="31.26" />
        </g>
      </mask>
      <path
        id="frontBlobStart"
        class="frontBlob"
        d="M981.72 372.33c56.87 13.9 100.57 39.75 119.1 69.47 18.69 29.61 12.06 63.19 2.24 95.77s-22.64 64.15-59.94 84.86C1006 643.2 944.56 653 882.26 672.51c-62.48 19.52-126 48.76-198 58.09s-152.7-1.24-215.47-25.14-107.61-61.15-106.2-100.18c1.24-38.93 48.72-79.64 103.82-108.11s117.62-44.86 172-66.51 100.38-48.86 158.5-61.47 127.94-10.75 184.81 3.14z"
      />
      <path
        id="frontBlobEnd"
        class="frontBlob"
        d="M915.49 434c62.08 31.56 138.58 48.94 170.89 76.61 32.14 27.65 19.92 65.59 13.7 107.53-6.4 41.93-7 87.76-51.66 110.19-44.52 22.45-133.32 21.41-209.14 12.6-75.65-8.7-138.66-25.28-189.62-44.87-51.13-19.6-90.21-42.2-147.44-66.72s-132.41-51.09-166.37-86.25C301.71 508 309 464.35 347 431.66S453.7 377.25 527.43 359c73.56-18.35 151.94-33.34 215.05-17.91S853.24 402.42 915.49 434z"
      />

      <path
        class="Button__text"
        d="M546.47 594.6V531h17.23v22.75h8.16V531h17.23v63.6h-17.23v-28.89h-8.16v28.89zM601.48 590.49q-5.48-4.71-5.48-13.23V547q0-8.22 5.44-12.41t15.92-4.18q10.49 0 15.92 4.18t5.48 12.41v30.3q0 8.6-5.44 13.27t-15.92 4.66q-10.48-.04-15.92-4.74zm19-8.48a8.78 8.78 0 0 0 .81-4.15v-31.12a6.57 6.57 0 0 0-.76-3.37c-.5-.86-1.52-1.3-3.07-1.3q-4.34 0-4.33 4.82v31a7.67 7.67 0 0 0 .91 4.15 3.64 3.64 0 0 0 3.32 1.41 3.23 3.23 0 0 0 3.16-1.45zM653.67 594.6L643 530.89h16.53l6.34 43.34 5.65-43.34H688l-10.65 63.71zM693 594.6V531h34.66v12.3h-17v12.37h16.32v12H710.6v14.6h18.13v12.33zM734.48 531h26.6q6.34 0 9.82 2.11a10.4 10.4 0 0 1 4.68 5.93 32.71 32.71 0 0 1 1.21 9.74c0 3.61-.64 6.42-1.91 8.45s-3.49 3.43-6.65 4.22a8.41 8.41 0 0 1 5.69 2.89 10 10 0 0 1 1.77 6.22l-.21 24.08h-16.92v-24.93c0-1.78-.47-2.92-1.41-3.41a12.37 12.37 0 0 0-5.14-.74v29h-17.53zm21.76 23.56q3.63 0 3.63-5.78a16.85 16.85 0 0 0-.31-3.78 2.62 2.62 0 0 0-1.1-1.74 4.59 4.59 0 0 0-2.32-.48h-4v11.78zM806.11 594.6V531h26.4l7.25 38.82L847 531h26.6v63.6h-15.8v-45.86l-10 45.86h-15.49l-10.58-45.86v45.86zM881.27 594.6V531h34.66v12.3h-17v12.37h16.32v12h-16.34v14.6H917v12.33z"
      />
    </svg>
    <span class="screenreader-only">Click here.</span>
  </button>
</template>

<script>
import { gsap, Back } from "gsap";

export default {
  methods: {
    over() {
      this.tl.play().timeScale(1);
    },
    out() {
      console.log("leaving");
      this.tl.reverse().timeScale(3);
    },
  },
  mounted() {
    const tl = gsap.timeline({ paused: true });
    tl.set(".circle", { autoAlpha: 0 })
      .to(
        "#bgBlobStart",
        {
          morphSVG: {
            shape: "#bgBlobEnd",
            type: "rotational",
          },
          duration: 3,
          ease: Back.easeOut.config(3),
        },
        0.2
      )
      .to(
        "#frontBlobStart",
        {
          morphSVG: {
            shape: "#frontBlobEnd",
            type: "rotational",
          },
          duration: 3,
          ease: Back.easeOut.config(3),
        },
        0
      )
      .from(
        ".circleTop",
        {
          x: -100,
          y: 100,
          autoAlpha: 0,
          svgOrigin: "center",
          ease: Back.easeOut.config(3),
          stagger: 0.15,
          duration: 1.5,
        },
        0.5
      )
      .from(
        ".circleBottom",
        {
          x: 100,
          y: -100,
          autoAlpha: 0,
          svgOrigin: "center",
          ease: Back.easeOut.config(3),
          stagger: 0.15,
          duration: 1,
        },
        0.5
      )
      .to(
        ".circleTop",
        {
          autoAlpha: 1,
          ease: Back.easeOut.config(3),
          stagger: 0.15,
          duration: 0.1,
        },
        0.5
      )
      .to(
        ".circleBottom",
        {
          autoAlpha: 1,
          ease: Back.easeOut.config(3),
          stagger: 0.15,
          duration: 0.1,
        },
        0.5
      );

    this.tl = tl;
  },
};
</script>
<style scoped>
@import "@/assets/scss/first/style.css";
</style>
