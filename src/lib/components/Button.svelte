<script>
    import { goto } from '$app/navigation';

    export let btnName;
    export let className;
    export let to;

    const handleClick = () => {
        goto(to);
    };
</script>

<button
    class="rounded-[70px] h-[5.625rem] pt-5 pr-14 pb-5 pl-14 flex flex-row gap-2.5 items-center justify-center relative overflow-hidden font-light uppercase text-[2.625rem] {className}"
    on:click={handleClick}
>
    {btnName}
</button>
