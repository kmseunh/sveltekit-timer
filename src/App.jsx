import Button from './components/Button';

function App() {
    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='w-[38rem] h-[54.5rem] bg-rec rounded-[1.875rem] relative'>
                <div className='text-7xl font-semibold  relative flex items-center justify-center mt-[11.0625rem] uppercase'>
                    kim&apos;s time
                </div>
                <div className='flex items-center justify-center mt-[5.875rem]'>
                    <Button
                        to={'/timer'}
                        className='bg-btn w-[13.8125rem] '
                        btnName={'timer'}
                    />
                </div>
                <div className='flex items-center justify-center mt-[2.125rem]'>
                    <Button
                        to={'/stopwatch'}
                        className='bg-rec text-btn border-btn border-2 w-[20.1875rem] '
                        btnName={'stopwatch'}
                    />
                </div>
                <div className='flex items-center justify-center mt-[2.125rem]'>
                    <Button
                        to={'/alarm'}
                        className='bg-btn w-[13.8125rem] '
                        btnName={'alarm'}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
