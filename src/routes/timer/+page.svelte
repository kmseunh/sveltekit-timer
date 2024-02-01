<script>
    import { onMount, onDestroy } from 'svelte';
    let minutes = 0;
    let seconds = 0;
    let timer;
    let isRunning = false;

    const startTimer = () => {
        timer = setInterval(() => {
            if (seconds > 0) {
                seconds -= 1;
            } else {
                if (minutes === 0) {
                    clearInterval(timer);
                    isRunning = false;
                    return;
                }
                seconds = 59;
                minutes -= 1;
            }
        }, 1000);
        isRunning = true;
    };

    const pauseTimer = () => {
        clearInterval(timer);
        isRunning = false;
    };

    $: formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    $: formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    const toggleTimer = () => {
        if (isRunning) {
            pauseTimer();
        } else {
            const timeInput = prompt(
                '콜론으로 구분된 분과 초를 입력합니다(예: 10:30)',
                '0:0'
            );
            const [inputMinutes, inputSeconds] = timeInput
                .split(':')
                .map((str) => parseInt(str, 10));
            if (!isNaN(inputMinutes) && !isNaN(inputSeconds)) {
                minutes = inputMinutes;
                seconds = inputSeconds;
                startTimer();
            } else {
                alert('유효한 분 및 초를 입력하십시오.');
            }
        }
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
            timer
        </div>
        <div class="absolute inset-0 flex items-center justify-center">
            <div
                class="bg-[#000000] rounded-full w-[25.75rem] h-[25.75rem] relative"
            >
                <div
                    class="rounded-full border-solid border-[#ff8a00] border-[11px] w-96 h-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                    <div
                        id="timer"
                        class="text-[5.9375rem] mt-[6.5625rem] font-semibold uppercase relative flex items-center justify-center"
                    >
                        {formattedMinutes}:{formattedSeconds}
                    </div>
                </div>
            </div>
        </div>
        <div class="absolute bottom-[85px] left-0 right-0 flex justify-center">
            {#if isRunning}
                <button
                    class="svg-button"
                    on:click={toggleTimer}
                    aria-label="Pause Timer"
                >
                    <svg
                        class="mr-[34px]"
                        width="96"
                        height="96"
                        viewBox="0 0 96 96"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="48" cy="48" r="47.5" stroke="white" />
                        <rect
                            x="31"
                            y="29"
                            width="13"
                            height="38"
                            rx="5"
                            fill="white"
                        />
                        <rect
                            x="52"
                            y="29"
                            width="13"
                            height="38"
                            rx="5"
                            fill="white"
                        />
                    </svg>
                </button>
            {:else}
                <button
                    class="svg-button"
                    on:click={toggleTimer}
                    aria-label="Start Timer"
                >
                    <svg
                        class="mr-[34px]"
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
                            d="M67.838 45.4437C69.7445 46.6147 69.7445 49.3853 67.838 50.5563L41.3201 66.8437C39.3212 68.0714 36.75 66.6332 36.75 64.2873L36.75 31.7127C36.75 29.3668 39.3212 27.9286 41.3201 29.1563L67.838 45.4437Z"
                            fill="white"
                        />
                    </svg>
                </button>
            {/if}
            <button class="svg-button" aria-label="Stop Timer">
                <svg
                    width="96"
                    height="96"
                    viewBox="0 0 96 96"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="48" cy="48" r="47.5" stroke="#FF8A00" />
                    <rect
                        x="29"
                        y="29"
                        width="38"
                        height="38"
                        rx="5"
                        fill="#FF8A00"
                    />
                </svg>
            </button>
        </div>
    </div>
</div>
