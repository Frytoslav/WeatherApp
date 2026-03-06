{/*TO DO: Make this background component more dynamic based on the weather conditions */}
import { useDynamicBackground } from '../hooks/useDynamicBackground';

interface BackgroundProps {
    weatherId?: number | null;
}
function Background({weatherId}: BackgroundProps) {
    const dynamicClass = useDynamicBackground(weatherId);
    return (
        <div className={`fixed top-0 left-0 w-full h-full bg-gray-800 -z-10 ${dynamicClass}`}></div>
    );
}
export default Background