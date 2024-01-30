<script>
    import Button from '$lib/components/Button.svelte';
</script>

<div class="flex items-center justify-center h-screen">
    <div class="bg-rec w-[38rem] h-[54.5rem] rounded-[1.875rem] relative">
        <div
            class="text-7xl font-semibold justify-center items-center flex mt-[11.0625rem] uppercase relative"
        >
            kim’s time
        </div>
        <div class="flex items-center justify-center mt-[5.875rem]">
            <Button
                to="/timer"
                btnName="timer"
                className="bg-btn w-[13.8125rem]"
            />
        </div>
        <div class="flex items-center justify-center mt-[2.125rem]">
            <Button
                to="/stopwatch"
                btnName="stopwatch"
                className="bg-rec text-btn border-btn border-2 w-[20.1875rem]"
            />
        </div>
        <div class="flex items-center justify-center mt-[2.175rem]">
            <Button
                to="/alarm"
                btnName="alarm"
                className="bg-btn w-[13.8125rem]"
            />
        </div>
    </div>
</div>
