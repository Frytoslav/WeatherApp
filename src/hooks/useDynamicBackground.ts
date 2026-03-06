function useDynamicBackground (weatherId: number | null | undefined) {
    if (!weatherId) return "";

    switch (true) {
        case (weatherId >= 200 && weatherId < 600):
            return "with-rain";

        case (weatherId >= 600 && weatherId < 700):
            return "with-snow";

        case (weatherId >= 700 && weatherId < 800):
            return "with-fog";

        case (weatherId === 800):
            return "with-sun-rays";

        case (weatherId > 800 && weatherId < 900):
            return "with-clouds";

        default:
            return "";
    }
}

export { useDynamicBackground };