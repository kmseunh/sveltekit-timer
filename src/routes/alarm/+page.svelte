<script>
    import { onDestroy, onMount } from 'svelte';

    let alarmHours = '00';
    let alarmMinutes = '00';
    let alarms = [];
    let nextAlarmId = 1;

    const promptForHour = () => {
        const hoursInput = prompt('Enter the hours (0-23):');
        const hours = parseInt(hoursInput, 10);

        if (!isNaN(hours) && hours >= 0 && hours <= 23) {
            alarmHours = hours.toString().padStart(2, '0');
        } else {
            alert('Invalid input. Please enter valid hours (0-23).');
        }
    };

    const promptForMinute = () => {
        const minutesInput = prompt('Enter the minutes (0-59):');

        const minutes = parseInt(minutesInput, 10);

        if (!isNaN(minutes) && minutes >= 0 && minutes <= 59) {
            alarmMinutes = minutes.toString().padStart(2, '0');
        } else {
            alert('Invalid input. Please enter valid minutes (0-59).');
        }
    };

    const insertAlarm = () => {
        alarmHours =
            alarmHours === 0 ? '00' : alarmHours.toString().padStart(2, '0');

        alarmMinutes =
            alarmMinutes === 0
                ? '00'
                : alarmMinutes.toString().padStart(2, '0');

        alarms = [
            ...alarms,
            {
                id: nextAlarmId,
                time: `${alarmHours}:${alarmMinutes}`,
                status: false,
            },
        ];
        nextAlarmId++;
    };

    const handleToggle = (id) => {
        const index = alarms.findIndex((alarm) => alarm.id === id);
        if (index !== -1) {
            alarms[index].status = !alarms[index].status;
            alarms = [...alarms];
        }
    };

    const checkAlarms = () => {
        setInterval(() => {
            const now = new Date();
            const currentHours = now.getHours().toString().padStart(2, '0');
            const currentMinutes = now.getMinutes().toString().padStart(2, '0');

            alarms.forEach((alarm) => {
                if (
                    alarm.status &&
                    alarm.time === `${currentHours}:${currentMinutes}`
                ) {
                    alert('알람!!');
                    alarm.status = false;
                }
            });
        });
    };

    onMount(() => {
        checkAlarms();
    });

    onDestroy(() => {
        checkAlarms();
    });
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
            alarm
        </div>
        <div class="overflow-hidden">
            <div
                class="absolute mt-[.75rem] ml-[6.125rem] text-[5.9375rem] flex"
            >
                <div on:click={promptForHour} class="mr-2 cursor-pointer">
                    {alarmHours}
                </div>
                <span>:</span>
                <div on:click={promptForMinute} class="ml-2 cursor-pointer">
                    {alarmMinutes}
                </div>
            </div>
            <button
                on:click={insertAlarm}
                class="ml-[25.9375rem] mt-[2.3125rem]"
            >
                <svg
                    width="96"
                    height="96"
                    viewBox="0 0 96 96"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="48" cy="48" r="47.5" stroke="#FF8A00" />
                    <path
                        d="M46.6914 55.2832H33.4062V65.3398H29.3242V55.2832H16.1133V51.9062H46.6914V55.2832ZM43.834 38.9922H33.4805C33.6165 40.1178 34.1732 41.2126 35.1504 42.2764C36.1276 43.3402 37.4635 44.2617 39.1582 45.041C40.8529 45.8203 42.7826 46.3398 44.9473 46.5996L43.4258 49.8652C40.7044 49.5189 38.2923 48.7829 36.1895 47.6572C34.099 46.5192 32.4971 45.1276 31.3838 43.4824C30.2705 45.14 28.6624 46.5316 26.5596 47.6572C24.4567 48.7829 22.026 49.5189 19.2676 49.8652L17.7832 46.5996C19.9479 46.3398 21.8776 45.8265 23.5723 45.0596C25.2669 44.2803 26.609 43.3587 27.5986 42.2949C28.5882 41.2311 29.151 40.1302 29.2871 38.9922H18.9336V35.7266H29.3242V31.793H33.4062V35.7266H43.834V38.9922ZM75.2285 44.8555H80.2012V48.3066H75.2285V65.2285H71.1094V31.7559H75.2285V44.8555ZM66.3594 35.2441C66.3594 46.2533 61.2754 54.2565 51.1074 59.2539L48.7695 56.0625C52.8516 54.0339 55.9997 51.5785 58.2139 48.6963C60.4404 45.8141 61.764 42.4681 62.1846 38.6582H50.5879V35.2441H66.3594Z"
                        fill="#FF8A00"
                    />
                </svg>
            </button>
            <div class="mt-[30px] ml-[4.1875rem]">
                <svg
                    width="474"
                    height="1"
                    viewBox="0 0 474 1"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <line y1="0.5" x2="474" y2="0.5" stroke="black" />
                </svg>
            </div>
            <div
                class="absolute left-[3.6875rem] top-[25rem] w-[29.625rem] flex flex-col-reverse"
            >
                {#each alarms as alarm}
                    <div
                        class="flex text-[4.25rem] justify-between"
                        style="opacity: {alarm.status ? 1 : 0.8};"
                    >
                        <span>{alarm.time}</span>
                        <label class="toggle-switch mt-[35px]">
                            <input
                                type="checkbox"
                                checked={alarm.status}
                                on:change={() => handleToggle(alarm.id)}
                            />
                            <span class="slider"></span>
                        </label>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>

<style>
    .toggle-switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
    }

    .toggle-switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #000000;
        transition: 0.4s;
        border-radius: 34px;
    }

    .slider:before {
        position: absolute;
        content: '';
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: #212121;
        transition: 0.4s;
        border-radius: 50%;
    }

    input:checked + .slider {
        background-color: #ff8a00;
    }

    input:checked + .slider:before {
        background-color: white;
        transform: translateX(26px);
    }
</style>
