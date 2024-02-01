<script>
    let milliseconds = 0;
    let seconds = 0;
    let minutes = 0;

    const startWatch = () => {
        const timer = setInterval(() => {
            milliseconds++;
            if (milliseconds === 1000) {
                milliseconds = 0;
                seconds++;
            }
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
        }, 1);
        return timer;
    };
</script>

<div class="flex items-center justify-center h-screen">
    <div class="bg-rec w-[38rem] h-[54.5rem] rounded-[1.875rem] relative">
        <div
            class="text-btn text-[1.375rem] font-light uppercase relative flex items-center justify-center mt-[5.3125rem]"
        >
            kim’s time
        </div>
        <div
            class="text-[3.4375rem] font-semibold uppercase relative flex items-center justify-center"
        >
            stopwatch
        </div>
        <div class="w-[30.1875rem] h-[7.3125rem]">
            <div
                class="w-[483px] h-[7.3125rem] absolute left-[3.4375rem] top-[14.875rem] rounded-[15px] border-[.0313rem] border-btn"
            ></div>
            <p
                class="absolute left-[3.9375rem] top-[14.0625rem] text-[5.9375rem] font-semibold uppercase"
            >
                {minutes < 10 ? '0' + minutes : minutes}:{seconds < 10
                    ? '0' + seconds
                    : seconds}.{milliseconds < 10
                    ? '00' + milliseconds
                    : milliseconds < 100
                      ? '0' + milliseconds
                      : milliseconds}
            </p>
            <button id="lap" class="absolute left-[5.5rem] top-[25.5625rem]">
                <svg
                    width="96"
                    height="96"
                    viewBox="0 0 96 96"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="48"
                        cy="48"
                        r="47.5"
                        fill="white"
                        fill-opacity="0.4"
                        stroke="white"
                    />
                    <path
                        d="M61.7988 50.3848H57.8652V42.7031H54.377V50.125H50.5176V32.3496H54.377V39.4375H57.8652V31.793H61.7988V50.3848ZM43.2441 54.9863H57.7168V51.832H61.7988V64.8945H39.1621V51.832H43.2441V54.9863ZM57.7168 61.5547V58.2148H43.2441V61.5547H57.7168ZM47.252 42.8145H38.5312V46.0615C40.7331 46.0244 42.6009 45.9502 44.1348 45.8389C45.6686 45.7275 47.2272 45.5111 48.8105 45.1895L49.1816 48.4922C47.2643 48.8385 45.3841 49.0736 43.541 49.1973C41.7103 49.321 39.4714 49.3828 36.8242 49.3828H34.5234V39.7715H43.2812V36.877H34.4863V33.6113H47.252V42.8145Z"
                        fill="white"
                    />
                </svg></button
            >
            <button
                id="start"
                on:click={startWatch}
                class="absolute left-[25.5rem] top-[25.5625rem]"
                ><svg
                    width="96"
                    height="96"
                    viewBox="0 0 96 96"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="48" cy="48" r="47.5" stroke="#FF8A00" />
                    <path
                        d="M28.8047 39.8086C28.7923 41.8743 29.1325 43.8844 29.8252 45.8389C30.5179 47.7933 31.5199 49.5312 32.8311 51.0527C34.1423 52.5742 35.6823 53.7122 37.4512 54.4668L35.002 57.7695C33.1094 56.8913 31.458 55.611 30.0479 53.9287C28.6501 52.2464 27.5553 50.2858 26.7637 48.0469C25.972 50.4714 24.8525 52.599 23.4053 54.4297C21.9704 56.248 20.2572 57.6211 18.2656 58.5488L15.7422 55.0977C17.5605 54.3184 19.1377 53.1432 20.4736 51.5723C21.8219 49.9889 22.8486 48.1768 23.5537 46.1357C24.2588 44.0824 24.6113 41.9733 24.6113 39.8086V34.4648H28.8047V39.8086ZM44.0195 65.3398H39.8633V31.7559H44.0195V65.3398ZM60.9785 37.582C60.9785 38.9798 61.2754 40.3343 61.8691 41.6455C62.4753 42.9443 63.3721 44.1071 64.5596 45.1338C65.7594 46.1605 67.2129 46.9583 68.9199 47.5273L66.8418 50.7188C65.0111 50.1126 63.4277 49.2158 62.0918 48.0283C60.7559 46.8285 59.7106 45.4245 58.9561 43.8164C58.2015 45.5729 57.1253 47.1006 55.7275 48.3994C54.3421 49.6859 52.6908 50.6569 50.7734 51.3125L48.584 48.1211C50.3405 47.5397 51.8372 46.7109 53.0742 45.6348C54.3112 44.5462 55.2451 43.3092 55.876 41.9238C56.5068 40.526 56.8223 39.0788 56.8223 37.582V37.1738H49.7344V33.8711H67.9551V37.1738H60.9785V37.582ZM75.4141 40.1426H80.0898V43.5938H75.4141V51.9805H71.2949V31.7559H75.4141V40.1426ZM75.4141 65.3027H71.2949V56.8418H53.0742V53.5391H75.4141V65.3027Z"
                        fill="#FF8A00"
                    />
                </svg>
            </button>
            <div id="line" class="absolute left-[3.6875rem] top-[35.8125rem]">
                <svg
                    width="474"
                    height="1"
                    viewBox="0 0 474 1"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <line y1="0.5" x2="474" y2="0.5" stroke="#FF8A00" />
                </svg>
            </div>
            <div
                class="absolute left-[3.6875rem] top-[36.875rem] w-[29.625rem] flex justify-between"
            >
                <span id="lab1">랩1</span>
                <span id="lab1-time">00:00.00</span>
            </div>
        </div>
    </div>
</div>
